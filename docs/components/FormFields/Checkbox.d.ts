import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label?: string;
    labelClassName?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
