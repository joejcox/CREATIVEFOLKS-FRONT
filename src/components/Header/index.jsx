import Logo from "components/Header/Logo"
import SearchBar from "components/Header/SearchBar"
import AuthButtons from "components/Header/AuthButtons"

const Header = () => (
  <header className="bg-white py-2 lg:py-0 lg:h-[124px] 2xl:h-[248px] flex flex-col lg:flex-row justify-between items-center">
    <div className="container flex justify-between items-center">
      <Logo />
      <SearchBar />
      <AuthButtons />
    </div>
  </header>
)

export default Header
