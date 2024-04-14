import type { Metadata } from "next";
import "@assets/globals.css";
import Provider from "@plugins/theme/Provider";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata: Metadata = {
    title: "Bookhunt",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Provider>
                <body>
                    <Header />
                    <div>{children}</div>
                </body>
            </Provider>
        </html>
    );
}
