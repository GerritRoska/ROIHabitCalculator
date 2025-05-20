import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CalculatorPanel from "./calculator/CalculatorPanel";

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardContent className="p-6">
          <CalculatorPanel />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;