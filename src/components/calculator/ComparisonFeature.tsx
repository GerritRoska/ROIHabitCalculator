import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { PlusCircle, Edit, Trash2, ArrowRightLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Strategy {
  id: string;
  name: string;
  initialInvestment: number;
  monthlyContribution: number;
  years: number;
  returnRate: number;
  inflationRate: number;
  finalAmount: number;
}

const ComparisonFeature = () => {
  const [strategies, setStrategies] = useState<Strategy[]>([
    {
      id: "1",
      name: "Conservative",
      initialInvestment: 10000,
      monthlyContribution: 500,
      years: 20,
      returnRate: 5,
      inflationRate: 2,
      finalAmount: 230000,
    },
    {
      id: "2",
      name: "Aggressive",
      initialInvestment: 10000,
      monthlyContribution: 500,
      years: 20,
      returnRate: 8,
      inflationRate: 2,
      finalAmount: 320000,
    },
  ]);

  const [currentStrategy, setCurrentStrategy] = useState<Strategy>({
    id: "",
    name: "",
    initialInvestment: 10000,
    monthlyContribution: 500,
    years: 20,
    returnRate: 7,
    inflationRate: 2,
    finalAmount: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddStrategy = () => {
    setIsEditing(false);
    setCurrentStrategy({
      id: "",
      name: "",
      initialInvestment: 0,
      monthlyContribution: 500,
      years: 20,
      returnRate: 7,
      inflationRate: 2,
      finalAmount: 0,
    });
    setIsDialogOpen(true);
  };

  const handleEditStrategy = (strategy: Strategy) => {
    setIsEditing(true);
    setCurrentStrategy(strategy);
    setIsDialogOpen(true);
  };

  const handleDeleteStrategy = (id: string) => {
    setStrategies(strategies.filter((strategy) => strategy.id !== id));
  };

  const handleSaveStrategy = () => {
    // Simple calculation for final amount (this would be more complex in a real app)
    const calculatedFinalAmount =
      currentStrategy.initialInvestment +
      currentStrategy.monthlyContribution *
        12 *
        currentStrategy.years *
        (1 + currentStrategy.returnRate / 100);

    const updatedStrategy = {
      ...currentStrategy,
      finalAmount: Math.round(calculatedFinalAmount),
    };

    if (isEditing) {
      setStrategies(
        strategies.map((s) =>
          s.id === currentStrategy.id ? updatedStrategy : s,
        ),
      );
    } else {
      const newStrategy = {
        ...updatedStrategy,
        id: Date.now().toString(),
      };
      setStrategies([...strategies, newStrategy]);
    }

    setIsDialogOpen(false);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-slate-50/30 shadow-lg hover:shadow-xl transition-all duration-300 border-0 will-change-transform">
      <CardHeader>
        <CardTitle className="flex justify-between items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
          <span>Strategy Comparison</span>
          <Button
            onClick={handleAddStrategy}
            variant="outline"
            className="flex items-center gap-1"
          >
            <PlusCircle className="h-4 w-4" />
            Add Strategy
          </Button>
        </CardTitle>
        <CardDescription>
          Compare different investment strategies side-by-side
        </CardDescription>
      </CardHeader>
      <CardContent>
        {strategies.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-muted-foreground mb-4">
              No strategies to compare yet
            </p>
            <Button
              onClick={handleAddStrategy}
              variant="outline"
              className="flex items-center gap-1"
            >
              <PlusCircle className="h-4 w-4" />
              Create Your First Strategy
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {strategies.map((strategy) => (
                <Card
                  key={strategy.id}
                  className="min-w-[300px] max-w-[350px] flex-shrink-0 bg-gradient-to-br from-white to-slate-50/30 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-slate-100"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        {strategy.name}
                      </CardTitle>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditStrategy(strategy)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteStrategy(strategy.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-1 shadow-sm bg-primary/5 text-primary"
                    >
                      {strategy.returnRate}% return
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Initial:
                        </span>
                        <span className="font-medium">
                          ${strategy.initialInvestment.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Monthly:
                        </span>
                        <span className="font-medium">
                          ${strategy.monthlyContribution.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Time period:
                        </span>
                        <span className="font-medium">
                          {strategy.years} years
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Inflation:
                        </span>
                        <span className="font-medium">
                          {strategy.inflationRate}%
                        </span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Final amount:
                          </span>
                          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent/90">
                            ${strategy.finalAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4 bg-gradient-to-b from-transparent to-slate-50/50">
        <Button
          variant="outline"
          className="flex items-center gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-1px]"
        >
          <ArrowRightLeft className="h-4 w-4" />
          Compare Results
        </Button>
      </CardFooter>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent/90">
              {isEditing ? "Edit Strategy" : "Create New Strategy"}
            </DialogTitle>
            <DialogDescription>
              Configure your investment strategy parameters below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Strategy Name</Label>
              <Input
                id="name"
                value={currentStrategy.name}
                onChange={(e) =>
                  setCurrentStrategy({
                    ...currentStrategy,
                    name: e.target.value,
                  })
                }
                placeholder="e.g., Conservative, Aggressive, etc."
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="initialInvestment">
                Initial Investment: $
                {currentStrategy.initialInvestment.toLocaleString()}
              </Label>
              <Slider
                id="initialInvestment"
                value={[currentStrategy.initialInvestment]}
                min={1000}
                max={100000}
                step={1000}
                onValueChange={(value) =>
                  setCurrentStrategy({
                    ...currentStrategy,
                    initialInvestment: value[0],
                  })
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="monthlyContribution">
                Monthly Contribution: ${currentStrategy.monthlyContribution}
              </Label>
              <Slider
                id="monthlyContribution"
                value={[currentStrategy.monthlyContribution]}
                min={0}
                max={2000}
                step={50}
                onValueChange={(value) =>
                  setCurrentStrategy({
                    ...currentStrategy,
                    monthlyContribution: value[0],
                  })
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="years">
                Time Period: {currentStrategy.years} years
              </Label>
              <Slider
                id="years"
                value={[currentStrategy.years]}
                min={1}
                max={40}
                step={1}
                onValueChange={(value) =>
                  setCurrentStrategy({ ...currentStrategy, years: value[0] })
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="returnRate">
                Expected Return Rate: {currentStrategy.returnRate}%
              </Label>
              <Slider
                id="returnRate"
                value={[currentStrategy.returnRate]}
                min={1}
                max={15}
                step={0.5}
                onValueChange={(value) =>
                  setCurrentStrategy({
                    ...currentStrategy,
                    returnRate: value[0],
                  })
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="inflationRate">
                Inflation Rate: {currentStrategy.inflationRate}%
              </Label>
              <Slider
                id="inflationRate"
                value={[currentStrategy.inflationRate]}
                min={0}
                max={10}
                step={0.5}
                onValueChange={(value) =>
                  setCurrentStrategy({
                    ...currentStrategy,
                    inflationRate: value[0],
                  })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveStrategy}
              className="bg-gradient-to-r from-primary to-accent/90 hover:from-primary/90 hover:to-accent/80 transition-all duration-300"
            >
              {isEditing ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ComparisonFeature;
