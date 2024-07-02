import React from "react";
import { useLocation } from "react-router-dom";
import Notepage from "./Notepage";


function Welcome() {
  const location = useLocation();
  const { username } = location.state || {}; // Destructure username from state

  return (
    <>
    <div className="container mx-auto">
      <div className="flex justify-between my-5 font-bold text-2xl">
          <h1 className="">Notes Page</h1>
          <p>Welcome, {username}!</p>
      </div>
      <hr />
      <Notepage username={username}/>
    </div>
    </>
  );
}

export default Welcome;
