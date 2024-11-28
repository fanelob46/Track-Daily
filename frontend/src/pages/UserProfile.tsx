import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlices";
import { useUpdateUserMutation } from "../slices/userApiSlice";
import { RootState } from "../store";
import Button from "../components/Button";


export const UserProfile = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [firstName, setFirstName] = useState(userInfo?.firstName || "");
  const [lastName, setLastName] = useState(userInfo?.lastName || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateProfile] = useUpdateUserMutation();

  // useEffect(() => {
  //   setFirstName(userInfo.firstName);
  //   setLastName(userInfo.lastName);
  //   setEmail(userInfo.email);
  // }, [userInfo.setFirstName, userInfo.setLastName, userInfo.setEmail]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      try {
        const res = await updateProfile({
          firstName,
          lastName,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        setError("");
        setSuccess("Profile updated");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-[50px] items-center >                                                                                            ">
      <div className="pt-[50px]">
        <h1 className="text-[60px]">Update Profile</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center bg-white p-[50px] w-[50vw]"
      >
        <div className="flex justify-between space-x-4 w-[60%]">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 w-full border rounded"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-3 w-full border rounded"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-[60%] border rounded"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 w-[60%] border rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-3 w-[60%] border rounded"
          required
        />
        <p className="text-red-400">{error}</p>
        <p className="text-green-400">{success}</p>
        <div>
          <Button name={"Save"} buttonFunction={handleSubmit} />
        </div>
      </form>
    </div>
  );
};
