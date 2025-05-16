
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Save, Compare, X } from 'lucide-react';

interface SavedHabit {
  id: string;
  name: string;
  cost: number;
  frequency: string;
  timesPerFrequency: number;
  type: string;
  savedAmount: number;
}

export default function SavedHabitsComparison() {
  const [savedHabits, setSavedHabits] = useState<SavedHabit[]>([]);
  const [habitName, setHabitName] = useState('');
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);

  const handleSaveHabit = (habit: Omit<SavedHabit, 'id'>) => {
    setSavedHabits([...savedHabits, { ...habit, id: Date.now().toString() }]);
  };

  const handleDeleteHabit = (id: string) => {
    setSavedHabits(savedHabits.filter(habit => habit.id !== id));
    setSelectedHabits(selectedHabits.filter(habitId => habitId !== id));
  };

  return (
    <div className="mt-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            <Compare className="w-4 h-4 mr-2" />
            Compare Saved Habits
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Saved Habits Comparison</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {savedHabits.map((habit) => (
              <Card key={habit.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{habit.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Saves ${habit.savedAmount.toLocaleString()} per year
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteHabit(habit.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
