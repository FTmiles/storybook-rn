import React, { ReactNode } from "react";
import { cn } from "../../core/utils";
import { HelpCircle } from "lucide-react";

interface ApplicationMenuItem {
  name: string;
  icon?: ReactNode;
  link: string;
}

interface ApplicationSpecificMenuProps {
  applicationMenuItems: ApplicationMenuItem[];
}

const HelpSupportLink = () => (
  <div className="bg-white">
    <a
      href="/help-support"
      className={cn(
        "flex items-center gap-2 p-3 hover:bg-gray-100",
        "text-sm text-gray-600",
        "transition-colors duration-200"
      )}
    >
      <HelpCircle size={18} />
      <span>Help & Support</span>
    </a>
  </div>
);

const ApplicationSpecificMenu = React.forwardRef<
  HTMLDivElement,
  ApplicationSpecificMenuProps
>(({ applicationMenuItems: menuItems }, ref) => {
  return (
    <div ref={ref} className="flex flex-col w-64 h-full bg-white">
      <div className="flex-none">
        {menuItems?.length ? (
          menuItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className={cn(
                "flex items-center gap-2 p-3 hover:bg-gray-100",
                "text-sm",
                "transition-colors duration-200"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))
        ) : (
          <div className="flex items-center gap-2 p-3 text-gray-400">
            <span className="text-sm">No menu items available</span>
          </div>
        )}
      </div>
      <div className="flex-1" />
      <div className="flex-none">
        <HelpSupportLink />
      </div>
    </div>
  );
});

ApplicationSpecificMenu.displayName = "ApplicationSpecificMenu";

export {
  ApplicationSpecificMenu,
  type ApplicationMenuItem,
  type ApplicationSpecificMenuProps,
};
