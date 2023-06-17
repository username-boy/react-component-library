import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
/**
 * ButtonSize：按钮的大小
 * */
export type ButtonSize = 'lg' | 'sm';
/**
 * ButtonType：按钮的类型
 * */
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
/**
 * ButtonProps：按钮的一些参数
 * */
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button:按钮组件
 * */
declare const Button: React.FC<ButtonProps>;
export default Button;
