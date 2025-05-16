import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface InvestmentChartProps {
  data?: Array<{
    year: number;
    value: number;
    realValue: number;
    contribution: number;
  }>;
  title?: string;
  showRealReturns?: boolean;
}

const InvestmentChart = ({
  data = generateSampleData(),
  title = "Investment Growth Over Time",
  showRealReturns = false,
}: InvestmentChartProps) => {
  const [activeView, setActiveView] = useState<"nominal" | "real">(
    showRealReturns ? "real" : "nominal",
  );

  // Update activeView when showRealReturns prop changes
  React.useEffect(() => {
    setActiveView(showRealReturns ? "real" : "nominal");
  }, [showRealReturns]);

  // Make sure we have both nominal and real values in the data
  const chartData = React.useMemo(() => {
    return data.map((item) => ({
      ...item,
      // Ensure realValue is properly calculated if it's not already
      realValue: item.realValue || item.value,
    }));
  }, [data]);

  return (
    <Card className="w-full h-full bg-gradient-to-br from-background to-accent/5 shadow-xl border-0 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl will-change-transform animate-float-slow">
      <CardContent className="p-3 sm:p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {title}
          </h3>
          <Tabs
            defaultValue="nominal"
            value={activeView}
            onValueChange={(value) =>
              setActiveView(value as "nominal" | "real")
            }
            className="w-full md:w-auto"
          >
            <TabsList className="w-full">
              <TabsTrigger
                value="nominal"
                className="flex-1 text-xs sm:text-sm py-1.5"
              >
                Nominal Returns
              </TabsTrigger>
              <TabsTrigger
                value="real"
                className="flex-1 text-xs sm:text-sm py-1.5"
              >
                <span className="hidden sm:inline">
                  Real Returns (Inflation Adjusted)
                </span>
                <span className="sm:hidden">Real Returns</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="h-[250px] sm:h-[300px] md:h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                opacity={0.5}
              />
              <XAxis
                dataKey="year"
                label={{
                  value: "Years",
                  position: "insideBottomRight",
                  offset: -10,
                  fontSize: 12,
                }}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                label={{
                  value: "Value ($)",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 12,
                }}
                tickFormatter={(value) => `${formatCurrency(value)}`}
                tick={{ fontSize: 10 }}
                width={60}
              />
              <Tooltip
                formatter={(value) => [
                  `$${formatCurrency(Number(value))}`,
                  activeView === "nominal" ? "Nominal Value" : "Real Value",
                ]}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Nominal Value"
                stroke="#4361ee"
                strokeWidth={3}
                dot={{ r: 3, fill: "#4361ee", strokeWidth: 1, stroke: "#fff" }}
                activeDot={{
                  r: 6,
                  fill: "#4361ee",
                  strokeWidth: 2,
                  stroke: "#fff",
                  strokeOpacity: 0.8,
                  className: "animate-pulse",
                }}
                hide={activeView !== "nominal"}
              />
              <Line
                type="monotone"
                dataKey="realValue"
                name="Real Value (Inflation Adjusted)"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 3, fill: "#10b981", strokeWidth: 1, stroke: "#fff" }}
                activeDot={{
                  r: 6,
                  fill: "#10b981",
                  strokeWidth: 2,
                  stroke: "#fff",
                  strokeOpacity: 0.8,
                  className: "animate-pulse",
                }}
                hide={activeView !== "real"}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 sm:mt-4 mb-12 sm:mb-20 text-xs sm:text-sm text-gray-500 space-y-2 border-b pb-4 sm:pb-6">
          <div className="flex justify-end">
            <p className="text-right">
              *{" "}
              {activeView === "nominal"
                ? "Nominal returns show growth without accounting for inflation"
                : "Real returns show growth adjusted for inflation"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to format currency values
const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)}K`;
  }
  return value.toFixed(2);
};

// Generate sample data for preview
const generateSampleData = () => {
  const data = [];
  const initialInvestment = 0;
  const monthlyContribution = 500; // This represents the habit savings in the sample data
  const nominalRate = 0.08; // 8% annual return
  const inflationRate = 0.03; // 3% inflation

  // Calculate monthly rates
  const monthlyNominalRate = Math.pow(1 + nominalRate, 1 / 12) - 1;
  const monthlyInflationRate = Math.pow(1 + inflationRate, 1 / 12) - 1;
  const monthlyRealRate =
    (1 + monthlyNominalRate) / (1 + monthlyInflationRate) - 1;

  for (let year = 0; year <= 30; year++) {
    let value, realValue;

    if (year === 0) {
      value = initialInvestment;
      realValue = initialInvestment;
    } else {
      // Calculate using compound interest formula for monthly contributions
      // FV = P(1+r)^n + PMT * [((1+r)^n - 1) / r]
      const months = year * 12;

      // Calculate nominal value
      value =
        initialInvestment * Math.pow(1 + monthlyNominalRate, months) +
        monthlyContribution *
          ((Math.pow(1 + monthlyNominalRate, months) - 1) / monthlyNominalRate);

      // Calculate real value
      realValue =
        initialInvestment * Math.pow(1 + monthlyRealRate, months) +
        monthlyContribution *
          ((Math.pow(1 + monthlyRealRate, months) - 1) / monthlyRealRate);
    }

    // Calculate base contribution (only initial investment)
    const baseContribution = initialInvestment;

    // All monthly contributions are considered habit savings in sample data
    const weaknessContribution = monthlyContribution * 12 * year;

    // Total contribution is base + weakness
    const totalContribution = baseContribution + weaknessContribution;

    data.push({
      year,
      value: Math.round(value),
      realValue: Math.round(realValue),
      contribution: baseContribution,
      weaknessContribution,
      totalContribution,
    });
  }

  return data;
};

export default InvestmentChart;
