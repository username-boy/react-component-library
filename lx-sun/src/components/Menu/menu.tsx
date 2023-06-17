import React, {createContext, FunctionComponentElement, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback
    children: React.ReactNode;
    defaultOpenSubMenus?: string[]
}

export interface IMenuContext {
    index?: string,
    onSelect?: SelectCallback,
    mode?: MenuMode,
    defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'}) //创建一个context，用于传递参数（index,onSelect）
const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        onSelect,
        defaultIndex,
        children,
        defaultOpenSubMenus
    } = props
    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('lx-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.error('menu not has a menuItem')
            }
        })
    }
    return (
        <ul
            className={classes}
            style={style}
        >
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}
export default Menu