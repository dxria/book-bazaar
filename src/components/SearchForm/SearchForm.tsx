"use client";

import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";
import { styles } from "./styles/SearchForm.style";

export const SearchForm = () => {
    const router = useRouter();
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => {
        if (data.title) {
            router.push(`/search/?title=${data.title}`);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                    <TextField
                        variant="outlined"
                        name="comment"
                        sx={styles.TextField}
                        size="small"
                        placeholder="Введіть назву книги або ім’я автора"
                        value={value}
                        onChange={(newValue: any) => onChange(newValue)}
                        InputProps={{
                            sx: {
                                height: "100%",
                            },
                            endAdornment: (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        whiteSpace: "nowrap",
                                        width: "150px",
                                        borderRadius: "8px",
                                        margin: "5px",
                                    }}>
                                    search title
                                </Button>
                            ),
                        }}
                    />
                )}
            />
        </form>
    );
};
