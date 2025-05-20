import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import PostCard from "$components/post/PostCard.svelte";

const originalConsoleLog = console.log;

describe("PostCard Component", () => {
  beforeEach(() => {
    console.log = vi.fn();
  });
  
  afterEach(() => {
    console.log = originalConsoleLog;
    vi.clearAllMocks();
  });

  it("Should render the component with all components", () => {
    const { container } = render(PostCard);
    
    expect(container.querySelector(".postcard-main-container")).not.toBeNull();
    expect(container.querySelector(".postcard-settings-button")).not.toBeNull();
    expect(container.querySelector(".postcard-user-infos-container")).not.toBeNull();
    expect(container.querySelector(".postcard-content")).not.toBeNull();
    expect(container.querySelector(".postcard-buttons-container")).not.toBeNull();
  });

  it("Should display iuser infos", () => {
    const { container } = render(PostCard);
    
    const userAvatar = container.querySelector(".postcard-user-avatar") as HTMLImageElement;
    expect(userAvatar).not.toBeNull();
    expect(userAvatar.hasAttribute("src")).toBe(true);
    
    const userName = container.querySelector(".postcard-user-name");
    expect(userName).not.toBeNull();
    
    const postDate = container.querySelector(".postcard-user-post-date");
    expect(postDate).not.toBeNull();
  });

  it("Should render correctly post content", () => {
    const { container } = render(PostCard);
    
    const hasTextContent = container.querySelector(".postcard-content-text-content") !== null;
    const hasImageContent = container.querySelector(".post-images-grid") !== null;
    
    expect(hasTextContent || hasImageContent).toBe(true);
  });

  it("devrait appeler onSettingsButtonClick lors du clic sur le bouton de paramètres", async () => {
    const { container } = render(PostCard);
    
    const settingsButton = container.querySelector(".postcard-settings-button") as HTMLElement;
    await fireEvent.click(settingsButton);
    
    expect(console.log).toHaveBeenCalledWith("Settings button clicked!");
  });

  it("Should toggle like correctly and call onLikeButtonClick", async () => {
    const { container } = render(PostCard);
    
    const initialLikeButton = container.querySelector(".like-button-icon") as HTMLElement;
    const initialIsLiked = initialLikeButton.classList.contains("liked");
    
    await fireEvent.click(container.querySelector(".like-button") as HTMLElement);
    
    const updatedLikeButton = container.querySelector(".like-button-icon") as HTMLElement;
    expect(updatedLikeButton.classList.contains("liked")).toBe(!initialIsLiked);
    expect(console.log).toHaveBeenCalledWith("Like button clicked!");
  });

  it("Should toggle CommentInpu visibility", async () => {
    const { container } = render(PostCard);
    
    const initialCommentInputVisible = container.querySelector(".comment-input-container") !== null;
    
    await fireEvent.click(container.querySelector(".postcard-comment-button") as HTMLElement);
    
    const updatedCommentInputVisible = container.querySelector(".comment-input-container") !== null;
    expect(updatedCommentInputVisible).toBe(!initialCommentInputVisible);
    
    await fireEvent.click(container.querySelector(".postcard-comment-button") as HTMLElement);
    
    const finalCommentInputVisible = container.querySelector(".comment-input-container") !== null;
    expect(finalCommentInputVisible).toBe(initialCommentInputVisible);
  });

  it("Should send the right comment", async () => {
    const { container } = render(PostCard);
    
    if (!container.querySelector(".comment-input-container")) {
      await fireEvent.click(container.querySelector(".postcard-comment-button") as HTMLElement);
    }
    
    const input = container.querySelector(".comment-input") as HTMLInputElement;
    expect(input).not.toBeNull();
    
    const testComment = "Ceci est un commentaire de test";
    await fireEvent.input(input, { target: { value: testComment } });
    
    await fireEvent.click(container.querySelector(".comment-input-container-button") as HTMLElement);
    
    expect(console.log).toHaveBeenCalledWith("Comment text:", testComment);
  });

  it("Should work if comment text is empty", async () => {
    const { container } = render(PostCard);
    
    if (!container.querySelector(".comment-input-container")) {
      await fireEvent.click(container.querySelector(".postcard-comment-button") as HTMLElement);
    }
    
    const input = container.querySelector(".comment-input") as HTMLInputElement;
    await fireEvent.input(input, { target: { value: " " } });
    
    await fireEvent.click(container.querySelector(".comment-input-container-button") as HTMLElement);
    
    expect(console.log).not.toHaveBeenCalledWith("Comment text:", expect.anything());
  });

  it("Should call onImageClick when image is clicked", async () => {
    const { container } = render(PostCard);
    
    const images = container.querySelectorAll(".post-image-content");
    
    if (images.length > 0) {
      await fireEvent.click(images[0] as HTMLElement);
      
      expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Image \d+ cliquée/));
    }
  });
});