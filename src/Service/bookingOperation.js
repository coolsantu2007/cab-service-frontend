import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//api slice
export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({//fetch wrapper handles request headers and response parsing like axios
        baseUrl: 'http://api.egcab.com/api/v1/'
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
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
                }
                }
            }
        }),

        getBookingDataById: builder.query({//using 'query' to get data
            query: (params)=>{
                const {status, booking_id} = params
                return {
                    url: `get-booking-details-by-id?status=${status}&booking_id=${booking_id}`, //added api end point
                    method: 'GET',
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
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
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
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
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
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
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
                }
                }
            }
        }),
    })
})

//creating and exporting hook for api endpoint
export const {useGetBookingDataQuery, useGetBookingDataByIdQuery, useCreateBookingMutation, useUpdateBookingToConfirmMutation, useUpdateBookingToCancelMutation} = bookingApi