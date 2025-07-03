"use client"

import { useEffect, useState } from "react"

interface SimpleFinancialLoaderProps {
  logoText?: string
  text?: string
  color?: string
}

export default function SimpleFinancialLoader({
  logoText = "FIN",
  text = "Loading",
  color = "#0EA5E9", // Teal
}: SimpleFinancialLoaderProps) {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-64 w-full">
      {/* Logo Circle */}
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl animate-pulse" style={{ backgroundColor: color }}>
          {logoText}
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: `transparent ${color} ${color} ${color}` }} />
      </div>

      {/* Loading Text */}
      <p className="text-md font-semibold" style={{ color }}>
        {text}
        {dots}
      </p>
    </div>
  )
}
