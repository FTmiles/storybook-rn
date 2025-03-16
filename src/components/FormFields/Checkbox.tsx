import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "../../core/utils"


interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label?: string;
    labelClassName?: string;
}

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, label, labelClassName, id: propId, ...props }, ref) => {
    const id = propId || React.useId();
    const checkbox = (
        <CheckboxPrimitive.Root
            id={id}
            ref={ref}
            className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-gray-900 hover:bg-gray-100 cursor-pointer ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-700 data-[state=checked]:text-gray-50",
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn("flex items-center justify-center text-current")}
            >
                <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )

    if (!label) return checkbox;

    return (
        <div className="flex items-center space-x-2">
            {checkbox}
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }


