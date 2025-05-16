
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GiftIcon } from "lucide-react"

export function ReferralBanner() {
  return (
    <Card className="bg-gradient-to-r from-background to-accent/5 shadow-md mt-6">
      <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <GiftIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold mb-1">Start Investing Today</h3>
            <p className="text-sm text-muted-foreground">
              Get a $5 bonus when you start investing your savings with Acorns
            </p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="whitespace-nowrap bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
          onClick={() => window.open("https://acorns.com/share/?shareable_code=QM3PVD3&first_name=Gerrit", "_blank")}
        >
          Claim $5 Bonus
        </Button>
      </CardContent>
    </Card>
  );
}
