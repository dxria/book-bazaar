import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { search }: { search: string } = await req.json();
        let counter = 0;
        const url = "https://www.yakaboo.ua/ua/search?q=".concat(search);

        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const cards = $("div.category-card");
        const baseUrl = "https://www.yakaboo.ua";
        const foundUrls: any[] = [];
        cards.each((i, el) => {
            if (i < 2) {
                const elLink = $(el).find("a").attr("href");
                if (elLink) {
                    foundUrls.push(baseUrl.concat(elLink));
                }
            }
        });
        const objs = await Promise.all(
            Array.from(foundUrls, async (link) => {
                const response = await fetch(link);
                const html = await response.text();
                const $ = cheerio.load(html);
                const elImage = $(".slide__img").attr("src");
                const elTitle = $(".main__header .base-product__title h1")
                    .text()
                    .trim();
                const elAuthor = $(".main__header .base-product__author a")
                    .text()
                    .trim();
                const elPrice = $(
                    ".side .base-product__price .ui-price-display__main span:first-child",
                )
                    .text()
                    .trim();
                const elCurrency = $(
                    ".side .base-product__price .ui-price-display__main .ui-price-display__currency",
                )
                    .text()
                    .trim();
                counter++;
                return {
                    id: counter,
                    url: link,
                    img: elImage,
                    title: elTitle,
                    author: elAuthor,
                    price: +elPrice,
                    currency: elCurrency,
                };
            }),
        );

        // console.log(objs, "url");

        return NextResponse.json({ books: objs }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}

// const shopFuncDependencies = {
//     yakaboo: yakabooBooks(),
//     bookYe:
// }
