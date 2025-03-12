import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Train, Bus, Plane } from "lucide-react"

export function MultimodalConnections() {
  const connections = [
    {
      id: 1,
      busRoute: "Route 42",
      connectsWith: "Metro Line 1",
      type: "metro",
      location: "Connaught Place",
      transferTime: "5 min",
      status: "active",
    },
    {
      id: 2,
      busRoute: "Route 15",
      connectsWith: "Metro Line 2",
      type: "metro",
      location: "Karol Bagh",
      transferTime: "7 min",
      status: "active",
    },
    {
      id: 3,
      busRoute: "Route 29",
      connectsWith: "Railway Station",
      type: "railway",
      location: "New Delhi Railway Station",
      transferTime: "10 min",
      status: "active",
    },
    {
      id: 4,
      busRoute: "Route 7",
      connectsWith: "Metro Line 3",
      type: "metro",
      location: "Rohini",
      transferTime: "6 min",
      status: "active",
    },
    {
      id: 5,
      busRoute: "Route 36",
      connectsWith: "Airport Express",
      type: "airport",
      location: "IGI Airport",
      transferTime: "15 min",
      status: "planned",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "metro":
        return <Train className="h-4 w-4" />
      case "railway":
        return <Train className="h-4 w-4" />
      case "airport":
        return <Plane className="h-4 w-4" />
      default:
        return <Bus className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "planned":
        return <Badge variant="outline">Planned</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Bus Route</TableHead>
          <TableHead>Connects With</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Transfer Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {connections.map((connection) => (
          <TableRow key={connection.id}>
            <TableCell className="font-medium">{connection.busRoute}</TableCell>
            <TableCell>{connection.connectsWith}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {getTypeIcon(connection.type)}
                <span className="capitalize">{connection.type}</span>
              </div>
            </TableCell>
            <TableCell>{connection.location}</TableCell>
            <TableCell>{connection.transferTime}</TableCell>
            <TableCell>{getStatusBadge(connection.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

