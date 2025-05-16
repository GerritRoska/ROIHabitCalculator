
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CalculatorPanel from "./calculator/CalculatorPanel";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Share2 } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Habit ROI Calculator
        </h1>
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
