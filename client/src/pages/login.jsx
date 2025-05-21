import React from "react";
import IconTextField from "../components/input";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Para from "../components/paragraph";

const Login = () => {
  // const [loading, setLoading] = React.useState(false);

  return (
    <div className="grid place-content-center w-full h-screen bg-gray-100">
      <div className="bg-gray-100 p-8 rounded-md w-100">
        <h2 className="font-bold text-center mb-6 p-0">LOGIN</h2>
        <Para>
          Only login using a registered email <br />
          address to log into the system.
        </Para>
        <form className="my-3">
          <IconTextField icon={AtSignIcon} label={"Email"} type="text" />
          <IconTextField
            icon={LockKeyholeIcon}
            label={"Password"}
            type="password"
          />
          <Para>
            <Link to={"/forgot"} className="block text-right">Forgot Password?</Link>
          </Para>
          <button className="w-full bg-blue-600 text-sm text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Sign-In
          </button>
          <p className="flex items-center text-sm text-center text-gray-500 my-3">
            <span className="flex-grow border-t border-gray-400"></span>
            <span className="mx-4">Or</span>
            <span className="flex-grow border-t border-gray-400"></span>
          </p>
          <Link to={"/register"}>
            <button className="w-full bg-green-600 text-sm text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
              Register
            </button>
          </Link>
          <Para>
            By clicking register, you agree to our{" "}
            <Link to={"/"}>
              Terms <br />
              of Service
            </Link>{" "}
            and <Link to={"/"}>Privacy Policy</Link>
          </Para>
        </form>
      </div>
    </div>
  );
};

export default Login;
