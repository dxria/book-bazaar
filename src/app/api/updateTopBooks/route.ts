import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { TTopBookToSave } from "@plugins/types/booksTypes";
import { YakabooObj as bookstore } from "@constants/index";
import ConnectToDB from "@utils/db-connection";
import prisma from "@utils/prisma-client";

async function ScrapeTop(url: string): Promise<TTopBookToSave[]> {
    const returnArray: TTopBookToSave[] = [];

    const page = await fetch(url);
    const html = await page.text();
    const $ = cheerio.load(html);

    const cards = $(bookstore.cardsClass);

    const baseUrl = bookstore.baseURL;

    const foundUrls: any[] = [];
    cards.each((i, el) => {
        if (i < 5) {
            const elLink = $(el)
                .find(bookstore.linkFinders.find)
                .attr(bookstore.linkFinders.attr);

            if (elLink) {
                if (elLink.startsWith("http")) {
                    foundUrls.push(elLink);
                } else {
                    foundUrls.push(baseUrl.concat(elLink));
                }
            }
        }
    });
    const objs: TTopBookToSave[] = await Promise.all(
        Array.from(foundUrls, async (link) => {
            const response = await fetch(link);
            const html = await response.text();
            const $ = cheerio.load(html);

            let elImage = $(bookstore.pageClasses.image).attr(
                bookstore.pageClasses.imageAttr,
            );
            const elTitle = $(bookstore.pageClasses.title).text().trim();
            const elAuthor = $(bookstore.pageClasses.author).text().trim();

            if (elImage?.startsWith("/")) elImage = baseUrl.concat(elImage);

            const words = elTitle.split(" ");
            const title = words
                .filter(
                    (word) => !["Книга", "Електронна", "книга"].includes(word),
                )
                .join(" ");

            return {
                img: elImage,
                title: title,
                author: elAuthor,
            };
        }),
    );

    returnArray.push(...objs);

    return returnArray;
}

export async function GET() {
    try {
        const booksToSave = await ScrapeTop(
            "https://www.yakaboo.ua/ua/knigi.html?published_at=latest&sort=stock.is_in_stock:desc,published_at:desc",
        );

        await ConnectToDB();

        const findAll = await prisma.topBooks.findMany({});

        if (findAll?.length > 0) {
            await prisma.topBooks.deleteMany({});
            await prisma.topBooks.createMany({ data: booksToSave });
        } else {
            await prisma.topBooks.createMany({ data: booksToSave });
        }

        return NextResponse.json(booksToSave, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
