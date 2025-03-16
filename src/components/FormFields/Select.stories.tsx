import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem } from "./Select";

const meta: Meta<typeof Select> = {
    title: "Components/FormFields/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        placeholder: "Placeholder",
        children: (
            <>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
            </>
        )
    },
};


