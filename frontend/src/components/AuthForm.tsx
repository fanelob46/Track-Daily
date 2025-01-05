import { useState } from "react";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "flowbite-react";
import { UserFormData } from "../definitions";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaCheckSquare } from "react-icons/fa";

type AuthFormProps = {
  name: string;
  type: "signup" | "login" | "edit";
  submitFunction: (userData: UserFormData) => Promise<void>;
  error: string;
};

const AuthForm = ({ name, type, submitFunction, error }: AuthFormProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEditToggle = () => {
    if (type === "edit") {
      setIsEditable((prev) => !prev);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();   

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      confirmPassword: formData.get("confirmPassword")?.toString() || "",
      isAdmin: isAdmin,
      secretKey: isAdmin
        ? formData.get("secretKey")?.toString() || ""
        : undefined,
    };

    console.log(data);

    try {
      await submitFunction(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
    <form
      onSubmit={handleSubmit}
      className="flex border shadow-lg flex-col py-4 px-10 w-full h-full justify-center max-w-[70%] mx-auto"
    >
      <h1 className="text-5xl my-8 text-center">{name}</h1>

      {type === "signup" && (
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/login" className="underline text-blue-600">
            Login
          </Link>
        </p>
      )}
      {type === "login" && (
        <p className="my-4">
          New here?{" "}
          <Link to="/signup" className="underline">
            Sign Up{" "}
          </Link>
        </p>
      )}

      {(type === "signup" || type === "edit") && (
        <div className="flex flex-col lg:flex-row justify-between ">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="inputStyles lg:w-[48%]"
            placeholder="First Name"
            disabled={type === "edit" && !isEditable}
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            className="inputStyles lg:w-[48%]"
            placeholder="Last Name"
            disabled={type === "edit" && !isEditable}
          />
        </div>
      )}

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        disabled={type === "edit" && !isEditable}
      />

      {type === "signup" && (
        <div className="my-1">
          <ToggleSwitch
            checked={isAdmin}
            label="Sign up as Admin"
            onChange={setIsAdmin}
          />
        </div>
      )}

      {isAdmin && (
        <input
          type="text"
          id="secretKey"
          name="secretKey"
          className="inputStyles"
          placeholder="Secret Key"
        />
      )}

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        disabled={type === "edit" && !isEditable}
      />

      {(type === "signup" || type === "edit") && (
        <>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            disabled={type === "edit" && !isEditable}
          />
        </>
      )}

      <p className="text-red-400">{error}</p>
      <div className="flex items-center space-x-2">
      <FaCheckSquare />
        <p>I agree to the <a href="#" className="text-[var(--accent)] underline">Terms & Conditions</a></p>
      </div>
      <button
        className="buttonStyle my-5 w-full h-[5vh]"
        type="submit"
        onClick={type === "edit" ? handleEditToggle : undefined}
      >
        {type === "signup"
          ? "Sign-Up"
          : type === "login"
          ? "Login"
          : isEditable
          ? "Save"
          : "Edit"}
      </button>
      <div className="flex justify-between text-gray-600 items-center space-x-4">
        <div className="border-t-2 border-gray-300 w-[50%]"/>
        <p>Or</p>
        <hr className="border-t-2 border-gray-300 w-[50%]"/>
      </div>
      <div className="flex justify-between space-x-6 items-center py-4">
      <a href="#" className="flex items-center space-x-4 border border-gray-300 p-2 shadow-lg w-[50%] justify-center">
      <FcGoogle className="size-7" />
      <p>Sign up with Google</p>
      </a>
      <a href="#" className="flex items-center space-x-4 border border-gray-300 p-2 shadow-lg w-[50%] justify-center">
      <FaApple className="size-7" />
      <p>Sign up with Apple</p>
      </a>
      </div>
    </form>
    </div>
  );
};

export default AuthForm;
