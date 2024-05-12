import {
    useMutation as useTanstackMutation,
    // useQuery as useTanstackQuery,
    type UseMutationOptions as UseTanstackMutationOptions,
    // type UseQueryOptions as UseTanstackQueryOptions,
    // type QueryKey,
} from "@tanstack/react-query";
// import type { AxiosError } from "axios";
// import { enqueueSnackbar } from "@plugins/ui";

// const handleError = (error: AxiosError) => {
//     console.log("Error in global mutation ", error);

//     const data = error?.response?.data as {
//         message?: string | { message: string[] };
//     };

//     if (data && typeof data?.message === "string") {
//         enqueueSnackbar({
//             variant: "error",
//             message: data?.message,
//         });
//     } else if (
//         typeof data?.message !== "string" &&
//         Array.isArray(data?.message?.message) &&
//         data?.message.message.length > 0
//     ) {
//         for (let i = 0; i < data?.message?.message.length; i++) {
//             const message = data?.message.message[i];
//             enqueueSnackbar({
//                 variant: "error",
//                 message: message,
//             });
//         }

//         return;
//     }
// };

// const handleSuccess = (message: string) => {
//     enqueueSnackbar({
//         variant: "success",
//         message: message,
//     });
// };

export function useMutation<
    TData = unknown,
    TError = unknown,
    TVariables = void,
    TContext = unknown,
>(options: UseTanstackMutationOptions<TData, TError, TVariables, TContext>) {
    return useTanstackMutation({
        // onError(error) {
        //     handleError(error as AxiosError);
        // },
        // onSuccess(data: TData) {
        //     // @ts-ignore
        //     if (data?.data?.message) {
        //         // @ts-ignore
        //         handleSuccess(data?.data?.message);
        //         // @ts-ignore
        //     } else if (data?.message) {
        //         // @ts-ignore
        //         handleSuccess(data?.message);
        //     }
        // },
        ...options,
    });
}

// export function useQuery<
//     TQueryFnData = unknown,
//     TError = unknown,
//     TData = TQueryFnData,
//     TQueryKey extends QueryKey = QueryKey,
// >(options: UseTanstackQueryOptions<TData, TError, TQueryFnData, TQueryKey>) {
//     return useTanstackQuery({
//         ...options,
//     });
// }
