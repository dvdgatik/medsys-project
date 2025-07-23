import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AppointmentCard } from "../AppointmentCard";
import { AppointmentStatus } from "../../types/appointment";

describe("AppointmentCard", () => {
  const mockProps = {
    date: "2025-08-01",
    doctor: "Dr. House",
    notes: "Consulta general",
    viewMode: "list" as const,
    status: "Pending" as AppointmentStatus,
    onViewDetail: jest.fn(),
    index: 0,
  };

  it("correctly renders appointment data", () => {
    const { getByText } = render(<AppointmentCard {...mockProps} />);
    expect(getByText(/Doctor: Dr. House/i)).toBeTruthy();
    expect(getByText(/Note: Consulta general/i)).toBeTruthy();
    expect(getByText("Pending")).toBeTruthy();
    expect(getByText("View")).toBeTruthy();
  });

  it("executes on View Detail when the 'View' button is pressed", () => {
    const { getByText } = render(<AppointmentCard {...mockProps} />);
    const viewButton = getByText("View");
    fireEvent.press(viewButton);
    expect(mockProps.onViewDetail).toHaveBeenCalledTimes(1);
  });

  it("renders correctly in grid mode", () => {
    const { getByText } = render(
      <AppointmentCard {...mockProps} viewMode="grid" />
    );
    expect(getByText("Doctor: Dr. House")).toBeTruthy();
    expect(getByText("Pending")).toBeTruthy();
  });
});
