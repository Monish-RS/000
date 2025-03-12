import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface CrewAssignmentsProps {
  type: "linked" | "unlinked"
}

export function CrewAssignments({ type }: CrewAssignmentsProps) {
  const linkedAssignments = [
    { id: 1, crew: "Team A", bus: "DL-1234", route: "Route 42", shift: "06:00 - 14:00", status: "active" },
    { id: 2, crew: "Team B", bus: "DL-5678", route: "Route 15", shift: "07:00 - 15:00", status: "active" },
    { id: 3, crew: "Team C", bus: "DL-9012", route: "Route 29", shift: "08:00 - 16:00", status: "active" },
    { id: 4, crew: "Team D", bus: "DL-3456", route: "Route 7", shift: "14:00 - 22:00", status: "scheduled" },
    { id: 5, crew: "Team E", bus: "DL-7890", route: "Route 21", shift: "15:00 - 23:00", status: "scheduled" },
  ]

  const unlinkedAssignments = [
    {
      id: 1,
      crew: "Driver A / Conductor X",
      bus: "DL-1234",
      route: "Route 42",
      shift: "06:00 - 10:00",
      status: "active",
      handover: "10:00",
    },
    {
      id: 2,
      crew: "Driver B / Conductor Y",
      bus: "DL-1234",
      route: "Route 42",
      shift: "10:00 - 14:00",
      status: "scheduled",
      handover: "14:00",
    },
    {
      id: 3,
      crew: "Driver C / Conductor Z",
      bus: "DL-5678",
      route: "Route 15",
      shift: "07:00 - 11:00",
      status: "active",
      handover: "11:00",
    },
    {
      id: 4,
      crew: "Driver D / Conductor W",
      bus: "DL-5678",
      route: "Route 15",
      shift: "11:00 - 15:00",
      status: "scheduled",
      handover: "15:00",
    },
    {
      id: 5,
      crew: "Driver E / Conductor V",
      bus: "DL-9012",
      route: "Route 29",
      shift: "08:00 - 12:00",
      status: "active",
      handover: "12:00",
    },
  ]

  const assignments = type === "linked" ? linkedAssignments : unlinkedAssignments

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "scheduled":
        return <Badge variant="outline">Scheduled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Crew</TableHead>
          <TableHead>Bus</TableHead>
          <TableHead>Route</TableHead>
          <TableHead>Shift</TableHead>
          {type === "unlinked" && <TableHead>Handover</TableHead>}
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assignments.map((assignment) => (
          <TableRow key={assignment.id}>
            <TableCell className="font-medium">{assignment.crew}</TableCell>
            <TableCell>{assignment.bus}</TableCell>
            <TableCell>{assignment.route}</TableCell>
            <TableCell>{assignment.shift}</TableCell>
            {type === "unlinked" && <TableCell>{(assignment as any).handover}</TableCell>}
            <TableCell>{getStatusBadge(assignment.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

