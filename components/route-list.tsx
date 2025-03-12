import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RouteList() {
  const routes = [
    {
      id: 1,
      name: "Route 42",
      start: "Connaught Place",
      end: "Nehru Place",
      buses: 25,
      status: "active",
      congestion: "low",
    },
    { id: 2, name: "Route 15", start: "Saket", end: "Karol Bagh", buses: 18, status: "active", congestion: "high" },
    {
      id: 3,
      name: "Route 29",
      start: "Dwarka",
      end: "Lajpat Nagar",
      buses: 22,
      status: "active",
      congestion: "medium",
    },
    { id: 4, name: "Route 7", start: "Rohini", end: "Vasant Kunj", buses: 15, status: "active", congestion: "low" },
    {
      id: 5,
      name: "Route 21",
      start: "Janakpuri",
      end: "Mayur Vihar",
      buses: 20,
      status: "maintenance",
      congestion: "low",
    },
    { id: 6, name: "Route 36", start: "Noida", end: "Gurgaon", buses: 30, status: "active", congestion: "high" },
    {
      id: 7,
      name: "Route 18",
      start: "Shahdara",
      end: "Punjabi Bagh",
      buses: 12,
      status: "active",
      congestion: "medium",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "maintenance":
        return <Badge variant="secondary">Maintenance</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getCongestionBadge = (congestion: string) => {
    switch (congestion) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return (
          <Badge variant="secondary" className="bg-amber-500">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Low
          </Badge>
        )
      default:
        return <Badge variant="outline">{congestion}</Badge>
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Route</TableHead>
          <TableHead>Start Point</TableHead>
          <TableHead>End Point</TableHead>
          <TableHead>Buses Assigned</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Congestion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {routes.map((route) => (
          <TableRow key={route.id}>
            <TableCell className="font-medium">{route.name}</TableCell>
            <TableCell>{route.start}</TableCell>
            <TableCell>{route.end}</TableCell>
            <TableCell>{route.buses}</TableCell>
            <TableCell>{getStatusBadge(route.status)}</TableCell>
            <TableCell>{getCongestionBadge(route.congestion)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

