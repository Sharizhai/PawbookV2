import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import BackButton from "$components/BackButton.svelte";

test("Should render with the good label and the icon", () => {
    const { getByText } = render(BackButton, { props: { label: "Click", onClick: () => {} } });
    expect(getByText("Click")).toBeInTheDocument();
    expect(getByText("keyboard_backspace")).toBeInTheDocument();
});

test("onClick should run properly", async () => {
    const handleClick = vi.fn();
    const { getByText } = render(BackButton, { props: { label: "Click", onClick: handleClick } });
    await fireEvent.click(getByText("Click"));
    expect(handleClick).toHaveBeenCalled();
});