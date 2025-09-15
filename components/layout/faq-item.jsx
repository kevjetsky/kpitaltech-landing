"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQItem({ question, answer, className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "border border-border rounded-2xl overflow-hidden",
        className
      )}
      {...props}
    >
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-card hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-card-foreground">{question}</span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-card border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}