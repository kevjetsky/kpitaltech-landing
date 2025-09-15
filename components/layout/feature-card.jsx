import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FeatureCard({ icon: Icon, title, description, className, ...props }) {
  return (
    <Card 
      className={cn(
        "p-6 border border-border bg-card transition-all duration-200 ease-out group hover:border-ring hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="mb-4 text-primary">
          <Icon className="h-8 w-8" />
        </div>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </Card>
  );
}