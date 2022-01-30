import { render, screen } from "@testing-library/react"
import Logo from "./Logo"

test("a link is rendered with href to home page", () => {
  render(<Logo />)
  const link = screen.getByRole("link")

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute("href", "/")
})

test("component contains an image with alt text 'Front Logo'", () => {
  render(<Logo />)
  const image = screen.getByAltText(/front logo/i)
  expect(image).toBeInTheDocument()
})

test("link contains and renders the small logo image if footer prop does not exist", () => {
  render(<Logo />)
  const link = screen.getByRole("link")
  const logo = screen.getByTestId("logo")
  expect(logo).toBeInTheDocument()
  expect(logo).toBeVisible()
  expect(link).toContainElement(logo)
})

test("link contains a large logo image which renders if footer prop is passed", () => {
  render(<Logo footer />)
  const link = screen.getByRole("link")
  const logo = screen.getByTestId("logo-large")
  expect(logo).toBeInTheDocument()
  expect(logo).toBeVisible()
  expect(link).toContainElement(logo)
})
