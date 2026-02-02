import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-shop.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional auto body shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Family-Owned Since 1993
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            Great Collision Repair is{" "}
            <span className="text-primary">No Accident.</span>
          </h1>

          <p className="text-lg md:text-xl text-background/80 mb-8 animate-fade-up animation-delay-200 text-balance">
            Serving Central Oregon with over 50 years of combined experience. We
            handle the insurance, so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button size="lg" asChild className="text-base">
              <a href="#contact">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20 hover:text-background text-base"
            >
              <a href="tel:541-447-8994">
                <Phone className="w-4 h-4 mr-2" />
                Call Us: 541-447-8994
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;