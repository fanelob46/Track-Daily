import { useState } from "react";

type AuthFormProps = {
  name: string;
  type: "signup" | "login" | "edit";
  submitFunction: (userData: Record<string, string>) => Promise<void>;
};

const AuthForm = ({ name, type, submitFunction }: AuthFormProps) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditToggle = () => {
    if (type === "edit") {
      setIsEditable((prev) => !prev);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString(); // Converts all input values to strings
    });

    data.isAdmin = "false"; // Explicitly set as a boolean value

    console.log(data); // For debugging

    submitFunction(data); // Pass the data to the parent function
  };

  return (
    <form
      onSubmit={handleSubmit}
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
