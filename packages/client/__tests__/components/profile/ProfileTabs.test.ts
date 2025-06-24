import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import ProfileTabs from "$components/profile/ProfileTabs.svelte";
import { ProfileTab } from "$types/profileTabsTypes";

describe("ProfileTabs Component", () => {
  it("Should render the component with all elements", () => {
    const onClick = () => {};
    const tabContent = () => "Test Content";
    const tabs = [
      { label: "Publications", value: ProfileTab.Publications },
      { label: "Animals", value: ProfileTab.Animals }
    ];

    const { container } = render(ProfileTabs, {
      props: {
        activeTab: ProfileTab.Publications,
        onClick,
        tabContent,
        tabs: tabs
      }
    });

    expect(container.querySelector(".profile-tab")).not.toBeNull();
    expect(container.querySelector(".profile-tab-header")).not.toBeNull();
    expect(container.querySelectorAll(".profile-tab-header-button").length).toBe(2);
    expect(container.querySelector(".profile-tab-content")).not.toBeNull();
  });

  it("Should display the correct tab labels", () => {
    const onClick = () => {};
    const tabContent = () => "Test Content";
    const tabs = [
      { label: "Publications", value: ProfileTab.Publications },
      { label: "Animals", value: ProfileTab.Animals }
    ];

    const { container } = render(ProfileTabs, {
      props: {
        activeTab: ProfileTab.Publications,
        onClick,
        tabContent,
        tabs: tabs
      }
    });

    const tabButtons = container.querySelectorAll(".profile-tab-header-button");
    expect(tabButtons[0].textContent?.trim()).toBe("Publications");
    expect(tabButtons[1].textContent?.trim()).toBe("Animals");
  });

  it("Should mark the active tab correctly", () => {
    const onClick = () => {};
    const tabContent = () => "Test Content";
    const tabs = [
      { label: "Publications", value: ProfileTab.Publications },
      { label: "Animals", value: ProfileTab.Animals }
    ];

    const { container } = render(ProfileTabs, {
      props: {
        activeTab: ProfileTab.Publications,
        onClick,
        tabContent,
        tabs: tabs
      }
    });

    const tabButtons = container.querySelectorAll(".profile-tab-header-button");
    expect(tabButtons[0].classList.contains("active")).toBe(true);
    expect(tabButtons[1].classList.contains("active")).toBe(false);
  });

  it("Should call onClick with the correct tab value when a tab is clicked", async () => {
    let clickedTab: ProfileTab | null = null;
    const onClick = (tab: ProfileTab) => {
      clickedTab = tab;
    };
    const tabContent = () => "Test Content";
    const tabs = [
      { label: "Publications", value: ProfileTab.Publications },
      { label: "Animals", value: ProfileTab.Animals }
    ];

    const { container } = render(ProfileTabs, {
      props: {
        activeTab: ProfileTab.Publications,
        onClick,
        tabContent,
        tabs: tabs
      }
    });

    const tabButtons = container.querySelectorAll(".profile-tab-header-button");
    await fireEvent.click(tabButtons[1]);

    expect(clickedTab).toBe(ProfileTab.Animals);
  });

  it("Should have a content container for tab rendering", () => {
    const onClick = () => {};
    const tabContent = () => "Test Content";
    const tabs = [
      { label: "Publications", value: ProfileTab.Publications },
      { label: "Animals", value: ProfileTab.Animals }
    ];

    const { container } = render(ProfileTabs, {
      props: {
        activeTab: ProfileTab.Publications,
        onClick,
        tabContent,
        tabs: tabs
      }
    });

    const contentElement = container.querySelector(".profile-tab-content");
    expect(contentElement).not.toBeNull();
    expect(contentElement).toBeInstanceOf(HTMLElement);
  });

  it("Should switch active tab when a different tab is clicked", async () => {
    const onClick = () => {};
    const tabContent = () => "Test Content";
    const tabs = [
      { label: "Publications", value: ProfileTab.Publications },
      { label: "Animals", value: ProfileTab.Animals }
    ];

    const { container, rerender } = render(ProfileTabs, {
      props: {
        activeTab: ProfileTab.Publications,
        onClick,
        tabContent,
        tabs: tabs
      }
    });

    const tabButtons = container.querySelectorAll(".profile-tab-header-button");
    await fireEvent.click(tabButtons[1]);

    await rerender({
      activeTab: ProfileTab.Animals,
      onClick,
      tabContent,
      tabs: tabs
    });

    const updatedTabButtons = container.querySelectorAll(".profile-tab-header-button");
    expect(updatedTabButtons[0].classList.contains("active")).toBe(false);
    expect(updatedTabButtons[1].classList.contains("active")).toBe(true);
  });
});