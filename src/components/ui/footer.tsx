
import { Button } from "./button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"
import { InfoIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-8 border-t py-4 bg-muted/30 dark:bg-muted/10">
      <div className="container text-center">
        <div className="mb-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="text-sm dark:text-muted-foreground">
                💸 Ready to turn your habit savings into real investments? 
                <InfoIcon className="h-4 w-4 ml-1 inline-block" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              Automatically invest your spare change and habit savings into diversified portfolios — perfect for consistent long-term growth. Get $5 bonus, that's $200 in 45 years! 😉
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 Investment Calculator</p>
      </div>
    </footer>
  )
}
