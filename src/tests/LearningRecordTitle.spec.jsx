import LearningRecord from "../LearningRecord";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

describe("Learning Record Title Test", () => {
  it("タイトルが学習記録一覧であること", () => {
    // testId(title)を指定して取得
    render(<LearningRecord />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("学習記録一覧");
  });
});