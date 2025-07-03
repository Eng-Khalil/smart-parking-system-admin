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
// Get All Areas
// ---------------------------------------------
export async function getAllAreas() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/areas", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching areas:", error);
    return [];
  }
}

// ---------------------------------------------
// Create an Area
// ---------------------------------------------
export async function createArea(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/areas", data, config);
    revalidatePath("/dashboard/areas");
    return response.data;
  } catch (error: any) {
    console.error("Error creating area:", error);
    throw new Error(error.response?.data?.error || "Failed to create area");
  }
}

// ---------------------------------------------
// Update an Area
// ---------------------------------------------
export async function updateArea(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/areas/${id}`, data, config);
    revalidatePath("/dashboard/areas");
    return response.data;
  } catch (error: any) {
    console.error("Error updating area:", error);
    throw new Error(error.response?.data?.error || "Failed to update area");
  }
}

// ---------------------------------------------
// Delete an Area
// ---------------------------------------------
export async function deleteArea(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/areas/${id}`, config);
    revalidatePath("/dashboard/areas");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting area:", error);
    throw new Error(error.response?.data?.error || "Failed to delete area");
  }
}
