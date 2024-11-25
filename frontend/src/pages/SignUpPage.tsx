import AuthForm from "../components/AuthForm";
import AuthLayout from "../layouts/AuthLayout";

const SignUpPage = () => {
  const handleSignUp = () => console.log("Sign Up User");
  const handleLogin = () => console.log("Login User");
  const handleEdit = () => console.log("Edit User");
  return (
    <section>
      <AuthLayout>
        <AuthForm name="Sign Up" type="signup" submitFunction={handleSignUp} />
      </AuthLayout>
      <AuthLayout>
        <AuthForm name="Login" type="login" submitFunction={handleLogin} />
      </AuthLayout>

      <AuthForm name="Edit" type="edit" submitFunction={handleEdit} />
    </section>
  );
};

export default SignUpPage;
