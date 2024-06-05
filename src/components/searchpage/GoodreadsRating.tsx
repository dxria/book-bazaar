import NextImage from "next/image";
import StarMark from "@svg/star-mark.svg";
import { TRating } from "@plugins/types/booksTypes";
import { styles } from "@components/searchpage/style/Page.style";

type GoodreadsRatingProps = {
    ratingInfo: TRating | undefined;
};

export default function GoodreadsRating({ ratingInfo }: GoodreadsRatingProps) {
    return (
        <div>
            <p style={styles.searchResults.aside.title}>
                Оцінка на Goodreads{" "}
                {ratingInfo ? `: ${ratingInfo?.stars}` || "" : ""}
            </p>
            {ratingInfo?.stars ? (
                <div style={styles.searchResults.aside.blockContent}>
                    {[...Array(Math.floor(Number(ratingInfo.stars)))].map(
                        (_, index) => (
                            <NextImage key={index} alt="" src={StarMark} />
                        ),
                    )}
                </div>
            ) : (
                <i>Інформація про оцінку відсутня</i>
            )}
        </div>
    );
}
