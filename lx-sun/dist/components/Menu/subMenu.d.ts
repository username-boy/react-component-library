import React from "react";
export interface SubMenuProps {
    title: string;
    className?: string;
    index?: string;
    children: React.ReactNode;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
