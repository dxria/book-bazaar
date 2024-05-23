export const styles = {
    aboutTitle: {
        padding: "50px 0px 30px 0px",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-start",
        fontSize: "42px",
        fontWeight: 600,
    },
    aboutBlock:{
        display: "flex", gap: "80px", alignItems: "center",
        bulletpoints: {
            width: "65%",
            display: "flex",
            flexFlow: "column nowrap",
            gap: "20px",
            number: { fontSize: "42px", fontWeight: 600, color:"rgba(var(--red1), 1)" },
            title: { fontSize: "24px", fontWeight: 600 }
        },

    }
};
