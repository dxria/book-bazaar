import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const url = await req.json();
        console.log(url, "url");

        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const cards = $("div.category-card");
        cards.each((i, el) => {
            const elImage = $(el).find(".product-image__thumb");
            const elTitle = $(el).find(".category-card__name").text();
            const elAuthor = $(el).find(".creators-label").text();
            const elPrice = $(el).find(".ui-price-display__main span").text();

            console.log(elImage, elTitle, elAuthor, elPrice, i);
        });
        // console.log(cards, "$cards");

        return NextResponse.json({ message: "success." }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: `error. ${error}` },
            { status: 500 },
        );
    }
}
