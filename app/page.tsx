import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bus, Calendar, MapPin, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bus className="h-6 w-6" />
            <span className="text-xl font-bold">Delhi Bus Management</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/scheduling" className="text-sm font-medium">
              Scheduling
            </Link>
            <Link href="/routes" className="text-sm font-medium">
              Routes
            </Link>
            <Link href="/fleet" className="text-sm font-medium">
              Fleet
            </Link>
            <Link href="/analytics" className="text-sm font-medium">
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Intelligent Automated Bus Scheduling and Route Management
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Optimize Delhi's public bus network through real-time data integration, AI-driven scheduling, and
                  seamless commuter services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
                <Link href="/scheduling">
                  <Button variant="outline">Manage Schedules</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted p-2 w-10 h-10 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Intelligent Scheduling</h3>
                  <p className="text-muted-foreground">
                    AI-powered scheduling with linked and unlinked duty management, optimizing crew assignments and rest
                    periods.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted p-2 w-10 h-10 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Route Optimization</h3>
                  <p className="text-muted-foreground">
                    GIS-based route mapping with real-time traffic analysis to identify congestion and suggest
                    alternative paths.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted p-2 w-10 h-10 flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Passenger Experience</h3>
                  <p className="text-muted-foreground">
                    Real-time bus tracking, online booking, and contactless payment options for a seamless commuter
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Delhi Bus Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

