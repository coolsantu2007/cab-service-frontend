import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
let authorizationToken = localStorage.getItem('token')

//api slice
export const adminUserApi = createApi({
    reducerPath: 'adminUserApi',
    baseQuery: fetchBaseQuery({//fetch wrapper handles request headers and response parsing like axios
        baseUrl: 'https://api.egcab.com/api/v1/'
    }),
    endpoints: (builder)=>({
        adminUserLogin: builder.mutation({
            query: (bodyData)=>{
                return {
                    url: `admin-login`,
                    method: 'POST',
                    body: bodyData,
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            }
        }),

        adminUserLogout: builder.mutation({
            query: (params)=>{
                return {
                    url: `admin-logout`,
                    method: 'GET',
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': authorizationToken?authorizationToken:""
                }
                }
            }
        }),

        createAdminUser: builder.mutation({
            query: (bodyData)=>({
                url: `create-admin-user`,
                method: 'POST',
                body: bodyData,
                headers: {
                    'Content-type': 'application/json'
                }
            })
        }),

        resetAdminPassword: builder.mutation({
            query: (bodyData)=>{
                return {
                    url: `admin-reset-password`,
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
export const {useAdminUserLoginMutation, useAdminUserLogoutMutation, useCreateAdminUserMutation, useResetAdminPasswordMutation} = adminUserApi