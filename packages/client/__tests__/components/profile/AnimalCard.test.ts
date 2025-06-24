import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import AnimalCard from "$components/profile/AnimalCard.svelte";

describe("AnimalCard Component", () => {

  it("Should render the component with all elements", () => {
    const { container } = render(AnimalCard, {
      props: {
        animalName: "Rex",
        animalType: "Chien",
        animalLikes: 5
      }
    });

    expect(container.querySelector(".animal-card-container")).not.toBeNull();
    expect(container.querySelector(".animal-card-settings-button")).not.toBeNull();
    expect(container.querySelector(".animal-card-container-infos")).not.toBeNull();
    expect(container.querySelector(".animal-card-container-infos-avatar")).not.toBeNull();
    expect(container.querySelector(".animal-card-container-infos-container-name")).not.toBeNull();
    expect(container.querySelector(".animal-card-container-infos-container-infos")).not.toBeNull();
    expect(container.querySelector(".animal-card-container-like-button-container")).not.toBeNull();
  });

  it("Should display the correct animal name", () => {
    const animalName = "Fluffy";
    const { container } = render(AnimalCard, {
      props: {
        animalName,
        animalType: "Chat",
        animalLikes: 10
      }
    });

    const nameElement = container.querySelector(".animal-card-container-infos-container-name");
    expect(nameElement).not.toBeNull();
    expect(nameElement?.textContent).toBe(animalName);
  });

  it("Should display the correct animal info with all properties", () => {
    const { container } = render(AnimalCard, {
      props: {
        animalName: "Max",
        animalType: "Chien",
        animalRace: "Labrador",
        animalAge: 3,
        animalLikes: 15
      }
    });

    const infoElement = container.querySelector(".animal-card-container-infos-container-infos");
    expect(infoElement).not.toBeNull();
    expect(infoElement?.textContent).toBe("Chien, Labrador, 3 ans");
  });

  it("Should display the correct animal info with partial properties", () => {
    const { container } = render(AnimalCard, {
      props: {
        animalName: "Kitty",
        animalType: "Chat",
        animalLikes: 8
      }
    });

    const infoElement = container.querySelector(".animal-card-container-infos-container-infos");
    expect(infoElement).not.toBeNull();
    expect(infoElement?.textContent).toBe("Chat");
  });

  it("Should display the animal description when provided", () => {
    const description = "A very friendly animal";
    const { container } = render(AnimalCard, {
      props: {
        animalName: "Buddy",
        animalType: "Chien",
        animalDescription: description,
        animalLikes: 20
      }
    });

    const descriptionElement = container.querySelector(".animal-card-container-infos-container-description");
    expect(descriptionElement).not.toBeNull();
    expect(descriptionElement?.textContent).toBe(description);
  });

  it("Should use default image when animalPicture is not provided", () => {
    const { container } = render(AnimalCard, {
      props: {
        animalName: "Rex",
        animalType: "Chien",
        animalLikes: 5
      }
    });

    const avatarElement = container.querySelector(".animal-card-container-infos-avatar") as HTMLImageElement;
    expect(avatarElement).not.toBeNull();
    expect(avatarElement.src).toContain("/paws.png");
  });

  it("Should use provided image when animalPicture is provided", () => {
    const imagePath = "/test-image.jpg";
    const { container } = render(AnimalCard, {
      props: {
        animalName: "Rex",
        animalType: "Chien",
        animalPicture: imagePath,
        animalLikes: 5
      }
    });

    const avatarElement = container.querySelector(".animal-card-container-infos-avatar") as HTMLImageElement;
    expect(avatarElement).not.toBeNull();
    expect(avatarElement.src).toContain(imagePath);
  });

  it("Should call onSettingsButtonClick when settings button is clicked", async () => {
    // Save original console.log
    const originalConsoleLog = console.log;

    // Create a variable to track if the function was called with the right message
    let settingsButtonClicked = false;

    // Override console.log to check for the expected message
    console.log = (message: string) => {
      if (message === "Settings button clicked!") {
        settingsButtonClicked = true;
      }
    };

    const { container } = render(AnimalCard, {
      props: {
        animalName: "Rex",
        animalType: "Chien",
        animalLikes: 5
      }
    });

    const settingsButton = container.querySelector(".animal-card-settings-button") as HTMLElement;
    expect(settingsButton).not.toBeNull();

    await fireEvent.click(settingsButton);

    // Restore original console.log
    console.log = originalConsoleLog;

    // Check if the function was called with the right message
    expect(settingsButtonClicked).toBe(true);
  });

  it("Should call onLikeButtonClick when like button is clicked", async () => {
    // Save original console.log
    const originalConsoleLog = console.log;

    // Create a variable to track if the function was called with the right message
    let likeButtonClicked = false;

    // Override console.log to check for the expected message
    console.log = (message: string) => {
      if (message === "Like button clicked!") {
        likeButtonClicked = true;
      }
    };

    const { container } = render(AnimalCard, {
      props: {
        animalName: "Rex",
        animalType: "Chien",
        animalLikes: 5
      }
    });

    const likeButton = container.querySelector(".like-button") as HTMLElement;
    expect(likeButton).not.toBeNull();

    await fireEvent.click(likeButton);

    // Restore original console.log
    console.log = originalConsoleLog;

    // Check if the function was called with the right message
    expect(likeButtonClicked).toBe(true);
  });
});
