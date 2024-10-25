"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Landing.css";
import WeirdInput from "././WeirdInput"; // Import the custom input component

const Landing = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  const handleEnter = () => {
    console.log("Button clicked, username:", userName);
    if (userName.trim()) {
      router.push("/mnpg");
    } else {
      alert("Please Enter Your Name!");
    }
  };

  return (
    <div>
      <aside className="LP-navbar">
        <h2 className="Subhan-h2">SUBHAN</h2>
        <ul className="LP-inner-list">
          <li onClick={() => alert("Please Enter Your Name!")}>Home</li>
          <li onClick={() => alert("Please Enter Your Name!")}>About</li>
          <li onClick={() => alert("Please Enter Your Name!")}>Portfolio</li>
          <li onClick={() => alert("Please Enter Your Name!")}>News</li>
          <li onClick={() => alert("Please Enter Your Name!")}>Contact</li>
        </ul>
      </aside>

      <div className="lp-container">
        {/* Left Section */}
        <div className="left-section">
          <h1>Welcome To Digital Wealth!</h1>
          <WeirdInput value={userName} onChange={setUserName} /> {/* Using WeirdInput */}
          <button className="LP-button" onClick={handleEnter}>
            Enter
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <img src="/sk2.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
