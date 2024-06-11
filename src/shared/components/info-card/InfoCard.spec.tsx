import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InfoCard from ".";

describe("InfoCard", () => {
  it("should have InfoCard as a title", () => {
    // Arrange
    render(<InfoCard />);

    // Assert
    const title = screen.getByRole("heading", { name: "InfoCard" });
    expect(title).toBeInTheDocument();
  });
});
