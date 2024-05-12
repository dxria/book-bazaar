"use client";
import Link from "next/link";
import NextImage from "next/image";
import NoPhoto from "@png/no-photo.png";
import MagnifyingGlassIcon from "@svg/magnifying-glass.svg";
import { TPromo, TTopBook } from "@plugins/types/booksTypes";
import { useBooksMutations } from "@components/hooks/useBooksMutations";
import { useEffect } from "react";

const promo: TPromo = {
    id: 1,
    url: "https://book-ye.com.ua/news/vyhraj-maksymalnu-znyzhku-do-50/",
    title: "Виграй максимальну знижку до -50%",
    img: "https://book-ye.com.ua/upload/iblock/edb/350kh185_22_.png",
    // activeTill: "19 ДНІВ 21год. 42хв. 46сек.",
    bookshop: {
        name: "Книгарня Є",
        image: "https://book-ye.com.ua/local/templates/book_ye/images/components/header-logo.png",
    },
};

export default function Home() {
    const { getTop, topBooks, successGettingTopBooks } = useBooksMutations();

    useEffect(() => {
        getTop();
    }, [getTop]);

    return (
        <main>
            <section
                className="banner"
                style={{ display: "flex", gap: "30px", margin: "100px 0px" }}>
                <div
                    style={{
                        width: "65%",
                        display: "flex",
                        flexFlow: "column nowrap",
                        gap: "40px",
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
                            href="/search?title=молоко%20і%20мед"
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
                    <div
                        style={{
                            display: "flex",
                            gap: "25px",
                            alignItems: "center",
                        }}>
                        <div
                            style={{
                                padding: "0px 25px 0px 0px",
                                display: "flex",
                                gap: "5px",
                                flexFlow: "column nowrap",
                                borderRight: "1px solid rgba(var(--grey1), 1)",
                            }}>
                            <span style={{ fontSize: "24px", fontWeight: 500 }}>
                                Більше 1000
                            </span>
                            <span style={{ fontSize: "16px" }}>книг</span>
                        </div>
                        <div
                            style={{
                                padding: "0px 25px 0px 0px",
                                display: "flex",
                                gap: "5px",
                                flexFlow: "column nowrap",
                            }}>
                            <span style={{ fontSize: "24px", fontWeight: 500 }}>
                                20
                            </span>
                            <span style={{ fontSize: "16px" }}>книгарень</span>
                        </div>
                    </div>
                </div>
                <aside
                    style={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    {promo && (
                        <div
                            style={{
                                width: "370px",
                            }}>
                            <div
                                style={{
                                    borderRadius: "12px 12px 0px 0px",
                                    backgroundColor: "rgba(var(--grey1), 1)",
                                    padding: "30px",
                                    display: "flex",
                                    minHeight: "400px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <img
                                    src={promo.img}
                                    alt={promo.title}
                                    width="300px"
                                    style={{ borderRadius: "12px" }}
                                />
                            </div>
                            <div
                                style={{
                                    border: "1px solid rgba(var(--grey1), 1)",
                                    padding: "30px",
                                    display: "flex",
                                }}>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        flexFlow: "column nowrap",
                                    }}>
                                    <h4 style={{ margin: 0 }}>
                                        Акція в книгарні
                                    </h4>
                                    <span>{promo.bookshop.name}</span>
                                    <Link
                                        target="_blank"
                                        href={promo.url}
                                        style={{
                                            color: "rgba(var(--white), 1)",
                                            textDecoration: "none",
                                        }}>
                                        <div
                                            style={{
                                                backgroundColor:
                                                    "rgba(var(--red1), 1)",
                                                borderRadius: "12px",
                                                padding: "8px 10px",
                                                fontWeight: 500,
                                                width: "fit-content",
                                                whiteSpace: "nowrap",
                                                color: "rgba(var(--white), 1)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}>
                                            <span style={{ fontSize: "14px" }}>
                                                Перейти до {promo.bookshop.name}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </aside>
            </section>
            {successGettingTopBooks && topBooks && (
                <section
                    className="TopBooks"
                    style={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        gap: "30px",
                    }}>
                    <h2 style={{ margin: 0 }}>Найпопулярніші книги сьогодні</h2>
                    <div
                        style={{
                            display: "flex",
                            gap: "30px",
                        }}>
                        {topBooks?.map((book) => (
                            <div
                                key={book.id}
                                style={{
                                    width: "290px",
                                    padding: "30px",
                                    display: "flex",
                                    flexFlow: "column nowrap",
                                    justifyContent: "space-between",
                                    backgroundColor: "rgba(var(--grey1), 1)",
                                    borderRadius: "12px",
                                }}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        marginBottom: "10px",
                                    }}>
                                    <div
                                        style={{
                                            marginBottom: "10px",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>
                                        <NextImage
                                            alt={book.title}
                                            src={book.img || NoPhoto}
                                            width={190}
                                            height={280}
                                            style={{ borderRadius: "12px" }}
                                        />
                                    </div>
                                    <h3 style={{ margin: 0 }}>{book.title}</h3>
                                    <h5 style={{ margin: 0 }}>{book.author}</h5>
                                </div>
                                <Link
                                    href={`/search?title=${book.title.toLowerCase()}`}
                                    style={{
                                        color: "rgba(var(--white), 1)",
                                        textDecoration: "none",
                                    }}>
                                    <div
                                        style={{
                                            backgroundColor:
                                                "rgba(var(--red1), 1)",
                                            borderRadius: "12px",
                                            padding: "8px 10px",
                                            fontWeight: 500,
                                            width: "fit-content",
                                            color: "rgba(var(--white), 1)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                        }}>
                                        <span style={{ fontSize: "14px" }}>
                                            Шукати
                                        </span>
                                        <NextImage
                                            alt="шукати"
                                            src={MagnifyingGlassIcon}
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
