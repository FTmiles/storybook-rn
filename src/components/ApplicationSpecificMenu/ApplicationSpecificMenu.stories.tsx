import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationSpecificMenu } from "./ApplicationSpecificMenu";
import { FileText, Users, Building, File } from "lucide-react";

const meta: Meta<typeof ApplicationSpecificMenu> = {
  title: "Components/ApplicationSpecificMenu",
  component: ApplicationSpecificMenu,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#f5f5f5" }],
    },

    docs: {
      story: {
        height: "400px",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "400px",
          overflow: "auto",
          padding: "1px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ApplicationSpecificMenu>;

const mockMenuItems = [
  {
    name: "Project Info",
    icon: <FileText size={18} />,
    link: "/project/info",
  },
  {
    name: "Members",
    icon: <Users size={18} />,
    link: "/project/members",
  },
  {
    name: "Companies",
    icon: <Building size={18} />,
    link: "/project/companies",
  },
  {
    name: "Documents",
    icon: <File size={18} />,
    link: "/project/documents",
  },
];

export const Default: Story = {
  args: {
    applicationMenuItems: mockMenuItems,
  },
};

export const NoIcons: Story = {
  args: {
    applicationMenuItems: mockMenuItems.map(({ icon, ...item }) => item),
  },
};

export const SingleItem: Story = {
  args: {
    applicationMenuItems: [mockMenuItems[0]],
  },
};

export const EmptyMenu: Story = {
  args: {
    applicationMenuItems: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shows a "No menu items available" message when the menuItems array is empty.',
      },
    },
  },
};
