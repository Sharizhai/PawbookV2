import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import BackButton from "$components/BackButton.svelte";

test("Should render with the good label", () => {
    const { getByText } = render(BackButton, { props: { label: "Click", onClick: () => {} } });
    expect(getByText("Click")).toBeInTheDocument();
});

test("onClick should run properly", async () => {
    const handleClick = vi.fn();
    const { getByText } = render(BackButton, { props: { label: "Click", onClick: handleClick } });
    await fireEvent.click(getByText("Click"));
    expect(handleClick).toHaveBeenCalled();
});