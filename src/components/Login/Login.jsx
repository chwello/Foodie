import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Log in");
  return (
    <div className="fixed inset-0 z-50 bg-[#00000090] flex w-full">
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-6 mb-6">
        <div className="flex flex-col mb-12">
          <div className="flex items-center justify-between mb-12 mt-6 w-full">
            <h3 className="font-libreCaslonText text-xl flex-grow text-center">
              Welcome to Foodie
            </h3>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross}
              alt=""
            />
          </div>
          <h2 className="font-poppins mb-5 font-bold text-lg text-left">
            {currState}
          </h2>
          <div className="flex flex-col w-full">
            {currState === "Log in" ? (
              <></>
            ) : (
              <input
                className="p-3 mb-6 border border-black w-full rounded-lg"
                type="text"
                placeholder="Full Name"
                required
              />
            )}
            <input
              className="p-3 mb-6 border border-black w-full rounded-lg"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="p-3 border border-black w-full rounded-lg"
              type="password"
              placeholder="Password"
              required
            />
            <button className="border border-black bg-black text-white mt-6 w-full py-3 rounded-lg">
              {currState === "Sign up" ? "Create account" : "Log in"}
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-xs">
              By continuing, I agree to the terms of use & privacy policy
            </p>
          </div>
          <div className="justify-center items-center flex">
            {currState === "Log in" ? (
              <p className="mt-4 font-poppins text-xs text-left">
                Create a new account?{" "}
                <span
                  onClick={() => setCurrState("Sign up")}
                  className="text-[#C43720] cursor-pointer font-medium"
                >
                  Click here
                </span>
              </p>
            ) : (
              <p className="mt-4 font-poppins text-xs text-left">
                Already have an account?{" "}
                <span
                  onClick={() => setCurrState("Log in")}
                  className="text-[#C43720] cursor-pointer font-medium"
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
