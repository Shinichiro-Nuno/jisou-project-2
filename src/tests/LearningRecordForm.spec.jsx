import LearningRecord from "../LearningRecord";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Learning Record Form Test", () => {
  it("フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている（数が1つ増えていることをテストする）", async () => {
    render(<LearningRecord />);

    const initialRecordCount = await waitFor(() => screen.getAllByTestId("record").length);

    const titleInput = screen.getByTestId("title-input");
    const timeInput = screen.getByTestId("time-input");
    const saveButton = screen.getByTestId("save-button");

    await userEvent.type(titleInput, "React");
    await userEvent.type(timeInput, "10");
    await userEvent.click(saveButton);

    await waitFor(
      () => {
        const newRecordCount = screen.getAllByTestId("record").length;
        expect(newRecordCount).toBe(initialRecordCount + 1);
      },
    );

  });
});
