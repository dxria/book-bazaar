import { FilterType, TBook } from "@plugins/types/booksTypes";
import { FoundBook } from "@components/searchpage/FoundBook";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { styles } from "./style/BooksList.style";

type BooksListProps = {
    books: TBook[] | undefined;
    filterType: keyof typeof FilterType;
    handleSelectChange: (
        event: SelectChangeEvent<keyof typeof FilterType>,
    ) => void;
};

const BooksList: React.FC<BooksListProps> = ({
    books,
    filterType,
    handleSelectChange,
}) => {
    return (
        <div style={styles.section}>
            <div style={styles.headersInfo}>
                <div>{books?.length} результатів пошуку</div>
                <div style={styles.filterBox}>
                    <span>Фільтр: </span>
                    <Select
                        value={filterType}
                        onChange={(event) => handleSelectChange(event)}
                        size="small"
                        variant="outlined"
                        sx={styles.select}
                        MenuProps={{
                            MenuListProps: {
                                disablePadding: true,
                            },
                            slotProps: {
                                paper: {
                                    style: styles.select.paper,
                                },
                            },
                        }}>
                        {Object.keys(FilterType).map((type) => (
                            <MenuItem
                                key={type}
                                value={type as keyof typeof FilterType}
                                sx={styles.select.menuItem}>
                                {FilterType[type as keyof typeof FilterType]}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            {books?.map((book) => <FoundBook book={book} key={book.id} />)}
        </div>
    );
};

export default BooksList;
