import { NextResponse } from "next/server";
import ConnectToDB from "@utils/db-connection";
import prisma from "@utils/prisma-client";

export async function GET() {
    try {
        await ConnectToDB();

        const books = await prisma.topBooks.findMany({});

        return NextResponse.json(books, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
