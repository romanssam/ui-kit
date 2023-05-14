import React, { FC } from "react";

export interface ButtonProps {
  color: string;
  big: boolean;
}

export const Button: FC<ButtonProps> = ({ children, color, big, ...props }) => {
  return <button {...props}>{children}</button>;
};
