import { NextResponse } from "next/server";
import { shopPromoDependencies } from "@constants/promos";
import { TPromo } from "@plugins/types/booksTypes";
import * as cheerio from "cheerio";

export async function GET() {
    try {
        let counter = 0;
        const returnArray: TPromo[] = [];

        await Promise.all(
            Object.values(shopPromoDependencies).map(async (promo) => {
                const response = await fetch(promo.url);
                const html = await response.text();
                const $ = cheerio.load(html);

                const cards = $(promo.cardsClass);

                const cardsArray = cards
                    .map((i, el) => {
                        const elLink = $(el).attr("href");
                        const elImage = $(el)
                            .find(".promotion-image-wrapper img")
                            .attr("src");
                        const elTitle = $(el)
                            .find(".promotion-title")
                            .text()
                            .trim();
                        const elDescription = $(el)
                            .find(".promotion-description")
                            .text()
                            .trim();

                        return {
                            id: counter++,
                            url: elLink
                                ? elLink.startsWith("http")
                                    ? elLink
                                    : promo.baseURL.concat(elLink)
                                : promo.url,
                            img: elImage
                                ? elImage?.startsWith("/")
                                    ? promo.baseURL.concat(elImage)
                                    : elImage
                                : undefined,
                            title: elTitle,
                            description: elDescription,
                            bookshop: {
                                name: promo.bookshop.name,
                                image: promo.bookshop.image,
                            },
                        };
                    })
                    .get();

                returnArray.push(...cardsArray);
            }),
        );
        return NextResponse.json(returnArray, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
