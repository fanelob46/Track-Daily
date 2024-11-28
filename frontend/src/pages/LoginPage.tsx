import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import { setCredentials } from "../slices/authSlices";
import { RootState, AppDispatch } from "../store";
import { RegisterErrorResponse, UserFormData } from "../definitions";

export const LoginPage: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [loginError, setSLoginError] = useState("");

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      console.log("No user logged in");
    }
  }, [navigate, userInfo]);

  const handleLogin = async (userData: UserFormData) => {
    try {
      const { email, password } = userData;
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));

      if (res.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      const errorMessage: RegisterErrorResponse = err as RegisterErrorResponse;
      setSLoginError(errorMessage.data.message);
    }
  };

  return (
    <div>
      <AuthLayout>
        <AuthForm
          name="Login"
          type="login"
          submitFunction={handleLogin}
          error={loginError}
        />
      </AuthLayout>
    </div>
  );
};
