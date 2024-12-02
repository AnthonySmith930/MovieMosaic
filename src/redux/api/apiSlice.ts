// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from 'react-native-config'

export interface DiscoverListItem {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [number],
    id: number,
    original_language: string, //change to enum
    original_title: string,
    overview: "string",
    popularity: number,
    poster_path: string,
    release_date: string, // change to date type
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface DiscoverList {
    page: number,
    results: [DiscoverListItem]
    total_pages: number,
    total_results: number
}

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: builder => ({
    getDiscoverList: builder.query<DiscoverList, void>({
      query: () => ({
        url: '/discover/movie',
        method: "GET",
        headers: {
          Authorization: `Bearer ${Config.BEARER_TOKEN}`
        }
      })
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetDiscoverListQuery } = apiSlice