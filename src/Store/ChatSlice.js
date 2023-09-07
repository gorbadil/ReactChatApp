import { createSlice } from "@reduxjs/toolkit";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../Store/Service/FireBase";

export const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    setMessages: (state, action) => {
      return action.payload;
    },
  },
});

export const fetchMessages = () => async (dispatch) => {
  const q = query(collection(db, "messages"), orderBy("time"));
  onSnapshot(q, (querySnapshot) => {
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    dispatch(setMessages(arr));
  });
};

export const { setMessages } = chatSlice.actions;
export default chatSlice.reducer;
