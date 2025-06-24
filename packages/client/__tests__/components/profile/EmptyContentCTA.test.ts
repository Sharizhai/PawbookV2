import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import EmptyContentCTA from "$components/profile/EmptyContentCTA.svelte";

describe("EmptyContentCTA Component", () => {
  it("Should render the component with all elements", () => {
    const onClick = () => {};
    const { container } = render(EmptyContentCTA, {
      props: {
        onClick,
        label: "Test Label",
        incentive: "Test Incentive"
      }
    });

    expect(container.querySelector("#empty-content-cta")).not.toBeNull();
    expect(container.querySelector(".empty-content-cta-incentive")).not.toBeNull();
    expect(container.querySelector("button")).not.toBeNull();
  });

  it("Should display the correct incentive text", () => {
    const onClick = () => {};
    const incentiveText = "This is a test incentive";
    const { container } = render(EmptyContentCTA, {
      props: {
        onClick,
        label: "Test Label",
        incentive: incentiveText
      }
    });

    const incentiveElement = container.querySelector(".empty-content-cta-incentive");
    expect(incentiveElement).not.toBeNull();
    expect(incentiveElement?.textContent).toBe(incentiveText);
  });

  it("Should display the correct button label", () => {
    const onClick = () => {};
    const buttonLabel = "Click Me";
    const { container } = render(EmptyContentCTA, {
      props: {
        onClick,
        label: buttonLabel,
        incentive: "Test Incentive"
      }
    });

    const buttonElement = container.querySelector("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement?.textContent).toBe(buttonLabel);
  });

  it("Should call onClick when button is clicked", async () => {
    let buttonClicked = false;
    const onClick = () => {
      buttonClicked = true;
    };

    const { container } = render(EmptyContentCTA, {
      props: {
        onClick,
        label: "Test Label",
        incentive: "Test Incentive"
      }
    });

    const buttonElement = container.querySelector("button");
    expect(buttonElement).not.toBeNull();

    await fireEvent.click(buttonElement as HTMLElement);
    expect(buttonClicked).toBe(true);
  });
});
