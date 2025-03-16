import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { User, LogOut } from "lucide-react";
import { cn } from "../../core/utils";

export interface UserInfoProps {
  name: string;
  initials: string;
  email: string;
  photoUrl?: string;
  profileUrl?: string;
  onLogout?: () => void;
}

const Avatar: React.FC<{
  name: string;
  photoUrl?: string;
  initials: string;
}> = ({ name, photoUrl, initials }) => {
  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={name}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="h-10 w-10 rounded-full bg-cowi flex items-center justify-center">
      <span className="text-sm font-medium text-white">{initials}</span>
    </div>
  );
};

const UserInfo = React.forwardRef<HTMLDivElement, UserInfoProps>(
  ({ name, initials, email, photoUrl, profileUrl, onLogout }, ref) => {
    return (
      <div ref={ref} className="relative inline-block">
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <button
              className="flex items-center gap-2 rounded-full p-1 outline-none hover:bg-gray-100"
              aria-label="User menu"
            >
              <Avatar name={name} initials={initials} photoUrl={photoUrl} />
            </button>
          </DropdownMenuPrimitive.Trigger>

          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              className="w-56 rounded-md bg-white p-1 shadow-lg ring-1 ring-gray-200 ring-opacity-5"
              align="end"
            >
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-900">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
              </div>

              <DropdownMenuPrimitive.Item asChild>
                <a
                  href={profileUrl}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm",
                    "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    "outline-none cursor-pointer"
                  )}
                >
                  <User className="h-4 w-4" />
                  Profile
                </a>
              </DropdownMenuPrimitive.Item>

              <DropdownMenuPrimitive.Item asChild>
                <button
                  onClick={onLogout}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm",
                    "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    "outline-none cursor-pointer"
                  )}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
      </div>
    );
  }
);

UserInfo.displayName = "UserInfo";
export { UserInfo };
