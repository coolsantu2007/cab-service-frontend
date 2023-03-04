import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//api slice
export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({//fetch wrapper handles request headers and response parsing like axios
        baseUrl: 'https://api.upss.deepmindz.co/beneficiaries/v1/'
    }),
    endpoints: (builder)=>({
        getBookingData: builder.query({//using 'query' to get data
            query: ()=>({
                url: 'get-all-sector', //added api end point
                method: 'GET'
            })
        }),

        getBookingDataById: builder.query({//using 'query' to get data
            query: (id)=>({
                url: `get-all-sector/${id}`, //added api end point
                method: 'GET'
            })
        }),

        createBooking: builder.mutation({
            query: (bodyData)=>({
                url: `posts`, //added api end point
                method: 'POST',
                body: bodyData,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': ''
                }
            })
        }),

        updateBooking: builder.mutation({
            query: (bodyData)=>{
                const {id, ...data} = bodyData
                return {
                    url: `posts/${id}`, //added api end point
                    method: 'PUT',
                    body: data,
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': ''
                }
                }
            }
        }),
    })
})

//creating and exporting hook for api endpoint
export const {useGetBookingDataQuery, useGetBookingDataByIdQuery, useCreateBookingMutation, useUpdateBookingMutation} = bookingApi