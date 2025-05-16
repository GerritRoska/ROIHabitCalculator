import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Coffee,
  Utensils,
  Film,
  Beer,
  ShoppingBag,
  Gamepad,
  Gift,
  Music,
  Smartphone,
  Car,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface WeaknessData {
  id?: string; // Unique identifier for each weakness
  type: string;
  cost: number;
  frequency: "daily" | "weekly" | "monthly";
  timesPerFrequency: number;
}

interface CoffeeCalculatorProps {
  onChange: (data: WeaknessData) => void;
  onAdd?: (data: WeaknessData) => void;
  defaultValues?: WeaknessData;
  isMultipleMode?: boolean;
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
    description:
      "Your regular escape into other worlds (with overpriced popcorn)",
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
  {
    value: "gaming",
    label: "Gaming",
    icon: Gamepad,
    description: "Just one more level before bed... 3 hours later",
    color: "bg-purple-100 text-purple-800",
  },
  {
    value: "gifts",
    label: "Gifts",
    icon: Gift,
    description: "Because you're too nice for your own financial good",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "music",
    label: "Music & Streaming",
    icon: Music,
    description: "All those subscriptions you forgot you had",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    value: "tech",
    label: "Tech Gadgets",
    icon: Smartphone,
    description: "The shiny new devices you convince yourself you need",
    color: "bg-gray-100 text-gray-800",
  },
  {
    value: "rideshare",
    label: "Rideshare",
    icon: Car,
    description: "Because walking is so last century",
    color: "bg-teal-100 text-teal-800",
  },
];

const FREQUENCY_OPTIONS = [
  { value: "daily", label: "Daily", multiplier: 365 },
  { value: "weekly", label: "Weekly", multiplier: 52 },
  { value: "monthly", label: "Monthly", multiplier: 12 },
];

