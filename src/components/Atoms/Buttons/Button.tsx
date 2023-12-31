import './Button.scss';
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: any;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <button className="primary_button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
