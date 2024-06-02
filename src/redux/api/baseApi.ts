import { axiosBaseQuery } from '@/app/helpers/axios/axiosBaseQuery'
import { getBaseUrl } from '@/app/helpers/confiq/envConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: axiosBaseQuery({ baseUrl:getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes:['user']
})

