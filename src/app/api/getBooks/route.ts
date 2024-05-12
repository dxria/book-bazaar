import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { shopFuncDependencies } from "@constants/index";
import { TBook, TBookstoreConstant } from "@plugins/types/booksTypes";
import { extractPriceAndCurrency } from "@helpers/extractPriceAndCurrency";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { search }: { search: string } = await req.json();
        let counter = 0;
        const returnArray: TBook[] = [];

        await Promise.all(
            Object.values(shopFuncDependencies).map(
                async (bookstore: TBookstoreConstant) => {
                    const url = bookstore.searchURL.concat(search);

                    // console.log(url);
                    const response = await fetch(url);
                    const html = await response.text();
                    const $ = cheerio.load(html);

                    const cards = $(bookstore.cardsClass);

                    const baseUrl = bookstore.baseURL;

                    const foundUrls: any[] = [];
                    cards.each((i, el) => {
                        if (i < 3) {
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
                    const objs: TBook[] = await Promise.all(
                        Array.from(foundUrls, async (link) => {
                            const response = await fetch(link);
                            const html = await response.text();
                            const $ = cheerio.load(html);
                            let elImage = $(bookstore.pageClasses.image).attr(
                                bookstore.pageClasses.imageAttr,
                            );
                            const elTitle = $(bookstore.pageClasses.title)
                                .text()
                                .trim();
                            const elAuthor = $(bookstore.pageClasses.author)
                                .text()
                                .trim();

                            const price = $(bookstore.pageClasses.price)
                                .text()
                                .trim();
                            counter++;
                            if (elImage?.startsWith("/"))
                                elImage = baseUrl.concat(elImage);

                            return {
                                id: counter,
                                url: link,
                                img: elImage,
                                title: elTitle,
                                author: elAuthor,
                                price: extractPriceAndCurrency(price),

                                currency: "грн",
                                bookshop: {
                                    name: bookstore.bookshop.name,
                                    image: bookstore.bookshop.image,
                                },
                            };
                        }),
                    );

                    returnArray.push(...objs);
                },
            ),
        );
        // console.log(returnArray, "returnArray");
        returnArray.sort((a, b) => a.price - b.price);

        return NextResponse.json(returnArray, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
