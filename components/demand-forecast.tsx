"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DemandForecast() {
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
        const hours = ["6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM", "10PM"]
        const actualData = [15000, 32000, 25000, 27000, 23000, 25000, 35000, 30000, 18000]
        const forecastData = [16000, 34000, 26000, 25000, 22000, 27000, 37000, 31000, 19000]

        // X-axis labels
        ctx.fillStyle = "#6b7280"
        ctx.font = "10px Arial"
        const xStep = (canvas.width - 60) / (hours.length - 1)

        hours.forEach((hour, i) => {
          const x = 40 + i * xStep
          ctx.fillText(hour, x - 10, canvas.height - 20)
        })

        // Y-axis labels
        const maxData = Math.max(...actualData, ...forecastData)
        const yStep = (canvas.height - 60) / 5

        for (let i = 0; i <= 5; i++) {
          const y = canvas.height - 40 - i * yStep
          const value = Math.round((i / 5) * maxData).toLocaleString()
          ctx.fillText(value, 5, y + 3)
        }

        // Draw actual data line
        ctx.strokeStyle = "#0891b2"
        ctx.lineWidth = 2
        ctx.beginPath()

        actualData.forEach((value, i) => {
          const x = 40 + i * xStep
          const y = canvas.height - 40 - (value / maxData) * (canvas.height - 60)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })

        ctx.stroke()

        // Draw forecast data line
        ctx.strokeStyle = "#f59e0b"
        ctx.setLineDash([5, 5])
        ctx.beginPath()

        forecastData.forEach((value, i) => {
          const x = 40 + i * xStep
          const y = canvas.height - 40 - (value / maxData) * (canvas.height - 60)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })

        ctx.stroke()
        ctx.setLineDash([])

        // Add legend
        ctx.fillStyle = "#111827"
        ctx.font = "12px Arial"
        ctx.fillText("Actual", canvas.width - 100, 30)
        ctx.fillText("Forecast", canvas.width - 100, 50)

        ctx.strokeStyle = "#0891b2"
        ctx.beginPath()
        ctx.moveTo(canvas.width - 150, 30)
        ctx.lineTo(canvas.width - 110, 30)
        ctx.stroke()

        ctx.strokeStyle = "#f59e0b"
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(canvas.width - 150, 50)
        ctx.lineTo(canvas.width - 110, 50)
        ctx.stroke()
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
      <Tabs defaultValue="passenger">
        <TabsList>
          <TabsTrigger value="passenger">Passenger Demand</TabsTrigger>
          <TabsTrigger value="route">Route Analysis</TabsTrigger>
          <TabsTrigger value="time">Time-based Patterns</TabsTrigger>
        </TabsList>
        <TabsContent value="passenger">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">AI-Powered Passenger Demand Forecast</h3>
              <div ref={chartRef} className="h-[300px] w-full rounded-md">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Loading forecast data...
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Peak Hour Prediction</div>
                  <div className="text-2xl font-bold mt-1">6:00 PM</div>
                  <div className="text-xs text-muted-foreground">Expected 37,000 passengers</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Recommended Fleet Size</div>
                  <div className="text-2xl font-bold mt-1">320 buses</div>
                  <div className="text-xs text-muted-foreground">+15 from current allocation</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Forecast Accuracy</div>
                  <div className="text-2xl font-bold mt-1">94.2%</div>
                  <div className="text-xs text-muted-foreground">Based on historical data</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="route">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Route-based Demand Analysis</h3>
              <p className="text-muted-foreground">Route analysis content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="time">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Time-based Pattern Analysis</h3>
              <p className="text-muted-foreground">Time-based pattern analysis content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

