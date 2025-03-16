import type { Meta, StoryObj } from "@storybook/react";
import { TopHeader } from "./TopHeader";

const meta: Meta<typeof TopHeader> = {
  title: "Components/TopHeader",
  component: TopHeader,
  parameters: {
    layout: "padded",
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        component: "A fixed header component that displays a company logo.",
      },
      story: {
        height: "100px",
        width: "100%",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    landingPageUrl: {
      control: "text",
      description: "URL to navigate to when logo is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

export const Default: Story = {
  args: {
    landingPageUrl: "/",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic header with company logo. Logo should be placed in your project's assets folder.",
      },
    },
  },
};
