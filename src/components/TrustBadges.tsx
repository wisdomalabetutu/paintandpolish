import { Shield, Award, FileCheck, Users } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "On all workmanship",
  },
  {
    icon: Award,
    title: "I-CAR Gold Class",
    description: "Trained technicians",
  },
  {
    icon: FileCheck,
    title: "All Insurance",
    description: "Accepted & handled",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Since 1993",
  },
];

const TrustBadges = () => {
  return (
    <section className="relative z-10 -mt-12 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-background rounded-2xl shadow-elevated p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {badges.map((badge, index) => (
              <div
                key={badge.title}
                className="flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;