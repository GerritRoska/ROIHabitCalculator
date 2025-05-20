
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CalculatorPanel from "./calculator/CalculatorPanel";
import ReferralButton from "./ReferralButton";

const Home = () => {
  const { theme, setTheme } = useTheme();
  
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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 p-3 md:p-6">
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <main className="max-w-7xl mx-auto pt-16">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Habit ROI Calculator
            </h1>
            <ReferralButton />
          </div>
          <a
            href="https://acorns.com/share/?shareable_code=QM3PVD3&first_name=Gerrit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-full transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            Start Investing with Acorns ($5 Bonus)
          </a>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          See how much your daily habits are costing you and how much you could
          save by investing that money instead. Calculate the true ROI of
          changing your habits and watch your potential wealth grow!
        </p>
        
        <div className="w-full">
          <CalculatorPanel />
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            This calculator is for illustrative purposes only and does not
            guarantee actual investment results. Always consult with a financial
            advisor before making investment decisions.
          </p>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground py-4 border-t border-border">
        <p>© {new Date().getFullYear()} Investment Calculator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
