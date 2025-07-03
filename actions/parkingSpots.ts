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
// Get All Parking Spots
// ---------------------------------------------
export async function getAllParkingSpots() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/parking-spots", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching parking spots:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Parking Spot
// ---------------------------------------------
export async function createParkingSpot(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/parking-spots", data, config);
    revalidatePath("/dashboard/parking-spots");
    return response.data;
  } catch (error: any) {
    console.error("Error creating parking spot:", error);
    throw new Error(error.response?.data?.error || "Failed to create parking spot");
  }
}

// ---------------------------------------------
// Update a Parking Spot
// ---------------------------------------------
export async function updateParkingSpot(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/parking-spots/${id}`, data, config);
    revalidatePath("/dashboard/parking-spots");
    return response.data;
  } catch (error: any) {
    console.error("Error updating parking spot:", error);
    throw new Error(error.response?.data?.error || "Failed to update parking spot");
  }
}

// ---------------------------------------------
// Delete a Parking Spot
// ---------------------------------------------
export async function deleteParkingSpot(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/parking-spots/${id}`, config);
    revalidatePath("/dashboard/parking-spots");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting parking spot:", error);
    throw new Error(error.response?.data?.error || "Failed to delete parking spot");
  }
}
