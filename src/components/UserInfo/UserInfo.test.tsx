import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserInfo } from "./UserInfo";
import "@testing-library/jest-dom";

describe("UserInfo", () => {
  const defaultProps = {
    name: "John Doe",
    initials: "JD",
    email: "john.doe@cowi.com",
  };

  it("renders with required props", async () => {
    const user = userEvent.setup();
    render(<UserInfo {...defaultProps} />);

    expect(screen.getByText("JD")).toBeInTheDocument();
    // to open dropdown
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@cowi.com")).toBeInTheDocument();
  });

  it("displays user photo when photoUrl is provided", () => {
    const photoUrl = "https://example.com/photo.jpg";
    render(<UserInfo {...defaultProps} photoUrl={photoUrl} />);

    const img = screen.getByAltText(defaultProps.name);
    expect(img).toHaveAttribute("src", photoUrl);
  });

  it("displays initials when no photoUrl is provided", () => {
    render(<UserInfo {...defaultProps} />);

    expect(screen.getByText("JD")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("uses custom profile URL when provided", async () => {
    const user = userEvent.setup();
    const profileUrl = "https://custom-profile.com";

    render(<UserInfo {...defaultProps} profileUrl={profileUrl} />);

    await user.click(screen.getByRole("button"));
    const profileLink = screen.getByText("Profile").closest("a");

    expect(profileLink).toHaveAttribute("href", profileUrl);
  });

  it("calls onLogout when sign out is clicked", async () => {
    const user = userEvent.setup();
    const onLogout = vi.fn();

    render(<UserInfo {...defaultProps} onLogout={onLogout} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Sign out"));

    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it("opens dropdown menu when settings icon is clicked", async () => {
    const user = userEvent.setup();
    render(<UserInfo {...defaultProps} />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByText(defaultProps.name)).toBeVisible();
    expect(screen.getByText(defaultProps.email)).toBeVisible();
    expect(screen.getByText("Profile")).toBeVisible();
    expect(screen.getByText("Sign out")).toBeVisible();
  });

  it("maintains avatar size with and without photo", () => {
    const { rerender } = render(<UserInfo {...defaultProps} />);

    const initialsAvatar = screen.getByText("JD").parentElement;
    expect(initialsAvatar).toHaveClass("h-10 w-10");

    rerender(
      <UserInfo {...defaultProps} photoUrl="https://example.com/photo.jpg" />
    );
    const photoAvatar = screen.getByAltText(defaultProps.name);
    expect(photoAvatar).toHaveClass("h-10 w-10");
  });
});
