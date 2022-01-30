const FooterLink = ({ children, href }) => (
  <a href={href} className="footer-link" data-testid="footer-link">
    {children}
  </a>
)

export default FooterLink
