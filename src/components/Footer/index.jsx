import FooterLink from "components/Footer/FooterLink"
import Logo from "components/Header/Logo"
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"

const Footer = () => (
  <section className="py-12 lg:py-0 h-auto lg:h-[638px]">
    <div className="container flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full">
      <div className="links border-b border-grey--light pb-12 lg:pb-0 lg:border-0">
        <FooterLink href="/">Get Started</FooterLink>
        <FooterLink href="/">Explore</FooterLink>
        <FooterLink href="/">Terms and Conditions</FooterLink>
        <FooterLink href="/">FAQs</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
      </div>
      <div className="flex py-12 lg:py-0">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark hover:text-black lg:mr-[24px]"
        >
          <FaInstagramSquare className="w-[40px] h-[30px] md:w-[50px] md:h-[38px] lg:w-[60px] lg:h-[45px]" />
        </a>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark hover:text-black"
        >
          <FaFacebookSquare className="w-[31px] h-[30px] md:w-[36px] md:h-[37.5px] lg:w-[46px] lg:h-[45px]" />
        </a>
      </div>
      <Logo footer />
    </div>
  </section>
)

export default Footer
