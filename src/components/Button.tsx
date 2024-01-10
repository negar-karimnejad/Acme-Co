import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-2 border border-gray-300 p-1 px-2.5 transition-all bg-emerald-500 text-white rounded-sm hover:bg-emerald-600"
    >
      {children}
    </button>
  );
}

export default Button;
