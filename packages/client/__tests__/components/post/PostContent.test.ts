import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import PostContent from "$components/post/PostContent.svelte";

test("Should render with the good textContent", () => {
    const { getByText } = render(PostContent, { props: { textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imageContent:"/paws.png" } });

    expect(getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument();
});

test("Should render with the correct images", () => {
    const imageUrls = ["/image1.jpg", "/image2.jpg"];
    const { getAllByRole } = render(PostContent, { 
        props: { 
            imageContent: imageUrls 
        } 
    });
    const images = getAllByRole("img");

    expect(images.length).toBe(2);
    expect(images[0].getAttribute("src")).toBe("/image1.jpg");
    expect(images[1].getAttribute("src")).toBe("/image2.jpg");
});

test("Should show overlay for more than 3 images", () => {
    const imageUrls = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg"];
    const { getByText } = render(PostContent, { 
        props: { 
            imageContent: imageUrls 
        } 
    });

    expect(getByText("+2")).toBeInTheDocument();
});

test("Should trigger onImageClick when image is clicked", async () => {
    const consoleSpy = vi.spyOn(console, "log");
    
    const imageUrls = ["/image1.jpg"];
    const { getByRole } = render(PostContent, { 
        props: { 
            imageContent: imageUrls 
        } 
    });

    const imageButton = getByRole("button");
    await fireEvent.click(imageButton);
    
    expect(consoleSpy).toHaveBeenCalledWith("Image 0 cliquée");
    
    consoleSpy.mockRestore();
});