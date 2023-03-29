import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App";

test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");
  const codeCount = await screen.queryByText(/The count is now:/);

  // Pre Expectations
  expect(buttonCount.innerHTML).toBe("count is 0");
  // Instead of:
  // expect(codeCount).toBe(null)
  expect(codeCount).not.toBeInTheDocument();

  // Init
  await user.click(buttonCount);
  await user.click(buttonCount);

  // Post Expectations
  expect(buttonCount.innerHTML).toBe("count is 2");
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});