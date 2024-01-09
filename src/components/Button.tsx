import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-2 border border-gray-300 p-1 px-2.5 transition-all bg-gray-100 rounded-sm hover:text-white hover:bg-gray-500"
    >
      {children}
    </button>
  );
}

export default Button;
