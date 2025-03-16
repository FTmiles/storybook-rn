import * as React from "react";
export interface UserInfoProps {
    name: string;
    initials: string;
    email: string;
    photoUrl?: string;
    profileUrl?: string;
    onLogout?: () => void;
}
declare const UserInfo: React.ForwardRefExoticComponent<UserInfoProps & React.RefAttributes<HTMLDivElement>>;
export { UserInfo };
