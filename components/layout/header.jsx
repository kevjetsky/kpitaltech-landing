import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/layout/container";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Name - Left Side */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">
              WeFixPhones
            </h1>
          </div>

          {/* Theme Toggle - Right Side */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}