import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";

export function CTA() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading level="h2" className="mb-6 text-primary-foreground">
            Ready to Fix Your Device?
          </Heading>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Get your free diagnostic today. Most repairs completed same-day with our 90-day warranty.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 h-auto rounded-2xl bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="sms:+15055243280?body=Hi! I'd like to get a free diagnostic for my device.">
                Get a Free Diagnostic
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80">
              Houston mobile service • Same-day repairs • 90-day warranty
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}