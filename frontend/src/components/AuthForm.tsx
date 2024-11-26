import { useState } from "react";

type AuthFormProps = {
  name: string;
  type: "signup" | "login" | "edit";
  submitFunction: () => void;
};

const AuthForm = ({ name, type, submitFunction }: AuthFormProps) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditToggle = () => {
    if (type === "edit") {
      setIsEditable((prev) => !prev);
    }
  };

  return (
    <form
      onSubmit={submitFunction}
      className="flex border flex-col py-4 px-10  w-full max-w-[550px] mx-auto"
    >
      <h1 className="text-5xl my-8 text-center">{name}</h1>

      {type === "signup" && (
        <p className="my-4">
          Already have an account? <span className="underline">Login</span>
        </p>
      )}
      {type === "login" && (
        <p className="my-4">
          New here? <span className="underline">Sign Up</span>
        </p>
      )}

      {(type === "signup" || type === "edit") && (
        <div className="flex flex-col lg:flex-row justify-between border border-red-400">
          <input
            type="text"
            id="firstName"
            className="inputStyles lg:w-[48%]"
            placeholder="First Name"
            disabled={type === "edit" && !isEditable}
          />

          <input
            type="text"
            id="lastName"
            className="inputStyles lg:w-[48%]"
            placeholder="Last Name"
            disabled={type === "edit" && !isEditable}
          />
        </div>
      )}

      <input
        type="email"
        id="email"
        placeholder="Email Address"
        disabled={type === "edit" && !isEditable}
      />

      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        disabled={type === "edit" && !isEditable}
      />

      {(type === "signup" || type === "edit") && (
        <>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            disabled={type === "edit" && !isEditable}
          />
        </>
      )}

      <button
        className="buttonStyle my-5"
        type={type === "edit" ? "button" : "submit"}
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
