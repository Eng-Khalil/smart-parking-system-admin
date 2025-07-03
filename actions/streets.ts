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
// Get All Streets
// ---------------------------------------------
export async function getAllStreets() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/streets", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching streets:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Street
// ---------------------------------------------
export async function createStreet(data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/streets", data, config);
    revalidatePath("/dashboard/streets");
    return response.data;
  } catch (error: any) {
    console.error("Error creating street:", error);
    throw new Error(error.response?.data?.error || "Failed to create street");
  }
}

// ---------------------------------------------
// Update a Street
// ---------------------------------------------
export async function updateStreet(id: string, data: any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/streets/${id}`, data, config);
    revalidatePath("/dashboard/streets");
    return response.data;
  } catch (error: any) {
    console.error("Error updating street:", error);
    throw new Error(error.response?.data?.error || "Failed to update street");
  }
}

// ---------------------------------------------
// Delete a Street
// ---------------------------------------------
export async function deleteStreet(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/streets/${id}`, config);
    revalidatePath("/dashboard/streets");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting street:", error);
    throw new Error(error.response?.data?.error || "Failed to delete street");
  }
}
