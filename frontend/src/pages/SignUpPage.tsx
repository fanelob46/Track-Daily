import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import { setCredentials } from "../slices/authSlices";
import { useRegisterMutation } from "../slices/userApiSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterErrorResponse, UserFormData } from "../definitions";

const SignUpPage = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = async (userData: UserFormData) => {
    const { firstName, lastName, email, password, confirmPassword, isAdmin } =
      userData;

    if (isAdmin && import.meta.env.VITE_SECRET_KEY !== userData?.secretKey) {
      setSignUpError("Incorrect SECRET_KEY");
      return;
    }

    if (password !== confirmPassword) {
      setSignUpError("Passwords do not match");
      return;
    } else {
      try {
        const res = await register({
          firstName,
          lastName,
          email,
          password,
          isAdmin,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        setSignUpError("");
        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } catch (error) {
        const errorMessage: RegisterErrorResponse =
          error as RegisterErrorResponse;
        setSignUpError(errorMessage.data.message);
      }
    }
  };
  return (
    <section>
      <AuthLayout>
        <AuthForm
          name="Sign Up"
          type="signup"
          submitFunction={handleSignUp}
          error={signUpError}
        />
      </AuthLayout>
    </section>
  );
};

export default SignUpPage;
