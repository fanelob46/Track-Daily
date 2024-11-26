import React, { useEffect } from "react";
import { useLoginMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import { setCredentials } from "../slices/authSlices";
import { RootState, AppDispatch } from "../store";

export const LoginPage: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const handleLogin = async (userData: Record<string, string>) => {
    try {
      const { email, password } = userData;
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <AuthLayout>
        <AuthForm name="Login" type="login" submitFunction={handleLogin} />
      </AuthLayout>
    </div>
  );
};
