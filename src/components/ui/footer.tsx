
import { Button } from "./button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"
import { InfoIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-8 border-t py-4 bg-muted/30 dark:bg-muted/10">
      <div className="container text-center">
        <div className="mb-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <span>💸 Ready to turn your habit savings into real investments?</span>
            <a
              href="https://www.acorns.com/share/?first_name=Gerrit&shareable_code=QM3PVD3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Try Acorns + get $5 — it's what we recommend
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 Investment Calculator</p>
      </div>
    </footer>
  )
}
