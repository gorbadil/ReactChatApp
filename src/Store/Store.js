import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import charReducer from "./ChatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chat: charReducer,
  },
});
