export type FooterProps = React.ComponentPropsWithoutRef<'footer'> & {};

const Footer = ({ className, ...footerProps }: FooterProps) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <p>JAPAN</p>
    </footer>
  );
};

export default Footer;
