// app/api/logout/route.ts

import { logoutUser } from "@/actions/auth"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    await logoutUser()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout failed:", error)
    return NextResponse.json({ success: false, error: "Logout failed" }, { status: 500 })
  }
}
