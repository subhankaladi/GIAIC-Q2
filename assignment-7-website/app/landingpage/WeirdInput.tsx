import React, { useState, useEffect } from "react";
import "./Landing.css";  // Ensure correct CSS path

interface WeirdInputProps {
  value: string;
  onChange: (value: string) => void;
}

const WeirdInput: React.FC<WeirdInputProps> = ({ value, onChange }) => {
  const [shake, setShake] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);  // Pass the new value to parent
    setShake(true);  // Trigger shake effect
  };

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 300);  // Reset after 300ms
      return () => clearTimeout(timer);
    }
  }, [shake]);

  return (
    <input
      type="text"
      className={`weird-input ${shake ? "shake" : ""}`}
      value={value}
      onChange={handleInputChange}
      placeholder="Enter your name"
    />
  );
};

export default WeirdInput;
