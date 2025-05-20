import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, TrendingUp, Percent, Coffee, Utensils, Film, Beer, ShoppingBag } from "lucide-react";
import InvestmentMilestones from "./InvestmentMilestones";
import InvestmentChart from "./InvestmentChart";
import SummaryCards from "./SummaryCards";
import CoffeeCalculator, { WeaknessData } from "./CoffeeCalculator";

interface CalculatorPanelProps {
  className?: string;
}

const WEAKNESS_OPTIONS = [
  {
    value: "coffee",
    label: "Coffee",
    icon: Coffee,
    description: "That morning brew that keeps you functioning like a human",
    color: "bg-amber-100 text-amber-800",
  },
  {
    value: "eating_out",
    label: "Eating Out",
    icon: Utensils,
    description: "Because cooking is hard and delivery apps are easy",
    color: "bg-red-100 text-red-800",
  },
  {
    value: "movies",
    label: "Movies",
    icon: Film,
    description: "Your regular escape into other worlds (with overpriced popcorn)",
    color: "bg-blue-100 text-blue-800",
  },
  {
    value: "drinks",
    label: "Drinks",
    icon: Beer,
    description: "Those social lubricants that make you think you can dance",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    value: "shopping",
    label: "Shopping",
    icon: ShoppingBag,
    description: "Things you absolutely 'need' according to targeted ads",
    color: "bg-pink-100 text-pink-800",
  },
];

