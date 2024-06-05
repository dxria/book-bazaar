export const styles = {
    aside: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
    },
    card: {
        width: "370px",
    },
    imgBox: {
        borderRadius: "12px 12px 0px 0px",
        backgroundColor: "rgba(var(--grey1), 1)",
        padding: "30px",
        display: "flex",
        minHeight: "300px",
        justifyContent: "center",
        alignItems: "center",
        img: { borderRadius: "12px" },
        "@media screen and (min-width: 1700px)": {
            minHeight: "400px",
        },
    },

    infoBox: {
        border: "1px solid rgba(var(--grey1), 1)",
        padding: "30px",
        display: "flex",
        inner: {
            display: "flex",
            gap: "10px",
            flexFlow: "column nowrap",
            h4: { margin: 0 },
            button: {
                borderRadius: "12px",
                padding: "8px 10px",
                fontWeight: 500,
                fontSize: "16px",
                height: "35px",
                width: "210px",
                whiteSpace: "nowrap",
            },
        },
    },
};
