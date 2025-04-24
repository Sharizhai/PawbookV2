import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import likeIcon from "$assets/icons/posts/like.svg?raw";
import LikeButton from "$components/post/LikeButton.svelte";

test("Should render with the good number of likes", () => {
    const { getByText } = render(LikeButton, { props: { likeCount: "150", onClick: () => {} } });

    expect(getByText("150")).toBeInTheDocument();
});

test("Should render with the good svg icon", () => {
    const { container } = render(LikeButton, { props: { likeCount: "150", onClick: () => {} } });
    const svgElement = container.querySelector('.like-button-icon svg');

    expect(svgElement).toBeInTheDocument();
});

test("Should toggle like state when clicked", async () => {
    const handleClick = vi.fn();
    const { getByText } = render(LikeButton, { props: { likeCount: "150", onClick: handleClick } });

    const button = getByText("150");
    await fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
});

test("Should not display like count when not provided", () => {
    const { container } = render(LikeButton, { props: { onClick: () => {} } });
    
    const countElement = container.querySelector('.like-button-count');
    expect(countElement).not.toBeInTheDocument();
});

test("Should alternate between filled and outline icons", async () => {
    const handleClick = vi.fn();
    const { container, getByText } = render(LikeButton, { props: { likeCount: "150", onClick: handleClick } });

    const button = getByText("150");
    
    let iconContainer = container.querySelector('.like-button-icon');
    expect(iconContainer).not.toHaveClass('liked');
    
    await fireEvent.click(button);
    
    iconContainer = container.querySelector('.like-button-icon');
    expect(iconContainer).toHaveClass('liked');
    
    await fireEvent.click(button);
    
    iconContainer = container.querySelector('.like-button-icon');
    expect(iconContainer).not.toHaveClass('liked');
});