import { TReview } from "@plugins/types/booksTypes";
import NextImage from "next/image";
import StarIcon from "@svg/star.svg";
import NoPhoto from "@png/no-photo.png";
import { styles } from "./style/Reviews.style";

type ReviewsProps = {
    reviews: TReview[];
    url: string;
};

const Reviews: React.FC<ReviewsProps> = ({ reviews, url }) => {
    return (
        <section className="reviews" style={styles.reviews}>
            <h2 style={{ margin: 0 }}>Відгуки про цю книгу на Goodreads</h2>
            <div style={styles.cardsWrapper}>
                {reviews.map((review) => (
                    <div key={review.id} style={styles.card}>
                        <div style={styles.card.infoBox}>
                            <NextImage
                                alt={review.name}
                                src={review.img || NoPhoto}
                                width={64}
                                height={64}
                                style={styles.card.infoBox.img}
                            />
                            <div style={styles.card.infoBox.persona}>
                                <h5 style={styles.card.infoBox.persona.h5}>
                                    {review.name}
                                </h5>
                                <div style={styles.card.infoBox.persona.rating}>
                                    {[...Array(review.stars)].map(
                                        (_, index) => (
                                            <NextImage
                                                key={index}
                                                alt=""
                                                src={StarIcon}
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                        <div style={styles.card.text}>{review.text}...</div>
                        <div>
                            <a
                                href={url}
                                target="_blank"
                                style={styles.card.link}>
                                Читати більше
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
