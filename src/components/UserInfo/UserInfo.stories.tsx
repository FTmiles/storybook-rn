import type { Meta, StoryObj } from "@storybook/react";
import { UserInfo } from "./UserInfo";

const meta: Meta<typeof UserInfo> = {
  title: "Components/UserInfo",
  component: UserInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onLogout: { action: "logout" },
  },
};

export default meta;
type Story = StoryObj<typeof UserInfo>;

export const WithPhoto: Story = {
  args: {
    name: "John Doe",
    initials: "JD",
    email: "jode@cowi.com",
    photoUrl: "https://i.pravatar.cc/300",
    profileUrl: "https://myaccount.microsoft.com/",
  },
};

export const WithInitials: Story = {
  args: {
    initials: "JD",
    name: "John Doe",
    email: "jode@cowi.com",
  },
};

export const LongName: Story = {
  args: {
    initials: "JSB",
    name: "Johann Sebastian Bach",
    email: "jobh@cowi.com",
  },
};
