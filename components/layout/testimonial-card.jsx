import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialCard({ name, content, rating = 5, location, className, ...props }) {
  return (
    <Card 
      className={cn(
        "p-6 border border-border bg-card",
        className
      )}
      {...props}
    >
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
            )}
          />
        ))}
      </div>
      <blockquote className="text-card-foreground mb-4 leading-relaxed">
        "{content}"
      </blockquote>
      <footer className="text-sm text-muted-foreground">
        <div className="font-semibold text-card-foreground">{name}</div>
        {location && <div>{location}</div>}
      </footer>
    </Card>
  );
}