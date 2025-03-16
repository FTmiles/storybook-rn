import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./InputField";

const meta: Meta<typeof Input> = {
  title: "Components/FormFields/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The value of the input",
    },
    placeholder: {
      control: "text",
      description: "The placeholder of the input",
    },
    type: {
      control: { type: "select" },
      options: ["date","email","number","password","text"],
      description: "The visual style of the button",
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "default",
    placeholder: "Placeholder",
  },
};


