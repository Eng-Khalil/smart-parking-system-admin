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
// Get All Cities
// ---------------------------------------------
export async function getAllCities() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/cities", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a City
// ---------------------------------------------
export async function createCity(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/cities", data, config);
    revalidatePath("/dashboard/cities");
    return response.data;
  } catch (error: any) {
    console.error("Error creating city:", error);
    throw new Error(error.response?.data?.error || "Failed to create city");
  }
}

// ---------------------------------------------
// Update a City
// ---------------------------------------------
export async function updateCity(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/cities/${id}`, data, config);
    revalidatePath("/dashboard/cities");
    return response.data;
  } catch (error: any) {
    console.error("Error updating city:", error);
    throw new Error(error.response?.data?.error || "Failed to update city");
  }
}

// ---------------------------------------------
// Delete a City
// ---------------------------------------------
export async function deleteCity(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/cities/${id}`, config);
    revalidatePath("/dashboard/cities");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting city:", error);
    throw new Error(error.response?.data?.error || "Failed to delete city");
  }
}
