import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recommend: null,
	news: null,
	trending: null,
	original: null
}

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		addMovie: (state, action) => {
			state.recommend = action.payload.recommend
			state.news = action.payload.news
			state.trending = action.payload.trending
			state.original = action.payload.original
		}
	}
})

export const { addMovie } = movieSlice.actions

export const selectRecommend = (state) => state.movie.recommend
export const selectTrending = (state) => state.movie.trending
export const selectNews = (state) => state.movie.news
export const selectOriginal = (state) => state.movie.original

export default movieSlice.reducer