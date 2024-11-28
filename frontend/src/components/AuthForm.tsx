import { useState } from "react";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "flowbite-react";
import { UserFormData } from "../definitions";

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
    <form
      onSubmit={handleSubmit}
      className="flex border flex-col py-4 px-10 w-full max-w-[550px] mx-auto"
    >
      <h1 className="text-5xl my-8 text-center">{name}</h1>

      {type === "signup" && (
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/login" className="underline">
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

      <button
        className="buttonStyle my-5"
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
    </form>
  );
};

export default AuthForm;
