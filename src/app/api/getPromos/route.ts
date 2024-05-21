import { NextResponse } from "next/server";
import { TPromo } from "@plugins/types/booksTypes";
import ConnectToDB from "@utils/db-connection";
import prisma from "@utils/prisma-client";

export async function GET() {
    try {
        await ConnectToDB();

        const promos = await prisma.promos.findMany({});

        const groupedPromos: TPromo = {};

        promos.forEach((promo: any) => {
            const promoData = {
                id: promo.id,
                url: promo.url,
                img: promo.img,
                title: promo.title,
                description: promo.description,
            };

            if (!groupedPromos[promo.bookshopName]) {
                groupedPromos[promo.bookshopName] = [];
            }

            groupedPromos[promo.bookshopName].push(promoData);
        });
        return NextResponse.json(groupedPromos, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
