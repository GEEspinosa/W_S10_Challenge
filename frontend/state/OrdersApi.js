import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi ({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/'}),
    endpoints: build => ({

        getOrders: build.query({
            query: () => 'history'
        }),

        createOrder: build.mutation({
            query: order => ({
                url: 'order',
                method: 'POST',
                body: order
            })
        })
    })
})

export const {
    useGetOrdersQuery, useCreateOrderMutation
} = ordersApi