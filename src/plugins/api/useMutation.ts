import {
    useMutation as useTanstackMutation,
    useQuery as useTanstackQuery,
    type UseMutationOptions as UseTanstackMutationOptions,
    type UseQueryOptions as UseTanstackQueryOptions,
    type QueryKey,
} from "@tanstack/react-query";

export function useMutation<
    TData = unknown,
    TError = unknown,
    TVariables = void,
    TContext = unknown,
>(options: UseTanstackMutationOptions<TData, TError, TVariables, TContext>) {
    return useTanstackMutation({
        ...options,
    });
}

export function useQuery<
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
>(options: UseTanstackQueryOptions<TData, TError, TQueryFnData, TQueryKey>) {
    return useTanstackQuery({
        ...options,
    });
}
