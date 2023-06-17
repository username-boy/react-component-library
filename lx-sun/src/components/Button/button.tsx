import React, {ButtonHTMLAttributes, AnchorHTMLAttributes} from "react";
import classNames from 'classnames'

/**
 * ButtonSize：按钮的大小
 * */
export type ButtonSize = 'lg' | 'sm'
// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'lg'
// }

/**
 * ButtonType：按钮的类型
 * */
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }

/**
 * ButtonProps：按钮的一些参数
 * */
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * Button:按钮组件
 * */
const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        href,
        children,
        ...restProps
    } = props
    // btn btn-lg btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })
    if (btnType === 'link') {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}
Button.defaultProps = {
    btnType: 'default',
    disabled: false
}
export default Button