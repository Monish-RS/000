"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RouteAnalytics() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = chartRef.current.clientWidth
      canvas.height = 300
      chartRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple chart placeholder
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw axes
        ctx.strokeStyle = "#d1d5db"
        ctx.lineWidth = 1

        // X-axis
        ctx.beginPath()
        ctx.moveTo(40, canvas.height - 40)
        ctx.lineTo(canvas.width - 20, canvas.height - 40)
        ctx.stroke()

        // Y-axis
        ctx.beginPath()
        ctx.moveTo(40, 20)
        ctx.lineTo(40, canvas.height - 40)
        ctx.stroke()

        // Draw data
        const routes = ["R42", "R15", "R29", "R7", "R21", "R36", "R18"]
        const congestionData = [25, 75, 45, 20, 15, 80, 50]

        // X-axis labels
        ctx.fillStyle = "#6b7280"
        ctx.font = "10px Arial"
        const xStep = (canvas.width - 60) / (routes.length - 1)

        routes.forEach((route, i) => {
          const x = 40 + i * xStep
          ctx.fillText(route, x - 10, canvas.height - 20)
        })

        // Y-axis labels
        const maxData = 100
        const yStep = (canvas.height - 60) / 5

        for (let i = 0; i <= 5; i++) {
          const y = canvas.height - 40 - i * yStep
          const value = Math.round((i / 5) * maxData) + "%"
          ctx.fillText(value, 5, y + 3)
        }

        // Draw bar chart
        congestionData.forEach((value, i) => {
          const x = 40 + i * xStep - 15
          const y = canvas.height - 40 - (value / maxData) * (canvas.height - 60)
          const height = (value / maxData) * (canvas.height - 60)

          // Color based on congestion level
          if (value < 30) {
            ctx.fillStyle = "rgba(34, 197, 94, 0.6)" // green
          } else if (value < 60) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.6)" // amber
          } else {
            ctx.fillStyle = "rgba(239, 68, 68, 0.6)" // red
          }

          ctx.fillRect(x, y, 30, height)
          ctx.strokeStyle = "#d1d5db"
          ctx.strokeRect(x, y, 30, height)
        })

        // Add title
        ctx.fillStyle = "#111827"
        ctx.font = "14px Arial"
        ctx.fillText("Route Congestion Analysis", 40, 15)
      }
    }

    // Cleanup function
    return function cleanup() {
      if (chartRef.current) {
        const canvas = chartRef.current.querySelector("canvas")
        if (canvas) {
          chartRef.current.removeChild(canvas)
        }
      }
    }
  }, [])

  return (
    <div className="space-y-4">
      <Tabs defaultValue="congestion">
        <TabsList>
          <TabsTrigger value="congestion">Congestion</TabsTrigger>
          <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>
        <TabsContent value="congestion">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Route Congestion Analysis</h3>
              <div ref={chartRef} className="h-[300px] w-full rounded-md">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Loading congestion data...
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Most Congested Route</div>
                  <div className="text-2xl font-bold mt-1">Route 36</div>
                  <div className="text-xs text-muted-foreground">80% congestion level</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Least Congested Route</div>
                  <div className="text-2xl font-bold mt-1">Route 21</div>
                  <div className="text-xs text-muted-foreground">15% congestion level</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Average Congestion</div>
                  <div className="text-2xl font-bold mt-1">44.3%</div>
                  <div className="text-xs text-muted-foreground">Across all routes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="efficiency">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Route Efficiency Analysis</h3>
              <p className="text-muted-foreground">Route efficiency analysis content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="optimization">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Route Optimization Opportunities</h3>
              <p className="text-muted-foreground">Route optimization content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

