import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ApplicationSpecificMenu } from "./ApplicationSpecificMenu";
import "@testing-library/jest-dom";
import { FileText, Users } from "lucide-react";

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
];

describe("ApplicationSpecificMenu", () => {
  it("renders menu items correctly", () => {
    render(<ApplicationSpecificMenu applicationMenuItems={mockMenuItems} />);

    const projectInfo = screen.getByRole("link", { name: /project info/i });
    const members = screen.getByRole("link", { name: /members/i });

    expect(projectInfo).toBeInTheDocument();
    expect(members).toBeInTheDocument();
  });

  it("renders links with correct hrefs", () => {
    render(<ApplicationSpecificMenu applicationMenuItems={mockMenuItems} />);

    const projectInfoLink = screen.getByRole("link", { name: /project info/i });
    const membersLink = screen.getByRole("link", { name: /members/i });

    expect(projectInfoLink).toHaveAttribute("href", "/project/info");
    expect(membersLink).toHaveAttribute("href", "/project/members");
  });

  it("shows no menu items message when empty array provided", () => {
    render(<ApplicationSpecificMenu applicationMenuItems={[]} />);

    expect(screen.getByText("No menu items available")).toBeInTheDocument();
  });

  it("handles menu items without icons", () => {
    const itemsWithoutIcons = [
      {
        name: "Project Info",
        link: "/project/info",
      },
    ];
    render(
      <ApplicationSpecificMenu applicationMenuItems={itemsWithoutIcons} />
    );

    const link = screen.getByRole("link", { name: /project info/i });
    expect(link).toBeInTheDocument();
  });

  it("renders correct number of links including Help & Support", () => {
    render(<ApplicationSpecificMenu applicationMenuItems={mockMenuItems} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3); // 2 menu items + Help & Support
  });

  it("renders Help & Support link", () => {
    render(<ApplicationSpecificMenu applicationMenuItems={mockMenuItems} />);

    const helpLink = screen.getByRole("link", { name: /help & support/i });
    expect(helpLink).toBeInTheDocument();
    expect(helpLink).toHaveAttribute("href", "/help-support");
  });
});
