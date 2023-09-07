import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: window.localStorage.getItem("user") || "",
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload.newUser;
      window.localStorage.setItem("user", action.payload.newUser);
    },
    removeUser: (state) => {
      state.value = "";
      window.localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
