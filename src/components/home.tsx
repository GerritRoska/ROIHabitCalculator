import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CalculatorPanel from "./calculator/CalculatorPanel";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-3 md:p-6">
      <header className="mb-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
          Habit ROI Calculator
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          See how much your daily habits are costing you and how much you could
          save by investing that money instead. Calculate the true ROI of
          changing your habits and watch your potential wealth grow!
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <Card className="border-slate-200 bg-gradient-to-br from-white to-slate-50/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-white to-slate-50/50 border-b border-slate-100">
            <CardTitle className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent/90">
              The Cost of Your Habits Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <CalculatorPanel />
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            This calculator is for illustrative purposes only and does not
            guarantee actual investment results. Always consult with a financial
            advisor before making investment decisions.
          </p>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-slate-500 py-4 border-t border-slate-100 bg-gradient-to-b from-transparent to-slate-50/30">
        <p>
          © {new Date().getFullYear()} Investment Calculator. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
