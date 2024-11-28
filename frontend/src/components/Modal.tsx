import { ReactNode } from "react";

const Modal = ({ name, children }: { children: ReactNode; name: string }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 top-0">
      <div className="bg-white p-6 rounded-lg w-[400px] space-y-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
