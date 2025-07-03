// app/actions/regions.ts
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
// Get All Regions
// ---------------------------------------------
export async function getAllRegions() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/regions", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching regions:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Region
// ---------------------------------------------
export async function createRegion(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/regions", data, config);
    revalidatePath("/dashboard/regions");
    return response.data;
  } catch (error: any) {
    console.error("Error creating region:", error);
    throw new Error(error.response?.data?.error || "Failed to create region");
  }
}

// ---------------------------------------------
// Update a Region
// ---------------------------------------------
export async function updateRegion(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/regions/${id}`, data, config);
    revalidatePath("/dashboard/regions");
    return response.data;
  } catch (error: any) {
    console.error("Error updating region:", error);
    throw new Error(error.response?.data?.error || "Failed to update region");
  }
}

// ---------------------------------------------
// Delete a Region
// ---------------------------------------------
export async function deleteRegion(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/regions/${id}`, config);
    revalidatePath("/dashboard/regions");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting region:", error);
    throw new Error(error.response?.data?.error || "Failed to delete region");
  }
}
