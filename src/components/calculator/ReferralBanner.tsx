
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coins } from "lucide-react";

const ReferralBanner = () => {
  return (
    <Card className="p-4 mt-6 bg-green-50/50 border-green-100">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Coins className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">Ready to turn your habit savings into real investments?</span>
        </div>
        <Button 
          variant="ghost"
          className="bg-green-100 hover:bg-green-200 text-green-700 gap-2"
          onClick={() => window.open("https://www.acorns.com/share/?first_name=Gerrit&shareable_code=QM3PVD3", "_blank")}
        >
          Try Acorns + get $5
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ReferralBanner;
