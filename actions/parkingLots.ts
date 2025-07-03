"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

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
// Get All Parking Lots
// ---------------------------------------------
export async function getAllParkingLots() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/parking-lots", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching parking lots:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Parking Lot
// ---------------------------------------------
export async function createParkingLot(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/parking-lots", data, config);
    revalidatePath("/dashboard/parking-lots");
    return response.data;
  } catch (error: any) {
    console.error("Error creating parking lot:", error);
    throw new Error(error.response?.data?.error || "Failed to create parking lot");
  }
}

// ---------------------------------------------
// Update a Parking Lot
// ---------------------------------------------
export async function updateParkingLot(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/parking-lots/${id}`, data, config);
    revalidatePath("/dashboard/parking-lots");
    return response.data;
  } catch (error: any) {
    console.error("Error updating parking lot:", error);
    throw new Error(error.response?.data?.error || "Failed to update parking lot");
  }
}

// ---------------------------------------------
// Delete a Parking Lot
// ---------------------------------------------
export async function deleteParkingLot(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/parking-lots/${id}`, config);
    revalidatePath("/dashboard/parking-lots");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting parking lot:", error);
    throw new Error(error.response?.data?.error || "Failed to delete parking lot");
  }
}
