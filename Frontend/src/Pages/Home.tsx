import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import BrainIcon from "../icons/BrainIcon";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1330688.jpg') ",
      }}
    >
     <Link to="/"> <div className=" text-2xl pt-4 font-semibold flex items-center gap-2 text-green-800">
        <div>{<BrainIcon />}</div> <div>SBrain</div>
      </div></Link>
      <div className=" h-screen flex flex-col justify-center items-center">
        <div className="justify-center items-center">
          <div className="justify-center items-center">
            <h1 className="text-4xl font-extrabold text-white">
              Welcome to Your World
            </h1>
          </div>

          <div className=" flex justify-center items-center gap-2 p-3">
            <Link to="/signup">
              <Button variant="primary" size="sm" text="SignUp" />
            </Link>
            <Link to="/signin">
              <Button variant="primary" size="sm" text="SignIn" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
