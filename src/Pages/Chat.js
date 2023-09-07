import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../Store/UserSlice";
import { fetchMessages } from "../Store/ChatSlice";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../Store/Service/FireBase";
import Loading from "../Components/Loading";
import ScrollToBottom from "react-scroll-to-bottom";

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
    const sendObj = {
      text: newMessage,
      user: user.value,
      time: Timestamp.fromDate(new Date()),
    };
    setNewMessage("");
    await addDoc(collection(db, "messages"), sendObj);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-between item-center">
      <div className="flex gap-10 p-4 px-10 justify-between items-center text-secondary">
        <h1 className="text-2xl ">
          {" "}
          Welcome{" "}
          <span className="text-neutral-content pl-4">{user.value}</span>{" "}
        </h1>
        <button
          onClick={() => dispatch(removeUser())}
          className="btn btn-outline btn-warning max-w-md"
        >
          Log Out
        </button>
      </div>
      <ScrollToBottom className=" bg-gradient-to-r from-slate-300 to-slate-400 h-full w-full overflow-auto scroll-smooth">
        {messages.length > 0 ? (
          messages.map((item) => (
            <div
              key={item.id}
              className={`flex items-end chat mx-4 ${
                item.user === user.value
                  ? "chat-end flex-row-reverse"
                  : "chat-start"
              }`}
            >
              <p className="chat-bubble m-1"> {item.text} </p>
              <p className="text-base-300 relative bottom-2 text-md">
                {" "}
                {item.user}{" "}
              </p>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </ScrollToBottom>
      <div className="w-screen p-4">
        <form onSubmit={handleClick} className="flex gap-6">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="input input-bordered input-secondary w-full"
            placeholder="Enter Your Message"
          />
          <input
            type="submit"
            value={"Send Message"}
            className="btn btn-outline btn-secondary max-w-md"
          />
        </form>
      </div>
    </div>
  );
}

export default Chat;
