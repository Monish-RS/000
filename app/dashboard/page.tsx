import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bus, Users, Clock, AlertTriangle } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentAlerts } from "@/components/recent-alerts"
import { FleetStatus } from "@/components/fleet-status"
import { RouteMap } from "@/components/route-map"
import { PassengerMetrics } from "@/components/passenger-metrics"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Real-time overview of Delhi's bus network operations" />
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fleet">Fleet</TabsTrigger>
          <TabsTrigger value="routes">Routes</TabsTrigger>
          <TabsTrigger value="passengers">Passengers</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Buses</CardTitle>
                <Bus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">+12 from last hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Passengers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">+22% from last hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Delay</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2 min</div>
                <p className="text-xs text-muted-foreground">-0.8 min from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 new since last check</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Live Route Map</CardTitle>
                <CardDescription>Real-time visualization of bus locations and traffic conditions</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RouteMap />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>System notifications requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentAlerts />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Fleet Status</CardTitle>
                <CardDescription>Current operational status of the bus fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <FleetStatus />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Passenger Metrics</CardTitle>
                <CardDescription>Hourly passenger count and trends</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PassengerMetrics />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="fleet" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Management</CardTitle>
              <CardDescription>Detailed view of all buses in the fleet with maintenance status</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fleet management content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="routes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Route Management</CardTitle>
              <CardDescription>Detailed view of all active routes with performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Route management content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="passengers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Passenger Analytics</CardTitle>
              <CardDescription>Detailed passenger flow analysis and demand patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Passenger analytics content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

