import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Render Async Component", () => {
  test("render post if succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Posts" }],
    });
    // Arrange
    render(<Async />);

    // Act
    // ... nothing

    // Assert
    const listItemElement = await screen.findAllByRole("listitem", { exact: false });
    expect(listItemElement).not.toHaveLength(0);
  });
});
