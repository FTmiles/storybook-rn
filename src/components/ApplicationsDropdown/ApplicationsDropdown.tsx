import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "../../core/utils";

interface Application {
  applicationName: string;
  icon?: string;
  iconColor?: string;
  linkToApplication: string;
}

const SVGIcon: React.FC<{ svgString?: string; color?: string }> = ({
  svgString,
  color,
}) => {
  if (!svgString) return null;
  const coloredSvg = color
    ? svgString.replace(/stroke="currentColor"/, `stroke="${color}"`)
    : svgString;
  return <span dangerouslySetInnerHTML={{ __html: coloredSvg }} />;
};

interface ApplicationsDropdownProps {
  applications: Application[];
  selectedApplication?: Application;
  onApplicationChange: (app: Application) => void;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className="relative w-3 h-3">
      {isOpen ? (
        <ChevronDown className="w-3 h-3 text-gray-400" />
      ) : (
        <ChevronRight className="w-3 h-3 text-gray-400" />
      )}
    </div>
  );
};

const ApplicationsDropdown: React.FC<ApplicationsDropdownProps> = ({
  applications,
  selectedApplication,
  onApplicationChange,
}) => {
  const currentPath = window.location.pathname;

  const normalizedApps = applications
    .map((app) => ({
      applicationName: app.applicationName || "",
      icon: app.icon || "",
      iconColor: app.iconColor || "#000000",
      linkToApplication: app.linkToApplication || "",
    }))
    .sort((a, b) => a.applicationName.localeCompare(b.applicationName));

  const getCurrentAppIndex = (): number => {
    // # 1: find by selected application's link if available
    if (selectedApplication?.linkToApplication) {
      const indexByLink = normalizedApps.findIndex(
        (app) => app.linkToApplication === selectedApplication.linkToApplication
      );
      if (indexByLink >= 0) return indexByLink;
    }

    // # 2: matching by application name
    if (selectedApplication?.applicationName) {
      const indexByName = normalizedApps.findIndex(
        (app) => app.applicationName === selectedApplication.applicationName
      );
      if (indexByName >= 0) return indexByName;
    }

    // # 3: match by current URL path
    const indexByCurrentPath = normalizedApps.findIndex((app) =>
      currentPath.startsWith(app.linkToApplication)
    );
    if (indexByCurrentPath >= 0) return indexByCurrentPath;

    // # 4: default to the first application
    return 0;
  };

  const selectedIndex = getCurrentAppIndex();

  const [isOpen, setIsOpen] = React.useState(false);

  if (applications.length === 0) {
    return (
      <div className="flex items-center text-sm bg-white border border-gray-200 w-full gap-2 p-3">
        <span className="text-sm">No applications available</span>
      </div>
    );
  }

  return (
    <DropdownMenuPrimitive.DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuPrimitive.DropdownMenuTrigger className="flex items-center bg-white border border-gray-200 w-full gap-2 p-3 focus:bg-gray focus:outline-none">
        <div className="flex items-center gap-2">
          {normalizedApps[selectedIndex].icon && (
            <SVGIcon
              svgString={normalizedApps[selectedIndex].icon}
              color={normalizedApps[selectedIndex].iconColor}
            />
          )}
          <span className="text-sm">
            {normalizedApps[selectedIndex].applicationName}
          </span>
        </div>
        <ChevronIcon isOpen={isOpen} />
      </DropdownMenuPrimitive.DropdownMenuTrigger>
      <DropdownMenuPrimitive.DropdownMenuContent
        className={cn(
          "z-50 w-[220px] overflow-hidden border border-gray-200 rounded-md bg-popover mt-2 mb-4",
          "shadow-lg"
        )}
      >
        {normalizedApps.map((app, index) => (
          <DropdownMenuPrimitive.DropdownMenuItem
            key={app.linkToApplication}
            className={cn(
              "cursor-pointer bg-white border-b border-gray-200 hover:bg-gray-100 last:border-b-0 focus:outline-none",
              selectedIndex === index && "bg-gray-200"
            )}
            asChild
          >
            <a
              href={app.linkToApplication}
              className="flex items-center gap-2 p-3"
              onClick={() => {
                onApplicationChange(app);
              }}
            >
              {app.icon && (
                <SVGIcon svgString={app.icon} color={app.iconColor} />
              )}{" "}
              <span className="text-sm">{app.applicationName}</span>
            </a>
          </DropdownMenuPrimitive.DropdownMenuItem>
        ))}
      </DropdownMenuPrimitive.DropdownMenuContent>
    </DropdownMenuPrimitive.DropdownMenu>
  );
};

ApplicationsDropdown.displayName = "ApplicationsDropdown";

export { ApplicationsDropdown };
export type { Application, ApplicationsDropdownProps };
