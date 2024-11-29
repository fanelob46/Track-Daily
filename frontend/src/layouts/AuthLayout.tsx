import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="border border-red-500 grid sm:grid-cols-2 h-screen items-center">
      <img
        className="border h-full w-full object-cover object-center hidden sm:block"
        src="./finger.png"
        alt=""
      />
      {children}
    </section>
  );
};

export default AuthLayout;
