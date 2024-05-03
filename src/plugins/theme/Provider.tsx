"use client";
import { memo, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "./cache";
import createTheme from "./index";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { ThemeProviderProps as MuiThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ThemeProviderProps extends Pick<MuiThemeProviderProps, "children"> {}

function Provider({ children }: ThemeProviderProps) {
    const theme = useMemo(() => createTheme(), []);
    const cache = useMemo(() => createCache(), []);

    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    refetchOnWindowFocus: false,
                    retry: 1,
                    staleTime: 5 * 1000,
                },
            },
        }),
    );
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <QueryClientProvider client={client}>
                    {children}
                </QueryClientProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default memo(Provider);
