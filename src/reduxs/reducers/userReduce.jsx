import { createSlice } from "@reduxjs/toolkit";
import Serve from "../../pages/pages_manager/Serve";

const userSlice = createSlice({
    name:'user',
    initialState: {
      user: null,
      serve: null,
      detailserve: null,
      haircut: null,
      detailhaircut: null,
      error: null,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setDataServe: (state, action) => {
        state.serve = action.payload;
      },
      setDetailServe: (state, action) => {
        state.detailserve = action.payload;
      },
      setDataHaircut: (state, action) => {
        state.haircut = action.payload;
      },
      setDetailHaircut: (state, action) => {
        state.detailhaircut = action.payload;
      },
      clearUser: (state) => {
        state.user = null;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
});

export const { setUser,setDataServe, setDetailServe,setDataHaircut, setDetailHaircut, clearUser, setError, clearError} = userSlice.actions;
export default userSlice.reducer;