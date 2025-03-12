import { Progress } from "@/components/ui/progress"

export function FleetStatus() {
  const fleetData = {
    total: 1500,
    active: 1248,
    maintenance: 152,
    outOfService: 100,
    fuelTypes: {
      electric: 350,
      cng: 950,
      diesel: 200,
    },
  }

  const activePercentage = (fleetData.active / fleetData.total) * 100
  const maintenancePercentage = (fleetData.maintenance / fleetData.total) * 100
  const outOfServicePercentage = (fleetData.outOfService / fleetData.total) * 100

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Active</span>
          <span className="text-sm text-muted-foreground">{fleetData.active} buses</span>
        </div>
        <Progress value={activePercentage} className="h-2 bg-muted" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">In Maintenance</span>
          <span className="text-sm text-muted-foreground">{fleetData.maintenance} buses</span>
        </div>
        <Progress value={maintenancePercentage} className="h-2 bg-muted" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Out of Service</span>
          <span className="text-sm text-muted-foreground">{fleetData.outOfService} buses</span>
        </div>
        <Progress value={outOfServicePercentage} className="h-2 bg-muted" />
      </div>

      <div className="pt-4">
        <h4 className="text-sm font-medium mb-2">Fuel Type Distribution</h4>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border p-2 text-center">
            <div className="text-lg font-bold">{fleetData.fuelTypes.electric}</div>
            <div className="text-xs text-muted-foreground">Electric</div>
          </div>
          <div className="rounded-lg border p-2 text-center">
            <div className="text-lg font-bold">{fleetData.fuelTypes.cng}</div>
            <div className="text-xs text-muted-foreground">CNG</div>
          </div>
          <div className="rounded-lg border p-2 text-center">
            <div className="text-lg font-bold">{fleetData.fuelTypes.diesel}</div>
            <div className="text-xs text-muted-foreground">Diesel</div>
          </div>
        </div>
      </div>
    </div>
  )
}

