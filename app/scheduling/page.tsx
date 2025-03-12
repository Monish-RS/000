import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ScheduleCalendar } from "@/components/schedule-calendar"
import { CrewAssignments } from "@/components/crew-assignments"
import { DemandForecast } from "@/components/demand-forecast"

export default function SchedulingPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Scheduling" description="AI-powered bus scheduling and duty management" />
      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Schedule Calendar</TabsTrigger>
          <TabsTrigger value="linked">Linked Duty</TabsTrigger>
          <TabsTrigger value="unlinked">Unlinked Duty</TabsTrigger>
          <TabsTrigger value="forecast">Demand Forecast</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Master Schedule Calendar</CardTitle>
              <CardDescription>View and manage the complete bus schedule across all routes</CardDescription>
            </CardHeader>
            <CardContent>
              <ScheduleCalendar />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="linked" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Linked Duty Scheduling</CardTitle>
                  <CardDescription>Assign dedicated crews to buses for entire shifts</CardDescription>
                </div>
                <Button>Create New Assignment</Button>
              </div>
            </CardHeader>
            <CardContent>
              <CrewAssignments type="linked" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unlinked" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Unlinked Duty Scheduling</CardTitle>
                  <CardDescription>Manage crew handovers and rest period assignments</CardDescription>
                </div>
                <Button>Create New Assignment</Button>
              </div>
            </CardHeader>
            <CardContent>
              <CrewAssignments type="unlinked" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forecast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Demand Forecasting</CardTitle>
              <CardDescription>
                Machine learning predictions for passenger demand and optimal bus allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DemandForecast />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

