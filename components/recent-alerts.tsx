import { AlertTriangle, Clock, MapPin, Bus } from "lucide-react"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      type: "delay",
      message: "Route 42 experiencing delays due to traffic congestion",
      time: "10 minutes ago",
      icon: Clock,
      severity: "medium",
    },
    {
      id: 2,
      type: "congestion",
      message: "Heavy traffic detected on Nehru Place route",
      time: "15 minutes ago",
      icon: MapPin,
      severity: "high",
    },
    {
      id: 3,
      type: "maintenance",
      message: "Bus #DL-1234 requires immediate maintenance",
      time: "30 minutes ago",
      icon: Bus,
      severity: "high",
    },
    {
      id: 4,
      type: "system",
      message: "Schedule update completed for South Delhi routes",
      time: "1 hour ago",
      icon: AlertTriangle,
      severity: "low",
    },
    {
      id: 5,
      type: "delay",
      message: "Route 15 delayed by 10 minutes at Connaught Place",
      time: "1 hour ago",
      icon: Clock,
      severity: "medium",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-500 bg-red-50"
      case "medium":
        return "text-amber-500 bg-amber-50"
      case "low":
        return "text-green-500 bg-green-50"
      default:
        return "text-blue-500 bg-blue-50"
    }
  }

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div className={`rounded-full p-2 ${getSeverityColor(alert.severity)}`}>
            <alert.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">{alert.message}</p>
            <p className="text-xs text-muted-foreground">{alert.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

