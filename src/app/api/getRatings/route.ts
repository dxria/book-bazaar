import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { Goodreads } from "@constants/index";
import { TRating, TReview } from "@plugins/types/booksTypes";

export async function POST(req: NextRequest) {
    try {
        const { search }: { search: string } = await req.json();
        let counter = 0;
        const foundUrls: any[] = [];
        let genres: string[] = [];
        const reviews: TReview[] = [];
        let returnValue: TRating | undefined;

        const url = Goodreads.searchURL.concat(search);

        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const cards = $(Goodreads.bookTitleLink);

        cards.each((i, el) => {
            if (i < 1) {
                const elLink = $(el).attr(Goodreads.bookTitleLinkAttr);

                if (elLink) {
                    if (elLink.startsWith("http")) {
                        foundUrls.push(elLink);
                    } else {
                        foundUrls.push(Goodreads.baseURL.concat(elLink));
                    }
                }
            }
        });
        if (foundUrls.length > 0) {
            const response1 = await fetch(foundUrls[0]);
            const html1 = await response1.text();
            const $1 = cheerio.load(html1);

            let elStars = $1(Goodreads.booksStars).text().trim();
            let elGenres = $1(Goodreads.bookGenres);

            elGenres.each((i, el) => {
                const genre = $1(el).text();
                genres.push(genre);
            });

            const reviewsCards = $1(Goodreads.reviews.cards);

            reviewsCards.each((i, el) => {
                if (i < 5) {
                    const img = $1(el)
                        .find(Goodreads.reviews.img)
                        .attr(Goodreads.reviews.imgAttr);
                    const name = $1(el)
                        .find(Goodreads.reviews.name)
                        .text()
                        .trim();
                    const starsText = $1(el)
                        .find(Goodreads.reviews.stars)
                        .attr("aria-label");
                    const text = $1(el)
                        .find(Goodreads.reviews.text)
                        .text()
                        .trim();

                    const stars = starsText ? starsText?.split(" ")[1] : "0";

                    reviews.push({
                        id: counter,
                        img: img,
                        name: name,
                        stars: Number(stars),
                        text: text.slice(0, 150).trim(),
                    });
                    counter++;
                }
            });
            returnValue = {
                url: foundUrls[0],
                stars: elStars,
                genres: genres,
                reviews: reviews,
            };
        }

        return NextResponse.json(returnValue, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
