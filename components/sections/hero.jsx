import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";

export function Hero() {
  return (
    <Section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <Heading level="h1" className="mb-6">
            Houston Phone & Laptop Repair, Done Right.
          </Heading>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Free diagnostics. Same-day service. 90-day warranty.
          </p>

          {/* Special Offer removed per request */}

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto rounded-2xl bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite] hover:animate-[gradient_3s_ease-in-out_infinite]"
              asChild
            >
              <a href="sms:+15055243280?body=Hi! I'd like to get a free diagnostic for my device.">
                Get a Free Diagnostic
              </a>
            </Button>
          </div>

          {/* Service Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Houston mobile + in-home repairs</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Same-day repairs available</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}