import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import SearchBar from "./SearchBar"

test("Search input value can be changed by user", () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  )
  const input = screen.getByPlaceholderText(/search/i)
  userEvent.type(input, "Search term")
  expect(input).toHaveValue("Search term")
})

test("Search icon image is shown", () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  )
  const icon = screen.getByTestId("search-icon")
  expect(icon).toBeInTheDocument()
  expect(icon).toBeVisible()
})
