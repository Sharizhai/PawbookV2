import { test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import { timeElapsed } from "../../../src/utils/dateUtils";
import TopContainerInfos from "$components/post/TopContainerInfos.svelte";

test("Should render with the good firstName & lastName", () => {
    const { getByText } = render(TopContainerInfos, { props: { firstName: "User", lastName: "Name", postCreationDate:new Date("2024-10-14T17:33:11.964Z"), profilePicture:"/paws.png" } });

    expect(getByText("User Name")).toBeInTheDocument();
});

test("Should render with the good profile picture", () => {
    const { getByAltText  } = render(TopContainerInfos, { props: { firstName: "User", lastName: "Name", postCreationDate:new Date("2024-10-14T17:33:11.964Z"), profilePicture:"/paws.png" } });

    const imgElement = getByAltText("User Avatar");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute("src")).toBe("/paws.png");
});

test("Should use default profile picture when none provided", () => {
    const { getByAltText } = render(TopContainerInfos, { props: { firstName: "User", lastName: "Name", postCreationDate: new Date("2024-10-14T17:33:11.964Z")} });

    const imgElement = getByAltText("User Avatar");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute("src")).toBe("/paws.png");
});

test("Should render with the good date", async () => {
    const testDate = new Date("2024-10-14T17:33:11.964Z");
    const expectedFormattedDate = timeElapsed(testDate);
    const { getByText } = render(TopContainerInfos, { props: { firstName: "User", lastName: "Name", postCreationDate:testDate, profilePicture:"/paws.png" } });

    expect(getByText(expectedFormattedDate)).toBeInTheDocument();
});