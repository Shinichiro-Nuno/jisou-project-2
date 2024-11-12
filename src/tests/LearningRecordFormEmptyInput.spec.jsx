import LearningRecord from "../LearningRecord";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Learning Record Form Test", () => {
  it("入力をしないで登録を押すとエラーが表示される", async () => {
    render(<LearningRecord />);

    const initialRecordCount = await waitFor(() => screen.getAllByTestId("record").length);

    const saveButton = screen.getByTestId("save-button");
    await userEvent.click(saveButton);

    const errorMessage = await waitFor(() => screen.getByTestId("error-message"));

    expect(errorMessage).toHaveTextContent('入力されていない項目があります');
  });
});
