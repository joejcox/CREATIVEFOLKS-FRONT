import logo from "assets/images/FRONT_LOGO.png"
import logoLg from "assets/images/FRONT_LOGO_LARGE.svg"

const Logo = ({ footer }) => (
  <a href="/">
    {footer ? (
      <img src={logoLg} alt="Front Logo" className="w-[200px] lg:w-[437px]" />
    ) : (
      <img src={logo} alt="Front Logo" className="min-w-[177px] w-[177px]" />
    )}
  </a>
)

export default Logo
