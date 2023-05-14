import React, { FC } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  color: string;
}

const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
  return <button {...props} style={{color}}>{children}</button>;
};

export default Button;
