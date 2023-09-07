import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../Store/UserSlice";
import { fetchMessages } from "../Store/ChatSlice";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../Store/Service/FireBase";

function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.user);
  const messages = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  const handleClick = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      user: user.value,
      time: Timestamp.fromDate(new Date()),
    });
    setNewMessage("");
  };

  return (
    <div>
      <h1> {user.value} </h1>
      <button onClick={() => dispatch(removeUser())}>Log Out</button>
      {messages.map((item, key) => (
        <p key={key}>
          {" "}
          {item.text} {item.user}{" "}
        </p>
      ))}
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <input type="submit" value={"Send Message"} />
      </form>
    </div>
  );
}

export default Chat;
