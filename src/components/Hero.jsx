import { useNavigate } from "react-router-dom";
import React from "react";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Hero;