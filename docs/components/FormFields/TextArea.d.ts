import * as React from "react";
interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { TextArea };
