export const styles = {
    searchText: {
        padding: "100px 0px",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-start",
        title: {
            fontSize: "42px",
            fontWeight: 600,
            loadingBlock: {
                display: "flex",
                alignItems: "center",
                gap: "20px",
            },
        },
        subtitle: {
            fontSize: "20px",
            fontWeight: 500,
        },
    },
    searchResults: {
        display: "flex",
        gap: "60px",
        aside: {
            width: "25%",
            display: "flex",
            flexFlow: "column nowrap",
            gap: "30px",
            alignItems: "flex-start",
            title: {
                marginTop: "0px",
                fontSize: "16px",
                fontWeight: 600,
            },
            blockContent: {
                display: "flex",
                gap: "10px",
            },
            chooseShop: {
                backgroundColor: "rgba(var(--grey1), 1)",
                borderRadius: "12px",
                padding: "8px 20px",
                fontWeight: 500,
                width:"250px"
            },
            genresBlock: {
                display: "flex",
                flexFlow: "column nowrap",
                gap: "10px",
            },
            genres: {
                backgroundColor: "rgba(var(--red1), 1)",
                borderRadius: "12px",
                padding: "8px 20px",
                fontWeight: 500,
                color: "rgba(var(--white), 1)",
            },
        },
    },
};
