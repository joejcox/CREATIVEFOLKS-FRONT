import { render, screen } from "@testing-library/react"
import FooterLink from "./FooterLink"

test("expect anchor tag", () => {
  render(<FooterLink />)
  const link = screen.getByTestId("footer-link")
  expect(link).toBeInTheDocument()
  expect(link).toHaveClass("footer-link")
})
