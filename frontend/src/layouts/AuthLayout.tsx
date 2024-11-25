import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="border border-red-500 grid grid-cols-2 h-screen items-center">
      <img
        className="border h-full w-full object-cover object-center"
        src="https://checkify.com/wp-content/uploads/design-16x9-47.webp"
        alt=""
      />
      {children}
    </section>
  );
};

export default AuthLayout;
