import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//api slice
export const adminUserApi = createApi({
    reducerPath: 'adminUserApi',
    baseQuery: fetchBaseQuery({//fetch wrapper handles request headers and response parsing like axios
        baseUrl: 'http://api.egcab.com/api/v1/'
    }),
    endpoints: (builder)=>({
        adminUserLogin: builder.mutation({
            query: (bodyData)=>{
                return {
                    url: `admin-login`,
                    method: 'POST',
                    body: bodyData,
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
                }
                }
            }
        }),

        adminUserLogout: builder.query({
            query: (params)=>{
                return {
                    url: `admin-logout`,
                    method: 'GET',
                    headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
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
                    'Content-type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
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
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA3MGQ0Y2NmOGUwZjg3ZGZhNWE4ZDIiLCJpYXQiOjE2NzgyNzc1MjgsImV4cCI6MTY3ODM2MzkyOH0.s-TBiMgE_ezWUzvOjiAdxCyM_oq1ejIdXQQ6O5sjLyI'
                }
                }
            }
        }),
    })
})

//creating and exporting hook for api endpoint
export const {useAdminUserLoginMutation, useAdminUserLogoutQuery, useCreateAdminUserMutation, useResetAdminPasswordMutation} = adminUserApi