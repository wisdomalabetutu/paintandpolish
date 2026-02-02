const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground border-t border-background/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-background">
              Prineville Body & Paint, Inc.
            </span>
          </div>

          <p className="text-background/60 text-sm text-center">
            © {currentYear} Prineville Body & Paint, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-background/60 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-background/60 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-background/60 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;