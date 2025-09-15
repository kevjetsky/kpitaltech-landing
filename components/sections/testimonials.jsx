import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { TestimonialCard } from "@/components/layout/testimonial-card";

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Houston, TX",
    content: "Excellent service! They fixed my cracked iPhone screen in just 2 hours. The quality is perfect and the warranty gives me peace of mind.",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    location: "Katy, TX",
    content: "Mobile service was incredibly convenient. Tech came to my office and replaced my laptop battery while I worked. Professional and fast.",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    location: "The Woodlands, TX", 
    content: "My phone had water damage and I thought it was done for. They recovered all my photos and got it working perfectly again. Lifesavers!",
    rating: 5
  },
  {
    name: "David Thompson",
    location: "Sugar Land, TX",
    content: "Fair pricing, quick turnaround, and excellent customer service. Been using them for all my family's device repairs for over a year.",
    rating: 5
  },
  {
    name: "Amanda Wilson",
    location: "Houston, TX",
    content: "The free diagnostic saved me money - they explained exactly what was wrong and gave me options. Honest and trustworthy business.",
    rating: 5
  },
  {
    name: "Carlos Gutierrez",
    location: "Pearland, TX",
    content: "Same-day back glass replacement with the 25% first-time discount was an amazing deal. Quality work and great customer experience.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            What Our Customers Say
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from Houston area customers who trust us with their devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              content={testimonial.content}
              rating={testimonial.rating}
              className="h-full"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}