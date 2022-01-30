import { render, screen } from "@testing-library/react"
import Banner from "../Banner"

test("render banner", () => {
  render(<Banner />)
})

test("expect h1 tag", () => {
  render(<Banner />)
  const h1 = screen.getByRole("heading", { level: 1 })
  expect(h1).toBeInTheDocument()
})

test("expect banner to have image element with alt text 'Search header banner'", () => {
  render(<Banner />)
  const image = screen.getByAltText(/search header banner/i)
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src", "banner_img.jpg")
  expect(image).toBeVisible()
})
