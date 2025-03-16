import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const containerVariants: (props?: ({
    size?: "sm" | "lg" | "full" | "md" | "xl" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface ContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
    bg?: string;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export { Container, containerVariants };
