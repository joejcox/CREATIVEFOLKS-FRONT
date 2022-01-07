import Logo from "components/Header/Logo"
import SearchBar from "components/Header/SearchBar"
import AuthButtons from "components/Header/AuthButtons"

const Header = () => (
  <header className="bg-white py-6 lg:py-0 lg:h-[124px] 2xl:h-[248px] flex items-center">
    <div className="container flex justify-start xl:justify-between items-center flex-col lg:flex-row ">
      <Logo />
      <SearchBar />
      <AuthButtons />
    </div>
  </header>
)

export default Header
