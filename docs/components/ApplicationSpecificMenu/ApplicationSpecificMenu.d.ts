import { default as React, ReactNode } from '../../../node_modules/react';
interface ApplicationMenuItem {
    name: string;
    icon?: ReactNode;
    link: string;
}
interface ApplicationSpecificMenuProps {
    applicationMenuItems: ApplicationMenuItem[];
}
declare const ApplicationSpecificMenu: React.ForwardRefExoticComponent<ApplicationSpecificMenuProps & React.RefAttributes<HTMLDivElement>>;
export { ApplicationSpecificMenu, type ApplicationMenuItem, type ApplicationSpecificMenuProps, };
