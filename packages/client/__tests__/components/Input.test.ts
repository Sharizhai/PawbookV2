import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import Input from "$components/Input.svelte";

test("Should render with the good label", () => {
    const { getByText } = render(Input, { props: { label: "Email", name: "email", type: "email" } });
    expect(getByText("Email")).toBeInTheDocument();
});

test("Should render with the good placeholder", () => {
    const { getByPlaceholderText } = render(Input, { props: { name: "email", type: "email", placeholder:"Your email" } });
    expect(getByPlaceholderText("Your email")).toBeInTheDocument();
});

test("Should render with the good type", () => {
    const { getByLabelText } = render(Input, { props: { label: "Email", name: "email", type: "email" } });
    const input = getByLabelText("Email") as HTMLInputElement;
    expect(input).toHaveAttribute("type", "email");
});

test("Should render with the good id", () => {
    const { getByLabelText } = render(Input, { props: { label: "Email", name: "email", type: "email" } });
    const input = getByLabelText("Email") as HTMLInputElement;
    expect(input).toHaveAttribute("id", "email");
});

test("Should show and hide the password", async () => {
    const { getByLabelText, getByRole } = render(Input, { props: { label: "Email", name: "password", type: "password" } });
    const input = getByLabelText("Email") as HTMLInputElement;
    expect(input).toHaveAttribute("type", "password");

    const button = getByRole("button", { name: /toggle password visibility/i });
    await fireEvent.click(button);
    expect(input).toHaveAttribute("type", "text");

    await fireEvent.click(button);
    expect(input).toHaveAttribute("type", "password");
});