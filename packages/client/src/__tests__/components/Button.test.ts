import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import Button from "$components/Button.svelte";

test("Should render with the good label", () => {
  const { getByText } = render(Button, { props: { label: "Clique moi", onClick: () => {} } });
  expect(getByText("Clique moi")).toBeInTheDocument();
});

test("onClick should run properly", async () => {
  const handleClick = vi.fn();
  const { getByText } = render(Button, { props: { label: "Clique moi", onClick: handleClick } });
  await fireEvent.click(getByText("Clique moi"));
  expect(handleClick).toHaveBeenCalled();
});

test("Should be desactivated when isDisabled is true", () => {
  const { getByRole } = render(Button, {
    props: { label: "Bouton", isDisabled: true, onClick: () => {} },
  });
  expect(getByRole("button")).toBeDisabled();
});