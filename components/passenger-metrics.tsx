"use client"

import { useEffect, useRef } from "react"

export function PassengerMetrics() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = chartRef.current.clientWidth
      canvas.height = 300
      chartRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple chart placeholder
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw axes
        ctx.strokeStyle = "#d1d5db"
        ctx.lineWidth = 1

        // X-axis
        ctx.beginPath()
        ctx.moveTo(40, canvas.height - 40)
        ctx.lineTo(canvas.width - 20, canvas.height - 40)
        ctx.stroke()

        // Y-axis
        ctx.beginPath()
        ctx.moveTo(40, 20)
        ctx.lineTo(40, canvas.height - 40)
        ctx.stroke()

        // Draw data
        const hours = ["6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM", "10PM"]
        const data = [15000, 32000, 25000, 27000, 23000, 25000, 35000, 30000, 18000]

        // X-axis labels
        ctx.fillStyle = "#6b7280"
        ctx.font = "10px Arial"
        const xStep = (canvas.width - 60) / (hours.length - 1)

        hours.forEach((hour, i) => {
          const x = 40 + i * xStep
          ctx.fillText(hour, x - 10, canvas.height - 20)
        })

        // Y-axis labels
        const maxData = Math.max(...data)
        const yStep = (canvas.height - 60) / 5

        for (let i = 0; i <= 5; i++) {
          const y = canvas.height - 40 - i * yStep
          const value = Math.round((i / 5) * maxData).toLocaleString()
          ctx.fillText(value, 5, y + 3)
        }

        // Draw line chart
        ctx.strokeStyle = "#0891b2"
        ctx.lineWidth = 2
        ctx.beginPath()

        data.forEach((value, i) => {
          const x = 40 + i * xStep
          const y = canvas.height - 40 - (value / maxData) * (canvas.height - 60)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })

        ctx.stroke()

        // Draw points
        ctx.fillStyle = "#0891b2"

        data.forEach((value, i) => {
          const x = 40 + i * xStep
          const y = canvas.height - 40 - (value / maxData) * (canvas.height - 60)

          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fill()
        })

        // Add title
        ctx.fillStyle = "#111827"
        ctx.font = "14px Arial"
        ctx.fillText("Hourly Passenger Count", 40, 15)
      }
    }

    // Cleanup function
    return function cleanup() {
      if (chartRef.current) {
        const canvas = chartRef.current.querySelector("canvas")
        if (canvas) {
          chartRef.current.removeChild(canvas)
        }
      }
    }
  }, [])

  return (
    <div ref={chartRef} className="h-[300px] w-full rounded-md">
      <div className="flex h-full items-center justify-center text-muted-foreground">Loading passenger metrics...</div>
    </div>
  )
}

