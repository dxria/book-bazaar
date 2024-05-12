export const styles = {
    reviews: {
        marginTop: "80px",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "30px",
    },
    cardsWrapper: {
        display: "flex",
        gap: "30px",
    },
    card: {
        width: "280px",
        padding: "25px",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "20px",
        border: "1px solid rgba(var(--grey1), 1)",
        borderRadius: "12px",
        infoBox: {
            display: "flex",
            gap: "20px",
            img: { borderRadius: "12px" },
            persona: {
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "flex-start",
                gap: "5px",
                h5: { margin: 0 },
                rating: {
                    display: "flex",
                    gap: "5px",
                },
            },
        },
        text: { fontSize: "14px" },
        link: {
            color: "rgba(var(--black), 1",
        },
    },
};
