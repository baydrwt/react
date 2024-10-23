import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test('render "Lorem ipsum" text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const loremElement = screen.getByText("Lorem ipsum dolor sit amet", { exact: false });
    expect(loremElement).toBeInTheDocument();
  });

  test('Render "second Lorem ipsum" text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const secondLoremElement = screen.getByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, obcaecati?", { exact: false });
    expect(secondLoremElement).toBeInTheDocument();
  });

  test('Render "changed" text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.getByText("Changed!", { exact: false });
    expect(changedElement).toBeInTheDocument();
  });

  test('does not Render "second lorem ipsum" text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.queryByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, obcaecati?", { exact: false });
    expect(changedElement).toBeNull();
  });
});
