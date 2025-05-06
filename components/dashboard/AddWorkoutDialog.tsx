"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, MinusCircle, PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

interface AddWorkoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ExerciseItem {
  name: string;
  sets: string;
  reps: string;
  weight: string;
}

export function AddWorkoutDialog({
  open,
  onOpenChange,
}: AddWorkoutDialogProps) {
  const [date, setDate] = useState<Date>();
  const [exercises, setExercises] = useState<ExerciseItem[]>([
    { name: "", sets: "", reps: "", weight: "" },
  ]);

  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", weight: "" }]);
  };

  const removeExercise = (index: number) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  const updateExercise = (
    index: number,
    field: keyof ExerciseItem,
    value: string
  ) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[550px] h-[85vh] max-h-[650px] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>Add New Workout</DialogTitle>
          <DialogDescription>
            Create a new workout routine to add to your planner.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
            <Label htmlFor="workout-name" className="sm:text-right">
              Name
            </Label>
            <Input
              id="workout-name"
              placeholder="Upper Body Strength"
              className="col-span-1 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
            <Label htmlFor="workout-type" className="sm:text-right">
              Type
            </Label>
            <Select>
              <SelectTrigger
                id="workout-type"
                className="col-span-1 sm:col-span-3"
              >
                <SelectValue placeholder="Select workout type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upper">Upper Body</SelectItem>
                <SelectItem value="lower">Lower Body</SelectItem>
                <SelectItem value="push">Push</SelectItem>
                <SelectItem value="pull">Pull</SelectItem>
                <SelectItem value="legs">Legs</SelectItem>
                <SelectItem value="core">Core</SelectItem>
                <SelectItem value="cardio">Cardio</SelectItem>
                <SelectItem value="full-body">Full Body</SelectItem>
                <SelectItem value="split">Split</SelectItem>
                <SelectItem value="hiit">HIIT</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
            <Label htmlFor="difficulty" className="sm:text-right">
              Difficulty
            </Label>
            <Select>
              <SelectTrigger
                id="difficulty"
                className="col-span-1 sm:col-span-3"
              >
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
            <Label htmlFor="duration" className="sm:text-right">
              Duration
            </Label>
            <div className="col-span-1 sm:col-span-3 flex flex-wrap sm:flex-nowrap items-center gap-2">
              <Input
                id="duration"
                type="number"
                placeholder="45"
                className="w-full sm:w-20"
              />
              <Select defaultValue="minutes">
                <SelectTrigger id="duration-unit" className="w-full sm:w-32">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minutes">Minutes</SelectItem>
                  <SelectItem value="hours">Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
            <Label className="sm:text-right">Schedule</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-1 sm:col-span-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-start gap-2 sm:gap-4">
            <Label htmlFor="description" className="sm:text-right pt-2">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Brief description of the workout"
              className="col-span-1 sm:col-span-3 min-h-[80px]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-start gap-2 sm:gap-4 mt-2">
            <div className="sm:text-right pt-2 flex flex-col">
              <Label>Exercises</Label>
              <span className="text-xs text-muted-foreground mt-1">
                Add the exercises for this workout
              </span>
            </div>
            <div className="col-span-1 sm:col-span-3 space-y-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="border rounded-md p-3 space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Exercise {index + 1}</h4>
                    {exercises.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeExercise(index)}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`exercise-name-${index}`}>Name</Label>
                    <Input
                      id={`exercise-name-${index}`}
                      value={exercise.name}
                      onChange={(e) =>
                        updateExercise(index, "name", e.target.value)
                      }
                      placeholder="Bench Press"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor={`exercise-sets-${index}`}>Sets</Label>
                      <Input
                        id={`exercise-sets-${index}`}
                        value={exercise.sets}
                        onChange={(e) =>
                          updateExercise(index, "sets", e.target.value)
                        }
                        placeholder="3"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`exercise-reps-${index}`}>Reps</Label>
                      <Input
                        id={`exercise-reps-${index}`}
                        value={exercise.reps}
                        onChange={(e) =>
                          updateExercise(index, "reps", e.target.value)
                        }
                        placeholder="8-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`exercise-weight-${index}`}>Weight</Label>
                      <Input
                        id={`exercise-weight-${index}`}
                        value={exercise.weight}
                        onChange={(e) =>
                          updateExercise(index, "weight", e.target.value)
                        }
                        placeholder="50 lbs"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 w-full sm:w-auto"
                onClick={addExercise}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Exercise
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button type="submit" className="w-full sm:w-auto">
            Save Workout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
