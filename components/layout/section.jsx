import { cn } from "@/lib/utils";

export function Section({ children, className, ...props }) {
  return (
    <section
      className={cn(
        "py-8 md:py-10 lg:py-12",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}