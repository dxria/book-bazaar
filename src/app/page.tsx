import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section
                className="banner"
                style={{ display: "flex", gap: "30px" }}>
                <div
                    style={{
                        width: "60%",
                        display: "flex",
                        flexFlow: "column nowrap",
                        gap: "40px",
                        margin: "100px 0px",
                        lineHeight: 1.4,
                    }}>
                    <h1 style={{ fontSize: "56px", margin: "0px" }}>
                        Дізнайтесь про нові ексклюзивні пропозиції топових
                        онлайн-книгарень та порівняйте ціни на обрані книги!
                    </h1>
                    <span style={{ margin: "0px", fontSize: "20px" }}>
                        Агрегатор цін книгарень та доступні акційні пропозиції
                    </span>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <Link
                            href="/search?title=таємна%20історія"
                            style={{
                                color: "rgba(var(--white), 1)",
                                textDecoration: "none",
                            }}>
                            <div
                                style={{
                                    backgroundColor: "rgba(var(--red1), 1)",
                                    borderRadius: "12px",
                                    padding: "12px 40px",
                                    fontWeight: 500,
                                }}>
                                Почати пошук
                            </div>
                        </Link>
                        <Link
                            href="/promo"
                            style={{
                                color: "rgba(var(--white), 1)",
                                textDecoration: "none",
                            }}>
                            <div
                                style={{
                                    backgroundColor: "rgba(var(--red1), 1)",
                                    borderRadius: "12px",
                                    padding: "12px 40px",
                                    fontWeight: 500,
                                }}>
                                Дослідити акції
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{ width: "30%" }}></div>
            </section>
        </main>
    );
}
