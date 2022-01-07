import bannerImg from "assets/images/banner_img.jpg"

const Banner = () => (
  <div className="h-[415px] lg:h-[827px] w-full relative flex items-center justify-center">
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black">
      <img
        src={bannerImg}
        alt="Search header banner"
        className="w-full h-full opacity-50 object-cover"
      />
    </div>
    <h1 className="text-white font-primary uppercase z-50 inline-block w-[1215px] title">
      DISCOVER YOUR NEW
      <br /> FAVOURITE ARTIST
    </h1>
  </div>
)

export default Banner
