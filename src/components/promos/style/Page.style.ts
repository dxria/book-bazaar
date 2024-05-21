export const styles = {
    promos_header: {
        padding: "100px 0px 30px 0px",
        title: { fontSize: "42px", fontWeight: 600 },
        imgBox: {
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            width: "fit-content",
            borderRadius: "50%",
            border: "4px solid rgba(var(--red1), 1)",
            img: {
                border: "2px solid rgba(var(--white), 1)",
                borderRadius: "50%",
            },
        },
    },
    main_content: {
        width: "100%",
        tabList: {
            border: "1px solid rgba(var(--grey1), 1)",
            borderRadius: "50px",
            tab: {
                padding: "8px",
                color: "rgba(var(--black), 1)",
                fontWeight: 400,
                textTransform: "none",
                "&.Mui-selected": {
                    backgroundColor: "rgba(var(--red1), 1)",
                    color: "rgba(var(--white), 1)",
                    borderBottomColor: "rgba(var(--white), 1)",
                    fontWeight: 500,
                },
            },
        },
        tabPanel: {
            padding: "50px 0px 0px 0px",
            display: "flex",
            gap: "30px",
            flexFlow: "row wrap",
        },
    },
};
