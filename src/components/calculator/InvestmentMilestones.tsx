
import { Trophy, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MilestoneProps {
  finalAmount: number;
  weaknessItemCount: number;
  weaknessType: string;
}

export function InvestmentMilestones({ finalAmount, weaknessItemCount, weaknessType }: MilestoneProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const milestones = [
    {
      icon: Trophy,
      title: "First Big Milestone",
      description: finalAmount >= 100000 
        ? `Congratulations! You've reached ${formatCurrency(100000)}`
        : `Keep going! You're ${formatCurrency(100000 - finalAmount)} away from ${formatCurrency(100000)}`,
      achieved: finalAmount >= 100000
    },
    {
      icon: Star,
      title: "Habit Master",
      description: weaknessItemCount >= 1000 
        ? `You've avoided ${weaknessItemCount.toLocaleString()} ${weaknessType}!`
        : `${(1000 - weaknessItemCount)} more ${weaknessType} to reach milestone`,
      achieved: weaknessItemCount >= 1000
    },
    {
      icon: Sparkles,
      title: "Future Millionaire",
      description: finalAmount >= 1000000 
        ? "You're a millionaire! 🎉"
        : `${formatCurrency(1000000 - finalAmount)} to go until you're a millionaire`,
      achieved: finalAmount >= 1000000
    }
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {milestones.map((milestone, index) => (
        <Card key={index} className={`bg-gradient-to-br ${milestone.achieved ? 'from-green-50 to-green-100/30' : 'from-gray-50 to-gray-100/30'} border-0 transition-all duration-300`}>
          <CardContent className="p-4 flex items-start gap-3">
            <div className={`p-2 rounded-lg ${milestone.achieved ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
              <milestone.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">{milestone.title}</h3>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
