import { createSlice } from "@reduxjs/toolkit";
import { IMediaState } from "./media.interface";

const initialState: IMediaState = {
  search: "",
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
  },
});

export const { setSearch, clearSearch } = mediaSlice.actions;
export default mediaSlice.reducer;
