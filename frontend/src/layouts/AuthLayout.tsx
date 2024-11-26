import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="border border-red-500 grid sm:grid-cols-2 h-screen items-center">
      <img
        className="border h-full w-full object-cover object-center hidden sm:block"
        src="https://cdn.prod.website-files.com/668cdb4718c0f5195a92717d/66a83d38dd44e03e114223f5_Understanding-top-tasks.png"
        alt=""
      />
      {children}
    </section>
  );
};

export default AuthLayout;
