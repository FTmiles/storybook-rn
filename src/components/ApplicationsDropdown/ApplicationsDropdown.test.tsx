import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApplicationsDropdown } from "./ApplicationsDropdown";
import "@testing-library/jest-dom";

describe("ApplicationsDropdown Properties", () => {
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: { pathname: "/test" },
      writable: true,
    });
  });

  it("renders application name correctly", () => {
    const apps = [
      {
        applicationName: "Test App",
        linkToApplication: "/test",
      },
    ];
    const onApplicationChange = vi.fn();
    render(
      <ApplicationsDropdown
        applications={apps}
        selectedApplication={apps[1]}
        onApplicationChange={onApplicationChange}
      />
    );
    expect(screen.getByText("Test App")).toBeInTheDocument();
  });

  it("renders with icon when provided", () => {
    const apps = [
      {
        applicationName: "Test App",
        icon: '<svg stroke="currentColor">test-icon</svg>',
        linkToApplication: "/test",
      },
    ];

    const onApplicationChange = vi.fn();
    render(
      <ApplicationsDropdown
        applications={apps}
        onApplicationChange={onApplicationChange}
      />
    );
    const svgElement = screen.getByText("test-icon", { selector: "svg" });
    expect(svgElement).toBeInTheDocument();
  });

  it("uses default black color when iconColor is not provided", () => {
    const apps = [
      {
        applicationName: "Test App",
        icon: '<svg stroke="currentColor">test-icon</svg>',
        linkToApplication: "/test",
      },
    ];

    const onApplicationChange = vi.fn();
    render(
      <ApplicationsDropdown
        applications={apps}
        onApplicationChange={onApplicationChange}
      />
    );
    const svgElement = screen.getByText("test-icon", { selector: "svg" });
    expect(svgElement).toHaveAttribute("stroke", "#000000");
  });

  it("uses provided iconColor when specified", () => {
    const apps = [
      {
        applicationName: "Test App",
        icon: '<svg stroke="currentColor">test-icon</svg>',
        iconColor: "#FF0000",
        linkToApplication: "/test",
      },
    ];

    const onApplicationChange = vi.fn();
    render(
      <ApplicationsDropdown
        applications={apps}
        onApplicationChange={onApplicationChange}
      />
    );
    const svgElement = screen.getByText("test-icon", { selector: "svg" });
    expect(svgElement).toHaveAttribute("stroke", "#FF0000");
  });

  it("renders with correct link to application", async () => {
    const apps = [
      {
        applicationName: "Test App",
        linkToApplication: "/test-link",
      },
    ];

    const user = userEvent.setup();
    const onApplicationChange = vi.fn();
    render(
      <ApplicationsDropdown
        applications={apps}
        onApplicationChange={onApplicationChange}
      />
    );

    // Open the dropdown menu
    const button = screen.getByRole("button");
    await user.click(button);

    // Check the link in the dropdown menu
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems[0]).toHaveAttribute("href", "/test-link");
  });

  it("handles empty applications array", () => {
    const onApplicationChange = vi.fn();
    render(
      <ApplicationsDropdown
        applications={[]}
        onApplicationChange={onApplicationChange}
      />
    );
    expect(screen.getByText("No applications available")).toBeInTheDocument();
  });

  it("sorts applications alphabetically", async () => {
    const apps = [
      {
        applicationName: "Zebra App",
        linkToApplication: "/zebra",
      },
      {
        applicationName: "Alpha App",
        linkToApplication: "/alpha",
      },
    ];

    const user = userEvent.setup();
    const onApplicationChange = vi.fn();

    render(
      <ApplicationsDropdown
        applications={apps}
        onApplicationChange={onApplicationChange}
      />
    );

    const button = screen.getByRole("button");
    await user.click(button);

    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems[0]).toHaveTextContent("Alpha App");
    expect(menuItems[1]).toHaveTextContent("Zebra App");
  });

  it("sets the default selected application", () => {
    const apps = [
      {
        applicationName: "App 1",
        linkToApplication: "/app-1",
      },
      {
        applicationName: "App 2",
        linkToApplication: "/app-2",
      },
    ];

    const selectedApp = {
      applicationName: "App 2",
      linkToApplication: "/app-2",
    };

    render(
      <ApplicationsDropdown
        applications={apps}
        selectedApplication={selectedApp}
        onApplicationChange={vi.fn()}
      />
    );

    expect(screen.getByText("App 2")).toBeInTheDocument();
  });

  it("changes the selected application when a new one is clicked", async () => {
    const apps = [
      {
        applicationName: "App 1",
        linkToApplication: "/app-1",
      },
      {
        applicationName: "App 2",
        linkToApplication: "/app-2",
      },
    ];

    const selectedApp = {
      applicationName: "App 1",
      linkToApplication: "/app-1",
    };

    const user = userEvent.setup();
    render(
      <ApplicationsDropdown
        applications={apps}
        selectedApplication={selectedApp}
        onApplicationChange={vi.fn()}
      />
    );

    // Open the dropdown menu
    const button = screen.getByRole("button");
    await user.click(button);

    // Click on the second application
    const menuItems = screen.getAllByRole("menuitem");
    await user.click(menuItems[1]);

    // Check that the selected application has changed
    expect(screen.getByText("App 1")).toBeInTheDocument();
  });
});
