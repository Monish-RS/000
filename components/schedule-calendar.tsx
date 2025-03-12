"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export function ScheduleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"day" | "week" | "month">("week")

  const scheduleItems = [
    { id: 1, route: "Route 42", time: "06:00 - 14:00", crew: "Team A", bus: "DL-1234" },
    { id: 2, route: "Route 15", time: "07:00 - 15:00", crew: "Team B", bus: "DL-5678" },
    { id: 3, route: "Route 29", time: "08:00 - 16:00", crew: "Team C", bus: "DL-9012" },
    { id: 4, route: "Route 7", time: "14:00 - 22:00", crew: "Team D", bus: "DL-3456" },
    { id: 5, route: "Route 21", time: "15:00 - 23:00", crew: "Team E", bus: "DL-7890" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDate(new Date(date ? date.getTime() - 86400000 : Date.now()))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setDate(new Date())}>
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDate(new Date(date ? date.getTime() + 86400000 : Date.now()))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className={view === "day" ? "bg-muted" : ""}
            onClick={() => setView("day")}
          >
            Day
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={view === "week" ? "bg-muted" : ""}
            onClick={() => setView("week")}
          >
            Week
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={view === "month" ? "bg-muted" : ""}
            onClick={() => setView("month")}
          >
            Month
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="md:col-span-5">
          <Card>
            <CardContent className="p-0">
              {view === "month" ? (
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              ) : (
                <div className="p-4">
                  <h3 className="font-medium mb-4">
                    {date?.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h3>
                  <div className="space-y-2">
                    {scheduleItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between rounded-lg border p-3 text-sm">
                        <div>
                          <div className="font-medium">{item.route}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                        <div className="text-right">
                          <div>{item.crew}</div>
                          <div className="text-xs text-muted-foreground">Bus: {item.bus}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Schedule Details</h3>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
              {date && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium">Selected Date</h4>
                    <p className="text-sm text-muted-foreground">
                      {date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Active Schedules</h4>
                    <p className="text-sm text-muted-foreground">{scheduleItems.length} schedules</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Buses Assigned</h4>
                    <p className="text-sm text-muted-foreground">{scheduleItems.length} buses</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Crews on Duty</h4>
                    <p className="text-sm text-muted-foreground">{scheduleItems.length} crews</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

