export const styles = {
    section: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-start",
        gap: "20px",
        width: "75%",
    },
    headersInfo: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: 500,
        fontSize: "16px",
    },
    filterBox: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
    },
    select: {
        boxShadow: "none",
        "& .MuiOutlinedInput-input": {
            fontSize: "14px",
        },
        paper: {
            width: "180px",
            marginTop: "5px",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px 0px #0000000F",
        },
        menuItem: {
            whiteSpace: "normal",
            wordWrap: "break-word",
            fontSize: "14px",
            borderBottom: "1px solid rgba(var(--grey1), 0.1)",
            "&.Mui-selected": {
                backgroundColor: "rgba(var(--red1), 0.1)",
                color: "rgba(var(--red1), 1)",
            },
            "&.Mui-selected:hover": {
                backgroundColor: "rgba(var(--red1), 0.2)",
            },
            "&.Mui-focusVisible": {
                backgroundColor: "rgba(var(--red1), 0.2) !important",
            },
        },
    },
};
