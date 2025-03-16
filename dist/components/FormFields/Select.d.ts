import { default as React } from 'react';
import * as SelectPrimitive from "@radix-ui/react-select";
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    dir?: "ltr" | "rtl";
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export { Select, SelectItem };
