import { Clock, Shield, Award, Wrench } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { FeatureCard } from "@/components/layout/feature-card";

const features = [
  {
    icon: Clock,
    title: "Same-Day Repairs",
    description: "Most repairs completed within hours, not days. Emergency service available for urgent cases."
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All repairs backed by our comprehensive warranty. Peace of mind with every service."
  },
  {
    icon: Award,
  title: "Parts Options for Every Budget",
  description: "Choose from OEM or high-quality affordable parts. We offer options to fit your needs and budget—always with warranty."
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Certified repair specialists with years of experience across all major device brands."
  }
];

export function WhyChooseUs() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Why Choose Kpital Tech?
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional service you can trust with transparent pricing and guaranteed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="h-full text-center"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}