
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReferralBanner = () => {
  return (
    <Card className="p-4 mt-6 bg-green-50/50 border-green-100">
      <div className="flex flex-col items-center justify-center gap-3">
        <Button 
          variant="subtle"
          className="bg-green-100/70 hover:bg-green-200/70 text-green-700"
          onClick={() => window.open("https://www.acorns.com/share/?first_name=Gerrit&shareable_code=QM3PVD3", "_blank")}
        >
          Try Acorns + get $5 bonus
        </Button>
        <p className="text-sm text-muted-foreground text-center italic">
          That $5 could be $226.30 in 40 years (at a assumed average 10% growth rate) 😉
        </p>
      </div>
    </Card>
  );
};

export default ReferralBanner;
