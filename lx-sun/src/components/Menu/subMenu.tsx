import React, {useContext, FunctionComponentElement, useState} from "react";
import classNames from "classnames";
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menuItem";
import Icon from "../Icon/icon";
import {CSSTransition} from "react-transition-group";
// import Transition from "../Transition/transition";

export interface SubMenuProps {
    title: string,
    className?: string,
    index?: string,
    children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const {
        title,
        className,
        index,
        children
    } = props
    const context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpened)
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
        },
        onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
        }
    } : {}
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })
    const renderChildren = () => {
        const subMenuClasses = classNames('lx-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error('error')
            }
        })
        return (
            <CSSTransition
                in={menuOpen}
                timeout={300}
                classNames="zoom-in-top"
                appear
                unmountOnExit
            >
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            </CSSTransition>
        )
    }
    return (
        <li
            key={index}
            className={classes}
            {...hoverEvents}
        >
            <div
                className='submenu-item'
                onClick={handleClick}
                {...clickEvents}
            >
                {title}
                <Icon icon='angle-down' className="arrow-icon"></Icon>
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu