import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationsDropdown } from "./ApplicationsDropdown";

const meta: Meta<typeof ApplicationsDropdown> = {
  title: "Components/ApplicationsDropdown",
  component: ApplicationsDropdown,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        component:
          "A dropdown component for switching between applications. Component width will be set in the parent CombinedNavigation component.",
      },

      story: {
        height: "350px",
        width: "100%",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "350px",
          width: "500px",
          paddingTop: "10px",
          paddingLeft: "10px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    applications: {
      control: "object",
      description: "Array of applications to display in the navigator",
    },
    selectedApplication: {
      control: "object",
      description: "The initially selected application",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ApplicationsDropdown>;

const mockApplications = [
  {
    applicationName: "Account Admin",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    iconColor: "#60A5FA",
    linkToApplication: "/account-admin",
  },
  {
    applicationName: "Product Overview",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    iconColor: "#A3E635",
    linkToApplication: "/product-overview",
  },
  {
    applicationName: "Project Admin",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    iconColor: "#D97706",
    linkToApplication: "/project-admin",
  },
  {
    applicationName: "Record Manager",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>`,
    iconColor: "#FF4444",
    linkToApplication: "/record-manager",
  },
  {
    applicationName: "Structural Designer",
    icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-stack"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6l-8 4l8 4l8 -4l-8 -4" /><path d="M4 14l8 4l8 -4" /></svg>`,
    iconColor: "#8B5CF6",
    linkToApplication: "/structural-designer",
  },
];

export const Default: Story = {
  args: {
    applications: mockApplications,
    selectedApplication: mockApplications[0],
  },
  parameters: {
    docs: {
      description: {
        story: "Basic usage example with multiple applications.",
      },
      source: {
        language: "tsx",
        code: `
import { ApplicationsDropdown } from "@your-org/ui-components";

const applications = [
  {
    applicationName: "Record Manager",
    icon: "<svg>...</svg>",
    linkToApplication: "/record-manager"
  },
  {
    applicationName: "Project Admin",
    icon: "<svg>...</svg>",
    linkToApplication: "/project-admin"
  }
];

export default function App() {
  return (
    <ApplicationsDropdown
      applications={applications}
      selectedApplication={applications[0]}
    />
  );
}`,
      },
    },
  },
};

export const SingleApplication: Story = {
  args: {
    applications: mockApplications.slice(0, 1),
    selectedApplication: mockApplications[0],
  },
};

export const OtherApplication: Story = {
  args: {
    applications: mockApplications,
    selectedApplication: mockApplications[4],
  },
};

export const NoIcons: Story = {
  args: {
    applications: mockApplications.map(({ icon, ...app }) => app),
    selectedApplication: mockApplications[2],
  },
};

export const NoApplications: Story = {
  args: {
    applications: [],
  },
};
