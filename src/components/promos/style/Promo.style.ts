export const styles = {
    promoBox: {
        width: "400px",
        padding: "30px",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        border: "1px solid rgba(var(--grey1), 1)",
        borderRadius: "12px",
        textBox: {
            display: "flex",
            flexFlow: "column nowrap",
            marginBottom: "10px",
            imgBox: {
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",

                img: {
                    borderRadius: "12px",
                },
            },
            h3: {
                margin: 0,
            },
        },
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
