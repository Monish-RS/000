import type React from "react"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className={cn("flex-1 p-6 container", className)} {...props}>
          <div className="space-y-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

