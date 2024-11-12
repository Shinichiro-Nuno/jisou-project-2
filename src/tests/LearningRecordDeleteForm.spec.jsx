import LearningRecord from "../LearningRecord";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Learning Record Form Test", () => {
  it("削除ボタンを押すと学習記録が削除される（数が1つ減っていることをテストする）", async () => {
    render(<LearningRecord />);

    const initialRecordCount = await waitFor(() => screen.getAllByTestId("record").length);

    const deleteButtons = screen.getAllByText("削除");
    const lastDeleteButton = deleteButtons[deleteButtons.length - 1];
    await userEvent.click(lastDeleteButton);

    await waitFor(
      () => {
        const newRecordCount = screen.getAllByTestId("record").length;
        expect(newRecordCount).toBe(initialRecordCount - 1);
      },
    );

  });
});
