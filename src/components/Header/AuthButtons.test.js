import { render, screen } from "@testing-library/react"
import AuthButtons from "./AuthButtons"

test("expect 'Sign Up' and 'Log In' buttons", () => {
  render(<AuthButtons />)
  // sign up button
  const signup = screen.getByRole("link", { name: /sign up/i })
  const login = screen.getByRole("link", { name: /log in/i })

  expect(signup).toBeInTheDocument()
  expect(login).toBeInTheDocument()

  expect(signup).toHaveClass("button")
  expect(login).toHaveClass("button")
})
