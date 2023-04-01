import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
let authorizationToken = localStorage.getItem('token')

//api slice
export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({//fetch wrapper handles request headers and response parsing like axios
        baseUrl: 'https://api.egcab.com/api/v1/'
    }),
    endpoints: (builder)=>({
        getBookingData: builder.query({//using 'query' to get data
            query: (params)=>{
                const {page, limit, status} = params
                return {
                    url: `get-booking-details?status=${status}&page=${page}&limit=${limit}`, //added api end point
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': authorizationToken?authorizationToken:""
                }
                }
            }
        }),

        getBookingDataById: builder.mutation({//using 'query' to get data
            query: (params)=>{
                const {status, booking_id} = params
                return {
                    url: `get-booking-details-by-id?status=${status}&booking_id=${booking_id}`, //added api end point
                    method: 'GET',
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': authorizationToken?authorizationToken:""
                }
                }
            }
        }),

        createBooking: builder.mutation({
            query: (bodyData)=>({
                url: `booking-request`, //added api end point
                method: 'POST',
                body: bodyData,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': authorizationToken?authorizationToken:""
                }
            })
        }),

        updateBookingToConfirm: builder.mutation({
            query: (bodyData)=>{
                return {
                    url: `update-booking-status`, //added api end point
                    method: 'POST',
                    body: bodyData,
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': authorizationToken?authorizationToken:""
                }
                }
            }
        }),

        updateBookingToCancel: builder.mutation({
            query: (bodyData)=>{
                return {
                    url: `update-booking-status`, //added api end point
                    method: 'POST',
                    body: bodyData,
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': authorizationToken?authorizationToken:""
                }
                }
            }
        }),
    })
})

//creating and exporting hook for api endpoint
export const {useGetBookingDataQuery, useGetBookingDataByIdMutation, useCreateBookingMutation, useUpdateBookingToConfirmMutation, useUpdateBookingToCancelMutation} = bookingApi