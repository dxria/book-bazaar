"use client";
import { memo, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "./cache";
import createTheme from "./index";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { ThemeProviderProps as MuiThemeProviderProps } from "@mui/material/styles/ThemeProvider";

interface ThemeProviderProps extends Pick<MuiThemeProviderProps, "children"> {}

function Provider({ children }: ThemeProviderProps) {
    const theme = useMemo(() => createTheme(), []);
    const cache = useMemo(() => createCache(), []);

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}

export default memo(Provider);
