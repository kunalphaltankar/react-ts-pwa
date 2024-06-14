import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Name from "../components/name";

import candidateDetails from "./__mocks__/candidateDetails.json";

const element = (
  <Name
    name={candidateDetails.name}
    country={candidateDetails.country}
    designation={candidateDetails.designation}
    profilePhotoUri={candidateDetails.profilePhotoUri}
    state={candidateDetails.state}
  />
);

describe("Name", () => {
  it("should match the snapshot", () => {
    const { container } = render(element);

    expect(container).toMatchSnapshot();
  });

  it("should have name as header", () => {
    render(element);
    const nameHeader = screen.getByRole("heading", {
      name: candidateDetails.name,
    });

    expect(nameHeader).toBeInTheDocument();
  });

  it("should contain country, state, designation, profile photo.", () => {
    render(element);
    [
      candidateDetails.country,
      candidateDetails.state,
      candidateDetails.state,
    ].forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
    const profileImage = screen.getByAltText("Profile Image");
    expect(profileImage).toBeInTheDocument();
  });

  it("should contain Facebook, Twitter, LinkedIn, GitHub buttons", () => {
    render(element);
    [
      "Facebook profile",
      "Twitter profile",
      "LinkedIn profile",
      "GitHub profile",
    ].forEach((button) => {
      expect(screen.getByRole("button", { name: button })).toBeInTheDocument();
    });
  });
});
