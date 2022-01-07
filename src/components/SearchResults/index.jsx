import { useState, useEffect } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import axios from "axios"

const SearchResults = ({ query }) => {
  const [images, setImages] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getImages = async () => {
      if (!query) return

      const api = `https://api.unsplash.com/search/photos/?page=1&per_page=25&order_by=relevent&query=${query}&client_id=Lqbsqom97TAc1uKvT_AUoVQLcIauXsPzpW4e1xfS2Cg`

      try {
        const response = await axios.get(api)
        setImages(response)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }

    getImages()
  }, [query])

  if (error) return <h2 className="text-3xl">Some error</h2>

  if (!images) return null

  if (images.data.results.length === 0)
    return (
      <div className="container lg:mb-[269.5px] bg-grey--light py-12 lg:py-[134.75px]">
        <h2 className="font-primary text-3xl lg:text-5xl font-light lg:font-extralight text-grey text-center">
          No results
        </h2>
      </div>
    )

  return (
    <div className="container mb-[269.5px]">
      <ResponsiveMasonry>
        <Masonry gutter="46px">
          {images.data.results.map((image) => (
            <img src={image.urls.small} alt={image.user.bio} key={image.id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default SearchResults
