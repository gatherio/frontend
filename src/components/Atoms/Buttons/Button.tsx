import React from "react";
import './Button.scss';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type}) => {
  return <button className="button" onClick={onClick} type={type}>{children}</button>;
};

export default Button;
