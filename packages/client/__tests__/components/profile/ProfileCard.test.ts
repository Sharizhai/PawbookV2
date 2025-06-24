import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import ProfileCard from "$components/profile/ProfileCard.svelte";

describe("ProfileCard Component", () => {

  it("Should render the component with all elements", () => {
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe"
      }
    });

    expect(container.querySelector(".profile-card-container")).not.toBeNull();
    expect(container.querySelector(".profile-card-settings-button")).not.toBeNull();
    expect(container.querySelector(".profile-card-container-user-infos")).not.toBeNull();
    expect(container.querySelector(".profile-card-container-user-infos-avatar")).not.toBeNull();
    expect(container.querySelector(".profile-card-container-user-infos-container-name")).not.toBeNull();
    expect(container.querySelector(".profile-card-container-user-infos-buttons-container")).not.toBeNull();
    expect(container.querySelector("button")).not.toBeNull();
  });

  it("Should display the correct user name", () => {
    const firstName = "Jane";
    const lastName = "Smith";
    const { container } = render(ProfileCard, {
      props: {
        firstName,
        lastName
      }
    });

    const nameElement = container.querySelector(".profile-card-container-user-infos-container-name");
    expect(nameElement).not.toBeNull();
    expect(nameElement?.textContent).toBe(`${firstName} ${lastName}`);
  });

  it("Should display the description when provided", () => {
    const description = "A passionate animal lover";
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe",
        description
      }
    });

    const descriptionElement = container.querySelector(".profile-card-container-user-infos-container-description");
    expect(descriptionElement).not.toBeNull();
    expect(descriptionElement?.textContent).toBe(description);
  });

  it("Should use default image when profilePicture is not provided", () => {
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe"
      }
    });

    const avatarElement = container.querySelector(".profile-card-container-user-infos-avatar") as HTMLImageElement;
    expect(avatarElement).not.toBeNull();
    expect(avatarElement.src).toContain("/paws.png");
  });

  it("Should use provided image when profilePicture is provided", () => {
    const imagePath = "/test-profile.jpg";
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe",
        profilePicture: imagePath
      }
    });

    const avatarElement = container.querySelector(".profile-card-container-user-infos-avatar") as HTMLImageElement;
    expect(avatarElement).not.toBeNull();
    expect(avatarElement.src).toContain(imagePath);
  });

  it("Should apply custom class when provided", () => {
    const customClass = "test-custom-class";
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe",
        customClass
      }
    });

    const cardContainer = container.querySelector(".profile-card-container");
    expect(cardContainer).not.toBeNull();
    expect(cardContainer?.classList.contains(customClass)).toBe(true);
  });

  it("Should have a clickable follow button", async () => {
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe"
      }
    });

    // Chercher le bouton dans le conteneur des boutons
    const followButton = container.querySelector(".profile-card-container-user-infos-buttons-container button");
    expect(followButton).not.toBeNull();
    expect(followButton?.textContent?.trim()).toBe("Suivre");
    expect(followButton?.hasAttribute("disabled")).toBe(false);

    await fireEvent.click(followButton as HTMLElement);
  });

  it("Should have a clickable settings button", async () => {
    const { container } = render(ProfileCard, {
      props: {
        firstName: "John",
        lastName: "Doe"
      }
    });

    const settingsButton = container.querySelector(".profile-card-settings-button") as HTMLElement;
    expect(settingsButton).not.toBeNull();

    expect(settingsButton?.hasAttribute("disabled")).toBe(false);

    await fireEvent.click(settingsButton);
  });
});