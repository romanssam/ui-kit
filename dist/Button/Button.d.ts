import React, { FC } from "react";
export interface ButtonProps {
    children: React.ReactNode;
    color: string;
}
declare const Button: FC<ButtonProps>;
export default Button;
