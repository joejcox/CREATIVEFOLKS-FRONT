import Banner from "components/Banner"
import QuestionsCTA from "components/CTA/QuestionsCTA"
import Footer from "components/Footer"
import Header from "components/Header"
import SearchResults from "components/SearchResults"
import { Routes, Route, Outlet } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
const App = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query")

  return (
    <>
      <Header />
      <Banner />
      <section className="">
        <div className="container">
          <h2 className="pt-[136px] pb-[126px] title">
            Search results: {query ? query : "No search terms provided"}
          </h2>
        </div>
      </section>
      <Outlet />
      <Routes>
        <Route path="/" element={<SearchResults query={query} />} />
      </Routes>

      <QuestionsCTA />
      <Footer />
    </>
  )
}

export default App

// 1720px
