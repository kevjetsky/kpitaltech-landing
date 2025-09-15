import { cn } from "@/lib/utils";

export function Heading({ level = "h2", children, className, ...props }) {
  const Component = level;
  
  const baseStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-bold tracking-tight",
    h4: "text-xl md:text-2xl font-semibold tracking-tight",
    h5: "text-lg md:text-xl font-semibold tracking-tight",
    h6: "text-base md:text-lg font-semibold tracking-tight"
  };

  return (
    <Component
      className={cn(
        baseStyles[level],
        "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}