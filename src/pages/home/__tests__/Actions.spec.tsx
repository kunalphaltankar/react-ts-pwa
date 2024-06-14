import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Actions from "../components/actions";

const component = (
  <BrowserRouter>
    <Actions />
  </BrowserRouter>
);

describe("Actions", () => {
  it("should match the snapshot", () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it("should have more, edit, what's hot, star, Contact Linked buttons", () => {
    render(component);
    ["more", "edit", "what's hot", "star", "Contact Linked"].forEach(
      (button) => {
        expect(
          screen.getByRole("button", { name: button })
        ).toBeInTheDocument();
      }
    );
  });
});
