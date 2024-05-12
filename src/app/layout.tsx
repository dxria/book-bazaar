import type { Metadata } from "next";
import "@assets/globals.css";
import Provider from "@plugins/theme/Provider";
import Header from "@components/Header/Header";

export const metadata: Metadata = {
    title: "Book Bazaar",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Provider>
                <body style={{ padding: "30px 70px" }}>
                    <Header />
                    <div>{children}</div>
                </body>
            </Provider>
        </html>
    );
}
