import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  Coffee,
  DollarSign,
  ShoppingBag,
} from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  description?: string;
  percentageChange?: number;
  icon?: React.ReactNode;
}

const SummaryCard = ({
  title = "Summary",
  value = "$0",
  description = "",
  percentageChange,
  icon = <TrendingUpIcon className="h-4 w-4" />,
}: SummaryCardProps) => {
  const isPositive =
    percentageChange === undefined ? true : percentageChange >= 0;

  return (
    <Card className="bg-gradient-to-br from-background to-background/30 shadow-md hover:shadow-lg border-0 transition-all duration-300 hover:translate-y-[-2px] rounded-xl overflow-hidden will-change-transform animate-float">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 px-3 sm:px-4 pt-3 sm:pt-4 bg-gradient-to-r from-transparent to-slate-50/50">
        <CardTitle className="text-xs sm:text-sm font-semibold text-gray-700">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent className="px-3 sm:px-4 py-2 sm:py-3">
        <div className="text-base sm:text-lg md:text-xl font-bold break-words mb-1 sm:mb-2 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
          {value}
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-1 sm:gap-2">
          {percentageChange !== undefined && (
            <span
              className={`flex items-center text-xs font-semibold ${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {isPositive ? (
                <ArrowUpIcon className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3" />
              )}
              {Math.abs(percentageChange).toFixed(2)}%
            </span>
          )}
          {description && (
            <p className="text-xs font-medium text-muted-foreground w-full sm:w-auto break-words">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface SummaryCardsProps {
  finalAmount?: number;
  totalContributions?: number;
  interestEarned?: number;
  returnRate?: number;
  inflationAdjusted?: boolean;
  weaknessContribution?: number;
  weaknessItemCount?: number;
  weaknessType?: string;
  isMultipleWeaknesses?: boolean;
  weaknessCount?: number;
}

const SummaryCards = ({
  finalAmount = 150000,
  totalContributions = 60000,
  interestEarned = 90000,
  returnRate = 7.5,
  inflationAdjusted = false,
  weaknessContribution = 0,
  weaknessItemCount = 0,
  weaknessType = "coffees",
  isMultipleWeaknesses = false,
  weaknessCount = 1,
}: SummaryCardsProps) => {
  // Format currency values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Calculate percentage of interest to total
  const interestPercentage =
    finalAmount > 0 ? (interestEarned / finalAmount) * 100 : 0;

  // Calculate average contribution per weakness when multiple
  const averageContributionPerWeakness =
    isMultipleWeaknesses && weaknessCount > 1
      ? weaknessContribution / weaknessCount
      : weaknessContribution;

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      <SummaryCard
        title="Final Amount"
        value={formatCurrency(finalAmount)}
        description={inflationAdjusted ? "Inflation adjusted" : "Nominal value"}
        percentageChange={returnRate}
        icon={<TrendingUpIcon className="h-4 w-4" />}
      />
      <SummaryCard
        title="Total Contributions"
        value={formatCurrency(totalContributions)}
        description={`${finalAmount > 0 ? Math.min(100, (totalContributions / finalAmount) * 100).toFixed(0) : 0}% of final amount`}
        icon={<ArrowUpIcon className="h-4 w-4" />}
      />
      <SummaryCard
        title="Interest Earned"
        value={formatCurrency(interestEarned)}
        description={`${finalAmount > 0 ? interestPercentage.toFixed(0) : 0}% of final amount`}
        percentageChange={interestPercentage}
        icon={<TrendingUpIcon className="h-4 w-4" />}
      />
      {weaknessContribution > 0 && (
        <>
          <SummaryCard
            title={
              isMultipleWeaknesses ? "Combined Habit Savings" : "Habit Savings"
            }
            value={formatCurrency(weaknessContribution)}
            description={
              isMultipleWeaknesses
                ? `Savings from ${weaknessCount} different habits`
                : `That's a lot of ${weaknessType} you didn't buy!`
            }
            percentageChange={
              totalContributions > 0
                ? (weaknessContribution / totalContributions) * 100
                : 0
            }
            icon={
              isMultipleWeaknesses ? (
                <ShoppingBag className="h-4 w-4" />
              ) : (
                <Coffee className="h-4 w-4" />
              )
            }
          />

          {isMultipleWeaknesses && (
            <SummaryCard
              title="Average Savings Per Habit"
              value={formatCurrency(averageContributionPerWeakness)}
              description={`Each habit contributes to your wealth`}
              percentageChange={
                weaknessContribution > 0
                  ? (averageContributionPerWeakness / weaknessContribution) *
                    100
                  : 0
              }
              icon={<DollarSign className="h-4 w-4" />}
            />
          )}

          <SummaryCard
            title={
              isMultipleWeaknesses
                ? `Items Not Purchased`
                : `${weaknessType.charAt(0).toUpperCase() + weaknessType.slice(1)} Not Purchased`
            }
            value={weaknessItemCount.toLocaleString()}
            description={
              isMultipleWeaknesses
                ? `You've made smarter financial choices!`
                : `You saved enough for ${weaknessItemCount.toLocaleString()} ${weaknessType}!`
            }
            icon={
              isMultipleWeaknesses ? (
                <ShoppingBag className="h-4 w-4" />
              ) : (
                <Coffee className="h-4 w-4" />
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default SummaryCards;
