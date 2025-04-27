import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import CommentInput from "$components/post/CommentInput.svelte";

test("Should render with the good svg icon", () => {
    const { container } = render(CommentInput, { props: { isVisible: true, onClick: () => {} } });
    const svgElement = container.querySelector('.comment-input-container-button-icon svg');

    expect(svgElement).toBeInTheDocument();
});

test("Should render an input field", () => {
    const { getByRole } = render(CommentInput, { props: { isVisible: true, onClick: () => {} } });
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
});

test("Should render a clickable send button", () => {
    const { getByRole } = render(CommentInput, { props: { isVisible: true, onClick: () => {} } });
    const button = getByRole('button', { name: /send a comment/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
});

test("Should call onClick with comment text when clicking send", async () => {
    const mockOnClick = vi.fn();
    const { getByRole } = render(CommentInput, { props: { isVisible: true, onClick: mockOnClick } });

    const input = getByRole('textbox');
    const button = getByRole('button', { name: /send a comment/i });

    await fireEvent.input(input, { target: { value: 'Hello world!' } });
    await fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith('Hello world!');
});

test("Should hide the input after sending a comment", async () => {
    const mockOnClick = vi.fn();
    const { getByRole, queryByRole } = render(CommentInput, { props: { isVisible: true, onClick: mockOnClick } });

    const input = getByRole('textbox');
    const button = getByRole('button', { name: /send a comment/i });

    await fireEvent.input(input, { target: { value: 'Another comment' } });
    await fireEvent.click(button);

    expect(queryByRole('textbox')).not.toBeInTheDocument();
});

test("Should not call onClick if input is empty", async () => {
    const mockOnClick = vi.fn();
    const { getByRole } = render(CommentInput, { props: { isVisible: true, onClick: mockOnClick } });

    const button = getByRole('button', { name: /send a comment/i });

    await fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
});

test("Should not render anything when isVisible is false", () => {
    const { queryByRole } = render(CommentInput, { props: { isVisible: false, onClick: () => {} } });
    const input = queryByRole('textbox');
    expect(input).not.toBeInTheDocument();
});