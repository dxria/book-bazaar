export const styles = {
    banner: {
        display: "flex",
        gap: "30px",
        margin: "50px 0px",
        flexFlow: "column nowrap",
        "@media screen and (min-width: 700px)": {
            flexFlow: "row nowrap",
            margin: "80px 0px",
        },
        "@media screen and (min-width: 1700px)": {
            flexFlow: "row nowrap",
            margin: "100px 0px",
        },
    },
    mainBlock: {
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        gap: "20px",
        lineHeight: 1.4,
        "@media screen and (min-width: 700px)": {
            gap: "30px",
            width: "65%",
        },
        "@media screen and (min-width: 1700px)": {
            gap: "40px",
            width: "65%",
        },
    },
    title: {
        fontSize: "24px",
        margin: "0px",
        fontWeight: 600,
        textAlign: "center",
        "@media screen and (min-width: 700px)": {
            fontSize: "48px",
            textAlign: "left",
        },
        "@media screen and (min-width: 1700px)": {
            fontSize: "56px",
            textAlign: "left",
        },
    },
    subtitle: {
        margin: "0px",
        textAlign: "center",
        fontSize: "16px",
        "@media screen and (min-width: 700px)": {
            fontSize: "20px",
            textAlign: "left",
        },
    },
    buttonsBox: {
        display: "flex",
        gap: "20px",
        flexFlow: "column nowrap",
        alignItems: "center",
        "@media screen and (min-width: 700px)": {
            flexFlow: "row nowrap",
        },
    },
    button: {
        borderRadius: "12px",
        padding: "12px 40px",
        fontWeight: 500,
        fontSize: "16px",
        height: "45px",
        width: "210px",
        whiteSpace: "nowrap",
    },
    statsBox: {
        display: "flex",
        gap: "25px",
        alignItems: "center",
        justifyContent: "center",
        "@media screen and (min-width: 700px)": {
            justifyContent: "flex-start",
        },
        wrap: {
            padding: "0px 25px 0px 0px",
            display: "flex",
            gap: "5px",
            flexFlow: "column nowrap",
            borderRight: "1px solid rgba(var(--grey1), 1)",
            title: {
                fontSize: "16px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                "@media screen and (min-width: 700px)": {
                    fontSize: "20px",
                },
                "@media screen and (min-width: 1700px)": {
                    fontSize: "24px",
                },
            },
            subtitle: {
                fontSize: "12px",
                "@media screen and (min-width: 700px)": {
                    fontSize: "16px",
                },
            },
        },
        wraplast: {
            padding: "0px 25px 0px 0px",
            display: "flex",
            gap: "5px",
            flexFlow: "column nowrap",
        },
    },
};
