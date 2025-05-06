"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentActivities } from "@/components/dashboard/recent-activities";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  LineChart,
  ListChecks,
  Plus,
  Utensils,
} from "lucide-react";
import { GoalProgress } from "@/components/dashboard/goal-progress";
import { ActivitySummary } from "@/components/dashboard/activity-summary";
import { NutritionTracker } from "@/components/dashboard/nutrition-tracker";
import { WorkoutPlanner } from "@/components/dashboard/workout-planner";
import { AddActivityDialog } from "@/components/dashboard/add-activity-dialog";
import { AddWorkoutDialog } from "@/components/dashboard/AddWorkoutDialog";

export default function Dashboard() {
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false);
  const [isAddWorkoutOpen, setIsAddWorkoutOpen] = useState(false);

  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          text="Track your fitness journey and achieve your goals."
        >
          <Button onClick={() => setIsAddActivityOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Activity
          </Button>
        </DashboardHeader>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Daily Steps
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 18V6m-8 6v6M8 6v4" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,249</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from yesterday
                  </p>
                  <div className="mt-4 h-1 w-full bg-secondary">
                    <div className="h-1 w-[75%] bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    75% of daily goal
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Calories Burned
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">487</div>
                  <p className="text-xs text-muted-foreground">
                    +10.5% from yesterday
                  </p>
                  <div className="mt-4 h-1 w-full bg-secondary">
                    <div className="h-1 w-[60%] bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    60% of daily goal
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Minutes
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from yesterday
                  </p>
                  <div className="mt-4 h-1 w-full bg-secondary">
                    <div className="h-1 w-[70%] bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    70% of daily goal
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Water Intake
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.8L</div>
                  <p className="text-xs text-muted-foreground">
                    +5.2% from yesterday
                  </p>
                  <div className="mt-4 h-1 w-full bg-secondary">
                    <div className="h-1 w-[45%] bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    45% of daily goal
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Activity Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Goal Progress</CardTitle>
                  <CardDescription>
                    Your progress towards fitness goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <GoalProgress />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    You completed 6 activities this week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivities />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Weekly Summary</CardTitle>
                  <CardDescription>
                    Your activity breakdown for the past week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ActivitySummary />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="activities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>
                  View and manage your recent activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Filter by date
                    </Button>
                    <Button variant="outline" size="sm">
                      <LineChart className="mr-2 h-4 w-4" />
                      Activity type
                    </Button>
                  </div>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Activity
                  </Button>
                </div>
                <RecentActivities extended={true} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="nutrition" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Tracker</CardTitle>
                <CardDescription>
                  Track your daily nutrition and calorie intake
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Today
                    </Button>
                    <Button variant="outline" size="sm">
                      <Utensils className="mr-2 h-4 w-4" />
                      Meal type
                    </Button>
                  </div>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Meal
                  </Button>
                </div>
                <NutritionTracker />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="workouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Workout Planner</CardTitle>
                <CardDescription>
                  Plan and track your workout routines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                    <Button variant="outline" size="sm">
                      <ListChecks className="mr-2 h-4 w-4" />
                      Routines
                    </Button>
                  </div>
                  <Button size="sm" onClick={() => setIsAddWorkoutOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> New Workout
                  </Button>
                </div>
                <WorkoutPlanner />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DashboardShell>
      <AddActivityDialog
        open={isAddActivityOpen}
        onOpenChange={setIsAddActivityOpen}
      />
      <AddWorkoutDialog
        open={isAddWorkoutOpen}
        onOpenChange={setIsAddWorkoutOpen}
      />
    </>
  );
}
