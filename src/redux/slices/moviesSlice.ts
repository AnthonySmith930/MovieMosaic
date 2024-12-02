import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

interface MoviesState {
    movies: [string]
  }
  
  const initialState: MoviesState = {
    movies: [""]
  }

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    moviesAdd(state, action: PayloadAction<[string]>) {
      state.movies = action.payload
    }
  }
})

export const { moviesAdd } = moviesSlice.actions
export default moviesSlice.reducer