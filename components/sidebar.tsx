"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Bus, LayoutDashboard, Calendar, MapPin, Users, BarChart3, Settings, LogOut } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Bus className="h-6 w-6" />
            <span>Delhi Bus Management</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/dashboard" && "text-primary bg-muted",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/scheduling"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/scheduling" && "text-primary bg-muted",
              )}
            >
              <Calendar className="h-4 w-4" />
              Scheduling
            </Link>
            <Link
              href="/routes"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/routes" && "text-primary bg-muted",
              )}
            >
              <MapPin className="h-4 w-4" />
              Routes
            </Link>
            <Link
              href="/fleet"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/fleet" && "text-primary bg-muted",
              )}
            >
              <Bus className="h-4 w-4" />
              Fleet
            </Link>
            <Link
              href="/passengers"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/passengers" && "text-primary bg-muted",
              )}
            >
              <Users className="h-4 w-4" />
              Passengers
            </Link>
            <Link
              href="/analytics"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/analytics" && "text-primary bg-muted",
              )}
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all",
                pathname === "/settings" && "text-primary bg-muted",
              )}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-all">
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

