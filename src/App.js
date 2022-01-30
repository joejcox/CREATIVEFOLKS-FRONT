import Banner from "components/Banner"
import QuestionsCTA from "components/CTA/QuestionsCTA"
import Footer from "components/Footer"
import Header from "components/Header"
import SearchResults from "components/SearchResults"
import { Routes, Route } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import { Helmet } from "react-helmet-async"

const App = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query")
  const resultsRef = useRef(null)

  useEffect(() => {
    if (!query) return null

    if (resultsRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: resultsRef.current.offsetTop,
      })
    }
  }, [query])

  return (
    <>
      <Helmet>
        <title>
          {query === null
            ? "Beautiful Photography | Front"
            : `${query} images | Front`}
        </title>
      </Helmet>
      <Header />
      <Banner />
      <section ref={resultsRef}>
        <div className="container">
          <h2 className="py-12 lg:pt-[136px] lg:pb-[126px] title">
            <span className="block lg:inline-block lg:mr-4">
              Search results:{" "}
            </span>
            {query ? query : "No search terms provided"}
          </h2>
        </div>
      </section>
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
