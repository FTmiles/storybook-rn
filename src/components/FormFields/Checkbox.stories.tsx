import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Components/FormFields/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "text",
            description: "The value of the input",
        },
        checked: {
            control: "boolean",
            description: "Whether the input is checked",
        },
        defaultChecked: {
            control: "boolean",
            description: "Whether the input is checked by default",
        },
        label: {
            control: "text",
            description: "The label of the input",
        },
        disabled: {
            control: { type: "boolean" },
            description: "Whether the button is disabled",
        },
        className: {
            control: "text",
            description: "Additional CSS class names",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {}
};

export const WithLabel: Story = {
    args: {
        label: "This is a test label"
    }
};


