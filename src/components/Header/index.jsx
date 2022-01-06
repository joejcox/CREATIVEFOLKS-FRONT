import Logo from "components/Header/Logo"
import SearchBar from "components/Header/SearchBar"
import AuthButtons from "components/Header/AuthButtons"

const Header = () => (
  <header className="bg-white h-header px-container flex justify-between items-center absolute top-0 left-0 right-0">
    <Logo />
    <SearchBar />
    <AuthButtons />
  </header>
)

export default Header
