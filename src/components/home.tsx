
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import CalculatorPanel from "./calculator/CalculatorPanel";

const Home = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Habit ROI Calculator',
        text: 'Calculate how much your habits could be worth if invested!',
        url: window.location.href
      });
    } catch (err) {
      console.log('Share failed:', err);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Habit ROI Calculator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          See how much your daily habits are costing you and how much you could
          save by investing that money instead. Calculate the true ROI of
          changing your habits and watch your potential wealth grow!
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <CalculatorPanel />
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm px-4 space-y-4">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
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
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This calculator is for illustrative purposes only and does not
          guarantee actual investment results. Always consult with a financial
          advisor before making investment decisions.
        </p>
        <p className="text-xs text-muted-foreground">© 2025 Investment Calculator</p>
      </div>
    </div>
  );
};

export default Home;
