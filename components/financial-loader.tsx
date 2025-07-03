"use client"

import { useState, useEffect } from "react"
import { DollarSign } from "lucide-react"

interface FinancialLoaderProps {
  text?: string
  color?: string
  size?: "small" | "medium" | "large"
}

export default function FinancialLoader({
  text = "Loading",
  color = "#0F766E", // A teal color suitable for finance
  size = "medium",
}: FinancialLoaderProps) {
  const [dots, setDots] = useState("")

  // Animation for the dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Size mapping
  const sizeMap = {
    small: {
      container: "w-48 h-48",
      logo: "w-16 h-16",
      text: "text-sm",
    },
    medium: {
      container: "w-64 h-64",
      logo: "w-24 h-24",
      text: "text-base",
    },
    large: {
      container: "w-80 h-80",
      logo: "w-32 h-32",
      text: "text-lg",
    },
  }

  const selectedSize = sizeMap[size]

  return (
    <div className={`flex flex-col items-center justify-center ${selectedSize.container}`}>
      <div className="relative">
        {/* Logo with circular background */}
        <div
          className={`${selectedSize.logo} rounded-full flex items-center justify-center animate-pulse`}
          style={{ backgroundColor: color }}
        >
          <DollarSign className="text-white w-1/2 h-1/2" />
        </div>

        {/* Spinning circle around the logo */}
        <div
          className={`absolute top-0 left-0 ${selectedSize.logo} rounded-full border-4 border-t-transparent animate-spin`}
          style={{ borderColor: `transparent ${color} ${color} ${color}` }}
        />
      </div>

      {/* Loading text */}
      <div className={`mt-6 font-semibold ${selectedSize.text}`} style={{ color }}>
        {text}
        {dots}
      </div>
    </div>
  )
}
