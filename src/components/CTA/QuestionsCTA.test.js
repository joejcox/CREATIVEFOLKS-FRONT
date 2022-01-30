import { render, screen } from "@testing-library/react"
import QuestionsCTA from "./QuestionsCTA"

test("render", () => {
  render(<QuestionsCTA />)
})

test("expect a h2 element to be in the document", () => {
  render(<QuestionsCTA />)
  const h2 = screen.getByRole("heading", { level: 2 })
  expect(h2).toBeInTheDocument()
})

test("expect link with text 'Get In Touch'", () => {
  render(<QuestionsCTA />)
  const link = screen.getByRole("link", { name: /get in touch/i })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute("href", "/")
})
