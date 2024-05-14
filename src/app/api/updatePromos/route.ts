import { NextResponse } from "next/server";
import { shopPromoDependencies } from "@constants/promos";
import { TPromoToSave } from "@plugins/types/booksTypes";
import * as cheerio from "cheerio";
import ConnectToDB from "@utils/db-connection";
import prisma from "@utils/prisma-client";

async function ScrapePromo(): Promise<TPromoToSave[]> {
    const returnArray: TPromoToSave[] = [];

    await Promise.all(
        Object.values(shopPromoDependencies).map(async (promo) => {
            const response = await fetch(promo.url);
            const html = await response.text();
            const $ = cheerio.load(html);

            const cards = $(promo.cardsClass);

            const cardsArray = cards
                .map((i, el) => {
                    const elLink = $(el)
                        .find(promo.linkFinders.find)
                        .attr(promo.linkFinders.attr);
                    const elImage = $(el)
                        .find(promo.pageClasses.image)
                        .attr(promo.pageClasses.imageAttr);
                    const elTitle = $(el)
                        .find(promo.pageClasses.title)
                        .text()
                        .trim();
                    const elDescription = $(el)
                        .find(promo.pageClasses.description)
                        .text()
                        .trim();

                    if (elTitle && elTitle.length > 0) {
                        return {
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
                            bookshopName: promo.bookshop.name,
                            bookshopImage: promo.bookshop.image,
                           
                        };
                    }
                })
                .get();

            returnArray.push(...cardsArray);
        }),
    );
    return returnArray;
}

export async function GET() {
    try {
        const promosToSave = await ScrapePromo();
        await ConnectToDB();

        const findAll = await prisma.promos.findMany({});

        if (findAll?.length > 0) {
            await prisma.promos.deleteMany({});
            await prisma.promos.createMany({ data: promosToSave });
        } else {
            await prisma.promos.createMany({ data: promosToSave });
        }

        return NextResponse.json(promosToSave, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
