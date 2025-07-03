"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// ---------------------------------------------
// Axios Setup
// ---------------------------------------------
const BASE_API_URL = process.env.API_URL || "";
const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// ---------------------------------------------
// Auth Header Helper
// ---------------------------------------------
async function getAuthHeader() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  if (!accessToken) throw new Error("Unauthorized: Missing access token");

  return {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  };
}

// ---------------------------------------------
// Get All Bookings
// ---------------------------------------------
export async function getAllBookings() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/bookings", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Booking
// ---------------------------------------------
export async function createBooking(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/bookings", data, config);
    revalidatePath("/dashboard/bookings");
    return response.data;
  } catch (error: any) {
    console.error("Error creating booking:", error);
    throw new Error(error.response?.data?.error || "Failed to create booking");
  }
}

// ---------------------------------------------
// Update a Booking
// ---------------------------------------------
export async function updateBooking(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/bookings/${id}`, data, config);
    revalidatePath("/dashboard/bookings");
    return response.data;
  } catch (error: any) {
    console.error("Error updating booking:", error);
    throw new Error(error.response?.data?.error || "Failed to update booking");
  }
}

// ---------------------------------------------
// Delete a Booking
// ---------------------------------------------
export async function deleteBooking(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/bookings/${id}`, config);
    revalidatePath("/dashboard/bookings");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting booking:", error);
    throw new Error(error.response?.data?.error || "Failed to delete booking");
  }
}

// ---------------------------------------------
// Get Booking By ID
// ---------------------------------------------
export async function getBookingById(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.get(`/bookings/${id}`, config);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching booking ${id}:`, error);
    throw new Error(
      error.response?.data?.error || `Failed to fetch booking with ID ${id}`
    );
  }
}

// ---------------------------------------------
// Update Booking Status
// ---------------------------------------------
export async function updateBookingStatus(id: string, status: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.patch(
      `/bookings/${id}/status`,
      { status },
      config
    );

    // Optional: Revalidate relevant paths after update
    revalidatePath(`/dashboard/bookings`);
    revalidatePath(`/dashboard/bookings/${id}`);
    
    return response.data;
  } catch (error: any) {
    console.error(`Error updating booking status for ${id}:`, error);
    throw new Error(
      error.response?.data?.error || "Failed to update booking status"
    );
  }
}
