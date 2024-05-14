import { NextResponse } from "next/server";
import ConnectToDB from "@utils/db-connection";
import prisma from "@utils/prisma-client";

export async function GET() {
    try {
        await ConnectToDB();

        const promos = await prisma.promos.findMany({});

        const sortedPromos = promos.map((promo) => {
            return {
                id: promo.id,
                url: promo.url,
                img: promo.img,
                title: promo.title,
                description: promo.description,
                bookshop: {
                    name: promo.bookshopName,
                    image: promo.bookshopImage,
                },
            };
        });
        return NextResponse.json(sortedPromos, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