const CoffeeCalculator: React.FC<CoffeeCalculatorProps> = ({
  onChange,
  onAdd,
  defaultValues = {
    id: crypto.randomUUID(),
    type: "coffee",
    cost: 5,
    frequency: "daily",
    timesPerFrequency: 1,
  },
  isMultipleMode = false,
}) => {
  const [weaknessType, setWeaknessType] = useState<string>(defaultValues.type);
  const [weaknessCost, setWeaknessCost] = useState<number>(defaultValues.cost);
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
    defaultValues.frequency,
  );
  const [timesPerFrequency, setTimesPerFrequency] = useState<number>(
    defaultValues.timesPerFrequency,
  );

  // Get the selected weakness option
  const selectedWeakness = WEAKNESS_OPTIONS.find(
    (option) => option.value === weaknessType,
  );
  const WeaknessIcon = selectedWeakness?.icon || Coffee;

  // Get the selected frequency option
  const selectedFrequency = FREQUENCY_OPTIONS.find(
    (option) => option.value === frequency,
  );

  // Update parent component when values change
  React.useEffect(() => {
    onChange({
      id: defaultValues.id || crypto.randomUUID(),
      type: weaknessType,
      cost: weaknessCost,
      frequency,
      timesPerFrequency,
    });
  }, [
    weaknessType,
    weaknessCost,
    frequency,
    timesPerFrequency,
    onChange,
    defaultValues.id,
  ]);

  // Calculate annual cost
  const annualCost =
    weaknessCost * timesPerFrequency * (selectedFrequency?.multiplier || 365);

  // Get the selected weakness option for description and color
  const selectedWeaknessOption = WEAKNESS_OPTIONS.find(
    (option) => option.value === weaknessType,
  );

  // Get a fun quote based on the selected weakness
  const getWeaknessQuote = () => {
    const quotes = {
      coffee:
        "A penny saved is a penny earned... but a $5 latte skipped is a future vacation earned!",
      eating_out:
        "Cook at home once, eat out never... or something like that, right?",
      movies:
        "Netflix and save: it's like Netflix and chill, but for your wallet.",
      drinks: "Saving money is intoxicating... unlike that $15 cocktail.",
      shopping:
        "The best things in life are free. The second best are very, very expensive.",
      gaming:
        "The only microtransaction you need is transferring micro-amounts to your savings.",
      gifts: "The best gift you can give yourself is financial freedom.",
      music: "Unsubscribe from services, subscribe to wealth.",
      tech: "The best tech upgrade? Your bank balance.",
      rideshare:
        "The journey to wealth starts with a single step... literally.",
    };

    return quotes[weaknessType] || quotes.coffee;
  };

  return (
    <Card className="bg-gradient-to-br from-white to-slate-50/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1.5 before:bg-gradient-to-r before:from-primary before:to-accent/70">
      <CardContent className="p-0 space-y-6">
        {isMultipleMode && onAdd && (
          <div className="absolute top-4 right-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onAdd({
                  id: crypto.randomUUID(),
                  type: weaknessType,
                  cost: weaknessCost,
                  frequency,
                  timesPerFrequency,
                })
              }
            >
              Add to List
            </Button>
          </div>
        )}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient-x">
            <WeaknessIcon className="mr-2 h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <span className="break-normal">The Cost of Your Weakness</span>
          </h2>
          <Badge
            variant="outline"
            className={`w-fit shadow-sm ${selectedWeaknessOption?.color || "bg-primary/10 text-primary"}`}
          >
            {selectedWeaknessOption?.label || "Your Weakness"}
          </Badge>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 italic border-l-2 border-primary/30 pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2 rounded-r-md">
          "{getWeaknessQuote()}"
        </p>

        {/* Weakness Type Selector */}
        <div className="space-y-2">
          <Label htmlFor="weakness-type" className="flex items-center">
            Your Guilty Pleasure
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-2 text-xs text-gray-400 cursor-help">
                    (What's draining your wallet?)
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-[200px] text-sm">
                    Select your financial weakness to see how much it's costing
                    you over time
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Select
            value={weaknessType}
            onValueChange={(value) => setWeaknessType(value)}
          >
            <SelectTrigger id="weakness-type" className="w-full">
              <SelectValue placeholder="Select your weakness" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {WEAKNESS_OPTIONS.map((option) => {
                const Icon = option.icon;
                return (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center">
                      <div
                        className={`p-1 rounded-full mr-2 shadow-sm ${option.color || "bg-primary/10"}`}
                      >
                        <Icon className="h-4 w-4 animate-pulse" />
                      </div>
                      <div className="flex flex-col">
                        <span>{option.label}</span>
                        <span className="text-xs text-gray-500 truncate max-w-[150px] sm:max-w-[200px]">
                          {option.description}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {selectedWeaknessOption && (
            <p className="text-sm text-gray-500 mt-1">
              {selectedWeaknessOption.description}
            </p>
          )}
        </div>

        {/* Cost Per Item */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="weakness-cost">
              Cost Per {selectedWeakness?.label || "Item"}
            </Label>
            <div className="flex items-center">
              <Input
                id="weakness-cost-input"
                type="number"
                value={weaknessCost}
                onChange={(e) => setWeaknessCost(Number(e.target.value))}
                className="w-24 h-8 text-right"
              />
            </div>
          </div>
          <Slider
            id="weakness-cost"
            min={1}
            max={50}
            step={0.5}
            value={[weaknessCost]}
            onValueChange={(value) => setWeaknessCost(value[0])}
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$1</span>
            <span>$50</span>
          </div>
        </div>

        {/* Frequency Selector */}
        <div className="space-y-2">
          <Label htmlFor="frequency">How Often?</Label>
          <Select
            value={frequency}
            onValueChange={(value: "daily" | "weekly" | "monthly") =>
              setFrequency(value)
            }
          >
            <SelectTrigger id="frequency" className="w-full">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              {FREQUENCY_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Times Per Frequency */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="times-per-frequency">
              Times{" "}
              {frequency === "daily"
                ? "per day"
                : frequency === "weekly"
                  ? "per week"
                  : "per month"}
            </Label>
            <div className="flex items-center">
              <Input
                id="times-per-frequency-input"
                type="number"
                value={timesPerFrequency}
                onChange={(e) => setTimesPerFrequency(Number(e.target.value))}
                className="w-24 h-8 text-right"
              />
            </div>
          </div>
          <Slider
            id="times-per-frequency"
            min={1}
            max={10}
            step={1}
            value={[timesPerFrequency]}
            onValueChange={(value) => setTimesPerFrequency(value[0])}
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* Summary */}
        <div
          className="mt-4 p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 shadow-inner animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium">
                You're spending approximately{" "}
                <span className="font-bold text-primary">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(annualCost)}
                </span>{" "}
                <span className="block sm:inline">
                  per year on {selectedWeakness?.label.toLowerCase() || "this"}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                That's {(annualCost / weaknessCost).toFixed(0)}{" "}
                {selectedWeakness?.label.toLowerCase() || "items"} per year!
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <WeaknessIcon className="h-12 w-12 text-primary/30" />
            </div>
          </div>

          {/* Fun facts based on annual cost */}
          <div className="mt-3 pt-3 border-t border-primary/10">
            <p className="text-xs font-medium text-primary/80">
              Fun fact: With that money, you could...
            </p>
            <ul className="text-xs text-gray-600 mt-1 space-y-1 break-words">
              {annualCost >= 1000 && (
                <li className="flex items-center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Take a weekend getaway every year
                </li>
              )}
              {annualCost >= 500 && (
                <li className="flex items-center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60 mr-2"></span>
                  Buy {Math.floor(annualCost / 500)} nice dinner
                  {Math.floor(annualCost / 500) > 1 ? "s" : ""} at a fancy
                  restaurant
                </li>
              )}
              <li className="flex items-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60 mr-2 mt-1.5"></span>
                <span className="flex-1">
                  Invest it and have $
                  {Math.round(annualCost * Math.pow(1.07, 10))} in 10 years (at
                  7% return)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeCalculator;
