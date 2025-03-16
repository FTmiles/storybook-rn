import * as React from "react";
import { cn } from "../../core/utils";
import CowiLogo from "./CowiLogo";

interface TopHeaderProps {
  className?: string;
  landingPageUrl?: string;
}

const TopHeader = ({
  className,
  landingPageUrl,
}: TopHeaderProps) => {
  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0",
          "h-[32px] min-h-[32px]",
          "bg-white border-b border-gray-200",
          "flex items-center",
          "z-50",
          className
        )}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center pl-2 h-[32px]">
            <a href={landingPageUrl}>
              <CowiLogo className="h-[12px] w-[41px] object-contain" />
            </a>
          </div>
        </div>
      </header>
      <div className="h-[32px] min-h-[32px]" />
    </>
  );
};

TopHeader.displayName = "TopHeader";

export { TopHeader, type TopHeaderProps };
