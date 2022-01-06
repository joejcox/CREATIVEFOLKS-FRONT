import FooterLink from "components/Footer/FooterLink"
import Logo from "components/Header/Logo"
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"

const Footer = () => (
  <section className="h-[638px]">
    <div className="container flex items-center justify-between h-full">
      <div className="links">
        <FooterLink href="/">Get Started</FooterLink>
        <FooterLink href="/">Explore</FooterLink>
        <FooterLink href="/">Terms and Conditions</FooterLink>
        <FooterLink href="/">FAQs</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
      </div>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark hover:text-black ml-auto"
      >
        <FaInstagramSquare className=" w-[60px] h-[45px]" />
      </a>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark hover:text-black mr-auto"
      >
        <FaFacebookSquare className=" w-[46px] h-[45px]" />
      </a>

      <Logo footer />
    </div>
  </section>
)

export default Footer
