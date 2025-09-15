import { 
  Smartphone, 
  Battery, 
  Shield, 
  Zap, 
  Volume2, 
  Droplets,
  HardDrive
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { FeatureCard } from "@/components/layout/feature-card";

const services = [
  {
    icon: Smartphone,
    title: "Screen Repair",
  description: "Cracked or shattered screens fixed with your choice of OEM or affordable parts. Quick turnaround for most devices."
  },
  {
    icon: Battery,
    title: "Battery Replacement",
  description: "Restore your device's power with your choice of OEM or affordable batteries. Includes diagnostic and performance testing."
  },
  {
    icon: Shield,
    title: "Back Glass",
    description: "Professional back glass replacement for iPhones and Samsung devices. First-time customers save 25%."
  },
  {
    icon: Zap,
    title: "Charge Port",
    description: "Fix charging issues with precise port cleaning or complete replacement. Same-day service available."
  },
  {
    icon: Volume2,
    title: "Speaker Repair",
    description: "Restore crystal-clear audio with speaker replacements. Covers earpiece, main, and ringer speakers."
  },
  {
    icon: Droplets,
    title: "Water Damage",
    description: "Emergency water damage recovery using advanced cleaning and drying techniques. Fast response."
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "Retrieve lost photos, contacts, and files from damaged devices. Secure and confidential process."
  }
];

export function Services() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Expert Repair Services
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional repairs for all major devices with same-day service and genuine parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="h-full"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}