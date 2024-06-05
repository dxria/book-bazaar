import { TRating } from "@plugins/types/booksTypes";
import { styles } from "@components/searchpage/style/Page.style";

type GenresProps = {
    ratingInfo: TRating | undefined;
};
export default function Genres({ ratingInfo }: GenresProps) {
    return (
        <div>
            <p style={styles.searchResults.aside.title}>Жанри</p>
            {ratingInfo?.genres && ratingInfo?.genres.length > 0 ? (
                <div style={styles.searchResults.aside.genresBlock}>
                    {ratingInfo?.genres.map((genre) => (
                        <div
                            key={genre}
                            style={styles.searchResults.aside.genres}>
                            {genre}
                        </div>
                    ))}
                </div>
            ) : (
                <i>Інформація про жанри відсутня</i>
            )}
        </div>
    );
}
