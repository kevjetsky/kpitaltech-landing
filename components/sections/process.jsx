import { Calendar, MapPin, Wrench, CreditCard } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book",
    description: "Schedule your free diagnostic online or call us. Choose between drop-off or mobile service."
  },
  {
    icon: MapPin,
    number: "02", 
    title: "Drop-off or Mobile",
    description: "Bring your device to our shop or we'll come to you. Houston metro area mobile service available."
  },
  {
    icon: Wrench,
    number: "03",
    title: "Repair",
  description: "Expert technicians diagnose and fix your device. You can choose OEM or affordable parts for your repair. Most repairs same-day."
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Pay & Warranty",
    description: "Pay only after you're satisfied. Every repair includes our comprehensive 90-day warranty."
  }
];

export function Process() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Our Simple Process
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From booking to warranty, we make device repair straightforward and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Icon Container with Number Badge */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full bg-primary rounded-2xl flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform duration-200">
                    <step.icon className="h-8 w-8" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-background">
                    {step.number}
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border translate-x-10 -translate-y-0.5">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-border rounded-full"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}