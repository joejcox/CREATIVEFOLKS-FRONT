import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const GridSkeleton = () => (
  <main className="container mb-[269.5px]" role="main">
    <ResponsiveMasonry>
      <Masonry gutter="46px">
        <div className="w-full h-[500px] bg-grey--light"></div>
        <div className="w-full h-[200px] bg-grey--light"></div>
        <div className="w-full h-[300px] bg-grey--light"></div>
        <div className="w-full h-[500px] bg-grey--light"></div>
        <div className="w-full h-[700px] bg-grey--light"></div>
        <div className="w-full h-[500px] bg-grey--light"></div>
        <div className="w-full h-[500px] bg-grey--light"></div>
        <div className="w-full h-[350px] bg-grey--light"></div>
        <div className="w-full h-[500px] bg-grey--light"></div>
        <div className="w-full h-[400px] bg-grey--light"></div>
        <div className="w-full h-[350px] bg-grey--light"></div>
      </Masonry>
    </ResponsiveMasonry>
  </main>
)

export default GridSkeleton
