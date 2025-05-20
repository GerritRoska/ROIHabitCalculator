
import { Button } from "./button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"

export function Footer() {
  return (
    <footer className="mt-8 border-t py-4 bg-muted/30">
      <div className="container text-center">
        <div className="mb-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="text-sm">
                💸 Ready to turn your habit savings into real investments?
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              Automatically invest your spare change and habit savings into diversified portfolios — perfect for consistent long-term growth.
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 Investment Calculator</p>
      </div>
    </footer>
  )
}
