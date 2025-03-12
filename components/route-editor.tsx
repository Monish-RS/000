"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Route, Plus, Save } from "lucide-react"

export function RouteEditor() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = 400
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple map placeholder
        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some roads
        ctx.strokeStyle = "#d1d5db"
        ctx.lineWidth = 3

        // Horizontal roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, i * 80)
          ctx.lineTo(canvas.width, i * 80)
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(i * 120, 0)
          ctx.lineTo(i * 120, canvas.height)
          ctx.stroke()
        }

        // Draw route
        ctx.strokeStyle = "#0891b2"
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.moveTo(40, 80)
        ctx.lineTo(120, 80)
        ctx.lineTo(120, 160)
        ctx.lineTo(240, 160)
        ctx.lineTo(240, 240)
        ctx.lineTo(360, 240)
        ctx.lineTo(360, 320)
        ctx.lineTo(480, 320)
        ctx.stroke()

        // Draw stops
        ctx.fillStyle = "#0891b2"
        const stops = [
          { x: 40, y: 80 },
          { x: 120, y: 80 },
          { x: 120, y: 160 },
          { x: 240, y: 160 },
          { x: 240, y: 240 },
          { x: 360, y: 240 },
          { x: 360, y: 320 },
          { x: 480, y: 320 },
        ]

        stops.forEach((stop) => {
          ctx.beginPath()
          ctx.arc(stop.x, stop.y, 6, 0, Math.PI * 2)
          ctx.fill()
        })

        // Add text
        ctx.fillStyle = "#111827"
        ctx.font = "14px Arial"
        ctx.fillText("Route Editor", 20, 30)
        ctx.fillText("Click to add stops", canvas.width - 150, 30)
      }
    }

    // Cleanup function
    return function cleanup() {
      if (mapRef.current) {
        const canvas = mapRef.current.querySelector("canvas")
        if (canvas) {
          mapRef.current.removeChild(canvas)
        }
      }
    }
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="route-name">Route Name</Label>
            <Input id="route-name" placeholder="Enter route name" defaultValue="Route 42" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="start-point">Start Point</Label>
            <Input id="start-point" placeholder="Enter start point" defaultValue="Connaught Place" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-point">End Point</Label>
            <Input id="end-point" placeholder="Enter end point" defaultValue="Nehru Place" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stops">Number of Stops</Label>
            <Input id="stops" type="number" defaultValue="8" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="distance">Total Distance (km)</Label>
            <Input id="distance" type="number" defaultValue="12.5" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="travel-time">Estimated Travel Time (min)</Label>
            <Input id="travel-time" type="number" defaultValue="45" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="buses">Buses Required</Label>
            <Input id="buses" type="number" defaultValue="25" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="frequency">Peak Hour Frequency (min)</Label>
            <Input id="frequency" type="number" defaultValue="10" />
          </div>
          <div className="pt-5 flex justify-end space-x-2">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" /> Add Stop
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" /> Save Route
            </Button>
          </div>
        </div>
      </div>

      <div ref={mapRef} className="h-[400px] w-full rounded-md border mt-4">
        <div className="flex h-full items-center justify-center text-muted-foreground">Loading map editor...</div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="text-sm text-muted-foreground">
          Click on the map to add stops. Drag stops to reposition them.
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" /> Add Waypoint
          </Button>
          <Button variant="outline" size="sm">
            <Route className="h-4 w-4 mr-2" /> Optimize Route
          </Button>
        </div>
      </div>
    </div>
  )
}