const CalculatorPanel: React.FC<CalculatorPanelProps> = ({ className = "" }) => {
  const [initialInvestment, setInitialInvestment] = useState<number>(0);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [timeYears, setTimeYears] = useState<number>(20);
  const [returnRate, setReturnRate] = useState<number>(7);
  const [inflationRate, setInflationRate] = useState<number>(2.5);
  const [showRealReturns, setShowRealReturns] = useState<boolean>(false);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [weaknessData, setWeaknessData] = useState<WeaknessData>({
    id: crypto.randomUUID(),
    type: "coffee",
    cost: 5,
    frequency: "daily",
    timesPerFrequency: 1,
  });
  const [weaknessList, setWeaknessList] = useState<WeaknessData[]>([]);
  const [showMultipleWeaknesses, setShowMultipleWeaknesses] = useState<boolean>(false);

  const calculateInvestmentGrowth = () => {
    const data = [];
    const yearsUntilRetirement = Math.max(0, retirementAge - currentAge);
    const calculationPeriod = Math.max(timeYears, yearsUntilRetirement);

    const getAnnualWeaknessSavings = (weakness: WeaknessData) => {
      const { cost, timesPerFrequency, frequency } = weakness;
      const frequencyMultiplier = frequency === "daily" ? 365 : frequency === "weekly" ? 52 : 12;
      return cost * timesPerFrequency * frequencyMultiplier;
    };

    let annualWeaknessSavings = getAnnualWeaknessSavings(weaknessData);

    if (showMultipleWeaknesses && weaknessList.length > 0) {
      weaknessList.forEach((weakness) => {
        annualWeaknessSavings += getAnnualWeaknessSavings(weakness);
      });
    }

    const monthlyWeaknessSavings = annualWeaknessSavings / 12;
    const effectiveMonthlyContribution = monthlyContribution + monthlyWeaknessSavings;
    const monthlyNominalRate = Math.pow(1 + returnRate / 100, 1 / 12) - 1;
    const monthlyInflationRate = Math.pow(1 + inflationRate / 100, 1 / 12) - 1;
    const monthlyRealRate = (1 + monthlyNominalRate) / (1 + monthlyInflationRate) - 1;

    let nominalBalance = initialInvestment;
    let realBalance = initialInvestment;

    for (let year = 0; year <= calculationPeriod; year++) {
      if (year > 0) {
        const months = year * 12;
        nominalBalance =
          initialInvestment * Math.pow(1 + monthlyNominalRate, months) +
          effectiveMonthlyContribution *
          ((Math.pow(1 + monthlyNominalRate, months) - 1) / monthlyNominalRate);

        realBalance =
          initialInvestment * Math.pow(1 + monthlyRealRate, months) +
          effectiveMonthlyContribution * ((Math.pow(1 + monthlyRealRate, months) - 1) / monthlyRealRate);
      }

      const baseContribution = initialInvestment + monthlyContribution * 12 * year;
      const weaknessContribution = monthlyWeaknessSavings * 12 * year;
      const totalContribution = baseContribution + weaknessContribution;

      data.push({
        year,
        value: Math.round(nominalBalance),
        realValue: Math.round(realBalance),
        contribution: baseContribution,
        weaknessContribution,
        totalContribution: totalContribution,
      });
    }

    return data;
  };

  const investmentData = calculateInvestmentGrowth();
  const yearsUntilRetirement = Math.max(0, retirementAge - currentAge);
  const calculationPeriod = Math.max(timeYears, yearsUntilRetirement);
  const dataIndex = Math.min(yearsUntilRetirement, investmentData.length - 1);

  const finalAmount = showRealReturns ? investmentData[dataIndex].realValue : investmentData[dataIndex].value;
  const totalContributions = investmentData[dataIndex].totalContribution;
  const weaknessContribution = investmentData[dataIndex].weaknessContribution || 0;
  const interestEarned = finalAmount - totalContributions;

  const calculateWeaknessMetrics = () => {
    if (showMultipleWeaknesses && weaknessList.length > 0) {
      const totalWeaknessCount = weaknessList.length + 1;

      const getAnnualWeaknessSavings = (weakness: WeaknessData) => {
        const { cost, timesPerFrequency, frequency } = weakness;
        const frequencyMultiplier = frequency === "daily" ? 365 : frequency === "weekly" ? 52 : 12;
        return cost * timesPerFrequency * frequencyMultiplier;
      };

      let totalAnnualSavings = getAnnualWeaknessSavings(weaknessData);

      const getItemCount = (weakness: WeaknessData) => {
        const { timesPerFrequency, frequency } = weakness;
        const frequencyMultiplier = frequency === "daily" ? 365 : frequency === "weekly" ? 52 : 12;
        const actualYears = Math.min(yearsUntilRetirement, calculationPeriod);
        return timesPerFrequency * frequencyMultiplier * actualYears;
      };

      let totalItemCount = getItemCount(weaknessData);

      weaknessList.forEach((weakness) => {
        totalAnnualSavings += getAnnualWeaknessSavings(weakness);
        totalItemCount += getItemCount(weakness);
      });

      const averageCost = totalAnnualSavings / totalWeaknessCount;

      return {
        cost: averageCost,
        itemCount: Math.floor(totalItemCount),
        type: "items",
        isMultiple: true,
      };
    } else {
      const { cost, timesPerFrequency, frequency, type } = weaknessData;
      const frequencyMultiplier = frequency === "daily" ? 365 : frequency === "weekly" ? 52 : 12;
      const actualYears = Math.min(yearsUntilRetirement, calculationPeriod);
      const itemCount = Math.floor(timesPerFrequency * frequencyMultiplier * actualYears);

      const weaknessType =
        type === "coffee"
          ? "coffees"
          : type === "eating_out"
            ? "meals"
            : type === "movies"
              ? "movie tickets"
              : type === "drinks"
                ? "drinks"
                : "items";
      return { cost, itemCount, type: weaknessType, isMultiple: false };
    }
  };

  const { cost, itemCount, type: selectedWeaknessType, isMultiple } = calculateWeaknessMetrics();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className={`bg-gradient-to-br from-background to-accent/5 dark:from-background dark:to-accent/10 p-3 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto max-w-full border-0 will-change-transform ${className}`}>
      <CardContent className="p-0">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="pb-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pb-2 mb-2 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <span>Created by Gerrit Roska</span>
                <a
                  href="https://www.linkedin.com/in/gerritroska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  aria-label="Gerrit Roska's LinkedIn profile"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.linkedin.com/in/gerritroska/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Inspired by Jack Skywalker's blog</span>
                <a
                  href="https://thrivently.substack.com/p/from-20s-to-millions-a-guide-to-effortless"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  aria-label="Jack Skywalker's blog post"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://thrivently.substack.com/p/from-20s-to-millions-a-guide-to-effortless",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center sm:justify-end mb-4 mt-2 animate-fade-in">
                <div className="flex items-center space-x-3 flex-shrink-0 bg-slate-50 px-3 py-1.5 rounded-full shadow-sm">
                  <Switch
                    id="multiple-weaknesses"
                    checked={showMultipleWeaknesses}
                    onCheckedChange={setShowMultipleWeaknesses}
                  />
                  <Label
                    htmlFor="multiple-weaknesses"
                    className="text-sm sm:text-base font-medium"
                  >
                    Combine multiple Habits
                  </Label>
                </div>
              </div>

              {showMultipleWeaknesses ? (
                <div className="space-y-4 w-full">
                  <CoffeeCalculator
                    onChange={setWeaknessData}
                    onAdd={(newWeakness) => {
                      setWeaknessList((prev) => [...prev, newWeakness]);
                    }}
                    defaultValues={weaknessData}
                    isMultipleMode={true}
                  />

                  {weaknessList.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-semibold">
                        Your Weakness List
                      </h3>
                      <div className="space-y-2 overflow-x-auto">
                        {weaknessList.map((weakness, index) => {
                          const option = WEAKNESS_OPTIONS.find(
                            (opt) => opt.value === weakness.type
                          );
                          const Icon = option?.icon || Coffee;
                          return (
                            <div
                              key={weakness.id}
                              className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-md min-w-[280px]"
                            >
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <div
                                  className={`p-1.5 rounded-full shadow-sm ${option?.color || "bg-primary/10"
                                    }`}
                                >
                                  <Icon className="h-4 w-4 animate-pulse" />
                                </div>
                                <div>
                                  <p className="text-xs sm:text-sm md:text-base font-medium">
                                    {option?.label || "Item"}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    ${weakness.cost} ×{" "}
                                    {weakness.timesPerFrequency}{" "}
                                    {weakness.frequency}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs sm:text-sm px-2 sm:px-3"
                                onClick={() => {
                                  setWeaknessList((prev) =>
                                    prev.filter((_, i) => i !== index)
                                  );
                                }}
                              >
                                Remove
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <CoffeeCalculator
                  onChange={setWeaknessData}
                  defaultValues={weaknessData}
                />
              )}

              <Separator />

              <div
                className="space-y-3 sm:space-y-4 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="current-age"
                        className="flex items-center"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Current Age: {currentAge}
                      </Label>
                    </div>
                    <Slider
                      id="current-age"
                      min={18}
                      max={80}
                      step={1}
                      value={[currentAge]}
                      onValueChange={(value) => setCurrentAge(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>18</span>
                      <span>80</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="retirement-age"
                        className="flex items-center"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Retirement Age: {retirementAge}
                      </Label>
                    </div>
                    <Slider
                      id="retirement-age"
                      min={40}
                      max={90}
                      step={1}
                      value={[retirementAge]}
                      onValueChange={(value) => setRetirementAge(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>40</span>
                      <span>90</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div
                className="space-y-3 sm:space-y-4 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Investment Parameters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="return-rate"
                        className="flex items-center"
                      >
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Return Rate: {returnRate}%
                      </Label>
                    </div>
                    <Slider
                      id="return-rate"
                      min={1}
                      max={15}
                      step={0.5}
                      value={[returnRate]}
                      onValueChange={(value) => setReturnRate(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1%</span>
                      <span>15%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="inflation-rate"
                        className="flex items-center"
                      >
                        <Percent className="h-4 w-4 mr-2" />
                        Inflation Rate: {inflationRate}%
                      </Label>
                    </div>
                    <Slider
                      id="inflation-rate"
                      min={0}
                      max={10}
                      step={0.5}
                      value={[inflationRate]}
                      onValueChange={(value) => setInflationRate(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0%</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div
                className="space-y-3 sm:space-y-4 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    Investment Growth with Habit Savings
                  </h2>
                  <div className="flex items-center space-x-3 flex-shrink-0 bg-slate-50 px-3 py-1.5 rounded-full shadow-sm">
                    <Switch
                      id="real-returns"
                      checked={showRealReturns}
                      onCheckedChange={setShowRealReturns}
                    />
                    <Label
                      htmlFor="real-returns"
                      className="text-sm font-medium"
                    >
                      Show inflation adjusted
                    </Label>
                  </div>
                </div>
                <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full">
                  <InvestmentChart
                    data={investmentData}
                    showRealReturns={showRealReturns}
                    title="Investment Growth with Habit Savings"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-blue-500 ${!showRealReturns ? "ring-2 ring-blue-200" : ""
                        }`}
                    ></div>
                    <span className={!showRealReturns ? "font-medium" : ""}>
                      Nominal Value:{" "}
                      {formatCurrency(investmentData[calculationPeriod].value)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-green-500 ${showRealReturns ? "ring-2 ring-green-200" : ""
                        }`}
                    ></div>
                    <span className={showRealReturns ? "font-medium" : ""}>
                      Real Value (Inflation Adjusted):{" "}
                      {formatCurrency(
                        investmentData[calculationPeriod].realValue
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              <div
                className="space-y-3 sm:space-y-4 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-between mb-4 pt-2">
                  <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    Investment Summary
                  </h2>
                </div>
                {showRealReturns && (
                  <span className="text-sm font-normal text-muted-foreground ml-2 block sm:inline mt-2 sm:mt-0">
                    (Inflation Adjusted)
                  </span>
                )}

                <SummaryCards
                  finalAmount={finalAmount}
                  totalContributions={totalContributions}
                  interestEarned={interestEarned}
                  inflationAdjusted={showRealReturns}
                  returnRate={returnRate}
                  weaknessContribution={weaknessContribution}
                  weaknessItemCount={itemCount}
                  weaknessType={selectedWeaknessType}
                  isMultipleWeaknesses={isMultiple}
                  weaknessCount={
                    showMultipleWeaknesses ? weaknessList.length + 1 : 1
                  }
                />

                {/* Dynamic CTA Section */}
                <div className="mt-8 mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 animate-fade-in">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-green-800">
                      {showMultipleWeaknesses && weaknessList.length > 0 ? 
                        `Your combined ${formatCurrency(weaknessCost)}/${frequency} + ${weaknessList.map(w => 
                          `${formatCurrency(w.cost)}/${w.frequency}`).join(' + ')} habits could grow to ${formatCurrency(finalAmount)}` :
                        `Your ${formatCurrency(weaknessCost)}/${frequency} ${selectedWeaknessType.replace('_', ' ')} habit could become ${formatCurrency(finalAmount)}`
                      }
                    </h3>
                    <p className="text-green-700">
                      {showMultipleWeaknesses && weaknessList.length > 0 ?
                        "Turn those small decisions into long-term wealth — Acorns can help." :
                        "Acorns helps you invest that amount automatically — and grow it over time."
                      }
                    </p>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white border-0 shadow-sm"
                      onClick={() => window.open("https://www.acorns.com/share/?first_name=Gerrit&shareable_code=QM3PVD3", "_blank")}
                    >
                      🌱 Start Investing with Acorns →
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    Your Investment Milestones
                  </h2>
                  <InvestmentMilestones
                    finalAmount={finalAmount}
                    weaknessItemCount={itemCount}
                    weaknessType={selectedWeaknessType}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorPanel;