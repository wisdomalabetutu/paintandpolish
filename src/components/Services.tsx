import { Car, Paintbrush, Square, Hammer, Truck, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Car,
    title: "Collision Repair",
    description: "Frame straightening with CHIEF & Genesis Laser systems for precision alignment.",
  },
  {
    icon: Paintbrush,
    title: "Paint Refinishing",
    description: "Using Sikkens waterborne premium paint for a factory-quality finish.",
  },
  {
    icon: Square,
    title: "Glass Replacement",
    description: "Complete windshield and window replacement with OEM-quality glass.",
  },
  {
    icon: Hammer,
    title: "Paintless Dent Repair",
    description: "Cost-effective solutions for minor dings and dents without repainting.",
  },
  {
    icon: Truck,
    title: "Towing Assistance",
    description: "We can help coordinate towing to get your vehicle to our shop safely.",
  },
  {
    icon: FileText,
    title: "Insurance Handling",
    description: "We work directly with ALL insurance providers to streamline your claim.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Complete Auto Body Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From minor dents to major collision repair, we have the expertise and
            equipment to restore your vehicle to pre-accident condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-background animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;