const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Your Name. Built with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;