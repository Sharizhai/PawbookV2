import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import AnimalCard from "$components/profile/AnimalCard.svelte";
import { render, fireEvent } from "@testing-library/svelte";

const originalConsoleLog = console.log;

describe("AnimalCard Component", () => {
    beforeEach(() => {
        console.log = vi.fn();
    });

    afterEach(() => {
        console.log = originalConsoleLog;
        vi.clearAllMocks();
    });

    it("Should display animal infos", () => {
        const { container } = render(AnimalCard);

        const animalPicture = container.querySelector(".animal-card-container-infos-avatar") as HTMLImageElement;
        expect(animalPicture).not.toBeNull();
        expect(animalPicture.hasAttribute("src")).toBe(true);

        const animalName = container.querySelector(".animal-card-container-infos-container-name");
        expect(animalName).not.toBeNull();

        const animalInfos = container.querySelector(".animal-card-container-infos-container-infos");
        expect(animalInfos).not.toBeNull();
    });

    it("should call onSettingsButtonClick when click on Settings button", async () => {
        const { container } = render(AnimalCard);

        const settingsButton = container.querySelector(".animal-card-settings-button") as HTMLElement;
        await fireEvent.click(settingsButton);

        expect(console.log).toHaveBeenCalledWith("Settings button clicked!");
    });

    it("Should toggle like correctly and call onLikeButtonClick", async () => {
        const { container } = render(AnimalCard);

        const initialLikeButton = container.querySelector(".like-button-icon") as HTMLElement;
        const initialIsLiked = initialLikeButton.classList.contains("liked");

        await fireEvent.click(container.querySelector(".like-button") as HTMLElement);

        const updatedLikeButton = container.querySelector(".like-button-icon") as HTMLElement;
        expect(updatedLikeButton.classList.contains("liked")).toBe(!initialIsLiked);
        expect(console.log).toHaveBeenCalledWith("Like button clicked!");
    });
});