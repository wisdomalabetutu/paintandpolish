import { Check } from "lucide-react";

const features = [
  "High-quality repairs using premium materials",
  "Transparent pricing with no hidden fees",
  "Regular communication via phone or email",
  "We treat your vehicle as if it were our own",
  "Hassle-free insurance claim handling",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
              <div className="absolute inset-4 bg-gradient-to-br from-primary to-yellow-600 rounded-xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <span className="text-7xl font-bold">50+</span>
                  <p className="text-xl font-medium mt-2">Years Combined Experience</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Our Mission: To Keep Your Car on the Road
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We strive to make the repair process hassle-free. Our team provides
              high-quality repairs, transparent pricing, and regular communication via
              phone or email. We treat your vehicle as if it were our own.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;