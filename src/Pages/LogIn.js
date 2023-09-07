import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Store/UserSlice";

function LogIn() {
  const [newUser, setNewUser] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setUser({ newUser }));
  };
  return (
    <div>
      <h1 className="text-6xl font-bold text-center pt-24" >Random ChatRoom</h1>
      <p className="text-2xl font-bold text-center text-secondary pt-12">We Don't Care Who You Are</p>
      <p className="text-2xl font-bold text-center pt-6">Just Enter A Name And Start Typing</p>
      <form className="relative pt-10">
        <div className="relative flex justify-center items-center flex-col p-10 gap-8">
          <input
            className="input w-full input-bordered input-secondary max-w-md"
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter A Name"
          />
          <input
            type="submit"
            onClick={handleClick}
            value={"Get In"}
            className="btn btn-outline btn-secondary w-full max-w-md"
          />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
