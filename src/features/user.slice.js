import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user: []
    },
    reducers:{
        getUserInfo: (state, { payload }) => {
            state.user = payload;
          }
    }
})

export const { getUserInfo } = userSlice.actions
export default userSlice.reducer;