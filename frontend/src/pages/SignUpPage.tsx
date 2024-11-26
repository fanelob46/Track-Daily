import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import { setCredentials } from "../slices/authSlices";
import { useRegisterMutation } from "../slices/userApiSlice";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (userData: Record<string, string>) => {
    const { firstName, lastName, email, password, confirmPassword, isAdmin } =
      userData;

    console.log("Boolean(isAdmin)   ", Boolean(isAdmin));

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      try {
        const res = await register({
          firstName,
          lastName,
          email,
          password,
          isAdmin: Boolean(isAdmin),
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const handleLogin = () => console.log("Login User");
  // const handleEdit = () => console.log("Edit User");
  return (
    <section>
      <AuthLayout>
        <AuthForm name="Sign Up" type="signup" submitFunction={handleSignUp} />
      </AuthLayout>
      {/* <AuthLayout>
        <AuthForm name="Login" type="login" submitFunction={handleLogin} />
      </AuthLayout> */}

      {/* <AuthForm name="Edit" type="edit" submitFunction={handleEdit} /> */}
    </section>
  );
};

export default SignUpPage;
