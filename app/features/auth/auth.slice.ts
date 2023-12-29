import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./auth.interface";

interface AuthState {
  user: IUser | null | undefined;
  token: string | null | undefined;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, removeUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
