import * as React from "react";

import { cn } from "../../core/utils";

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    className?: string;
};

const TextArea = React.forwardRef<
    HTMLTextAreaElement,
    TextAreaProps
>(({ className, ...props }, ref) => {
    return (
        <textarea 
        ref={ref} 
        className={cn("flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )} 
          {...props} />
    )
});

TextArea.displayName = "TextArea";

export { TextArea };