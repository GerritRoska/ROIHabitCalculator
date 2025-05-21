
import React from 'react';
import { Button } from "@/components/ui/button";

interface WeaknessData {
  id: string;
  cost: number;
  timesPerFrequency: number;
  frequency: string;
}

interface WeaknessItemProps {
  weakness: WeaknessData;
  onRemove: (id: string) => void;
}

export const WeaknessItem = React.memo(({ weakness, onRemove }: WeaknessItemProps) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
      <div>
        <p>{weakness.cost} x {weakness.timesPerFrequency} {weakness.frequency}</p>
      </div>
      <Button onClick={() => onRemove(weakness.id)}>Remove</Button>
    </div>
  );
});

WeaknessItem.displayName = 'WeaknessItem';
