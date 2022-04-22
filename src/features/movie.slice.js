import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        movies: []
    },
    reducers:{
        addMoviesToStore: (state, { payload }) => {
            state.movies = payload;
          }
    }
})

export const { addMoviesToStore } = movieSlice.actions
export default movieSlice.reducer;