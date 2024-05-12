export const styles = {
    card: {
        backgroundColor: "rgba(var(--grey1), 1)",
        borderRadius: "15px",
        width: "100%",
        padding: "30px",
        display: "flex",
        flexFlow: "column nowrap",
        color: "rgba(var(--black), 1",
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        minHeight: "120px",
        infoBox: {
            display: "flex",
            gap: "20px",
            imgBox: {
                display: "flex",
                alignItems: "center",
            },
            title: {
                fontSize: "20px",
                fontWeight: 600,
            },
            author: {
                fontSize: "16px",
                fontWeight: 500,
            },
        },
        priceBox: {
            display: "flex",
            flexFlow: "column nowrap",
            width: "100px",
            justifyContent: "flex-start",
            gap: "10px",
            price: {
                backgroundColor: "rgba(var(--red1), 1)",
                borderRadius: "12px",
                height: "32px",
                width: "100px",
                color: "rgba(var(--white), 1)",
                display: "flex",
                fontWeight: 600,
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
            },
        },
    },
    divider: {
        width: "100%",
        height: "1px",
        backgroundColor: "rgba(var(--grey2), 1)",
        margin: "10px 0px",
    },
    link: {
        color: "rgba(var(--black), 1",
    },
};
