export const styles = {
    section: {
        display: "flex",
        flexFlow: "column nowrap",
        gap: "30px",
    },
    title: { margin: 0 },
    booksBlock: {
        display: "flex",
        gap: "30px",
    },
    card: {
        width: "290px",
        padding: "30px",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        backgroundColor: "rgba(var(--grey1), 1)",
        borderRadius: "12px",
    },
    infoBox: {
        display: "flex",
        flexFlow: "column nowrap",
        marginBottom: "10px",
        imgBox: {
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            img: { borderRadius: "12px" },
        },
        h3: { margin: 0 },
        h5: { margin: 0 },
    },
    button: {
        borderRadius: "12px",
        padding: "8px 10px",
        fontWeight: 400,
        fontSize: "14px",
        height: "35px",
        whiteSpace: "nowrap",
        wrap: {
            display: "flex",
            alignItems: "center",
            gap: "5px",
        },
    },
};
