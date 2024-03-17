"use client";

import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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
                    <input
                        name="title"
                        type="text"
                        placeholder="Введіть назву книги або ім’я автора"
                        value={value}
                        onChange={onChange}
                    />
                )}
            />

            <button type="submit">пошук</button>
        </form>
    );
};
