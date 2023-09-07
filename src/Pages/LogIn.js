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
      <form>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <input type="submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default LogIn;
