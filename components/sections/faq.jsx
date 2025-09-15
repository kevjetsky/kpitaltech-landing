import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { FAQItem } from "@/components/layout/faq-item";

const faqs = [
  {
    question: "How long do most repairs take?",
    answer: "Most common repairs like screen replacements and battery swaps are completed within 2-4 hours. More complex issues like water damage or data recovery may take 24-48 hours. We'll always give you an accurate timeframe after the free diagnostic."
  },
  {
    question: "Do you offer mobile repair service?",
    answer: "Yes! We provide mobile repair service throughout the Houston metro area including Katy, Sugar Land, The Woodlands, and Pearland. Mobile service is available for most repairs and includes the same warranty as in-shop service."
  },
  {
    question: "What's included in your 90-day warranty?",
    answer: "Our warranty covers the repaired component and labor for 90 days. If the same issue occurs within the warranty period, we'll fix it at no additional charge. The warranty doesn't cover new damage or unrelated issues."
  },
  {
    question: "Do you use genuine parts?",
    answer: "We use OEM-grade parts that meet or exceed original manufacturer specifications. While we can't claim manufacturer affiliation, our parts are rigorously tested for quality and come with the same warranty as our repairs."
  },
  {
    question: "How much does a free diagnostic cost?",
    answer: "Nothing! Our diagnostic service is completely free with no obligation. We'll examine your device, explain the issue, and provide a detailed repair quote. You only pay if you decide to proceed with the repair."
  },
  {
    question: "Can you recover data from damaged devices?",
    answer: "Yes, we offer data recovery services for devices with various types of damage including water damage, broken screens, and failed storage. Our success rate is high, and we use secure processes to protect your privacy throughout the recovery."
  },
  {
    question: "What devices do you repair?",
    answer: "We repair all major smartphone brands (iPhone, Samsung, Google, etc.), tablets, and laptops. If you're unsure whether we can help with your specific device, just give us a call or bring it in for a free diagnostic."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes, for most common repairs when parts are in stock. Screen replacements, battery swaps, and charge port repairs are typically completed same-day. We'll confirm availability and timing during your free diagnostic."
  }
];

export function FAQ() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our repair services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}