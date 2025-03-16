import * as React from "react";
interface Application {
    applicationName: string;
    icon?: string;
    iconColor?: string;
    linkToApplication: string;
}
interface ApplicationsDropdownProps {
    applications: Application[];
    selectedApplication?: Application;
    onApplicationChange: (app: Application) => void;
}
declare const ApplicationsDropdown: React.FC<ApplicationsDropdownProps>;
export { ApplicationsDropdown };
export type { Application, ApplicationsDropdownProps };
