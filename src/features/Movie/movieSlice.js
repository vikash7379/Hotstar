import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    recommended : null,
    category : null,
    hollywood : null,
    hotstarSpecial : null,
}

const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers : {
        setMovies : (state,action) => {
            state.recommended = action.payload.recommended;
            state.category = action.payload.category;
            state.hollywood = action.payload.hollywood;
            state.hotstarSpecial = action.payload.hotstarSpecial;
        }
    }
})

export const {setMovies} = movieSlice.actions;

export const selectRecomended = (state) => state.movie.recommended
export const selectCategory = (state) => state.movie.category
export const selectHotstarSpecial = (state) => state.movie.hotstarSpecial
export const selectHollywood = (state) => state.movie.hollywood

export default movieSlice.reducer;