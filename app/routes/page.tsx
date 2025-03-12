import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RouteList } from "@/components/route-list"
import { RouteEditor } from "@/components/route-editor"
import { RouteAnalytics } from "@/components/route-analytics"
import { MultimodalConnections } from "@/components/multimodal-connections"

export default function RoutesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Route Management" description="GIS-based route mapping and optimization" />
      <Tabs defaultValue="routes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="routes">Active Routes</TabsTrigger>
          <TabsTrigger value="editor">Route Editor</TabsTrigger>
          <TabsTrigger value="analytics">Route Analytics</TabsTrigger>
          <TabsTrigger value="multimodal">Multimodal Integration</TabsTrigger>
        </TabsList>
        <TabsContent value="routes" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Active Bus Routes</CardTitle>
                  <CardDescription>View and manage all current bus routes in the network</CardDescription>
                </div>
                <Button>Add New Route</Button>
              </div>
            </CardHeader>
            <CardContent>
              <RouteList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="editor" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>GIS-Based Route Editor</CardTitle>
              <CardDescription>Create and modify bus routes with real-time traffic data integration</CardDescription>
            </CardHeader>
            <CardContent>
              <RouteEditor />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Route Performance Analytics</CardTitle>
              <CardDescription>
                Analyze route efficiency, congestion patterns, and optimization opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RouteAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="multimodal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Multimodal Transport Integration</CardTitle>
              <CardDescription>
                Connect bus routes with metro, railway, and other public transport systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MultimodalConnections />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

