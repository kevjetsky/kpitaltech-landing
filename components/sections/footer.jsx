import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                We Fix Phones
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trusted experts for phone and laptop repairs in Houston. Fast, reliable service with flexible parts options and a comprehensive warranty. Your satisfaction is our priority.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>505-524-3280</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@we-fix-phones.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Houston, TX Metro Area</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#screen-repair" className="hover:underline">Screen Repair</a></li>
                <li><a href="#battery-replacement" className="hover:underline">Battery Replacement</a></li>
                <li><a href="#back-glass-repair" className="hover:underline">Back Glass Repair</a></li>
                <li><a href="#charge-port-fix" className="hover:underline">Charge Port Fix</a></li>
                <li><a href="#speaker-repair" className="hover:underline">Speaker Repair</a></li>
                <li><a href="#water-damage-recovery" className="hover:underline">Water Damage Recovery</a></li>
                <li><a href="#data-recovery" className="hover:underline">Data Recovery</a></li>
              </ul>
            </div>

            {/* Hours & Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Hours & Info</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5" />
                  <div>
                    <div>Every day: 9AM–9PM</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Service Area:</div>
                  <div>Whole Houston including Katy, Rosenberg, Missouri City, Hempstead, and more.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2025 We Fix Phones. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>90-Day Warranty</span>
            <span>•</span>
            <span>OEM-Grade Parts</span>
            <span>•</span>
            <span>Mobile Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}