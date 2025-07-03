// app/actions/savings.ts
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
// Get All Savings
// ---------------------------------------------
export async function getAllSavings() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/savings", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching savings:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Saving
// ---------------------------------------------
export async function createSaving(data: {
  userId: string;
  amount: number;
  savingType:any;
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/savings", data, config);
    revalidatePath("/dashboard/savings");
    return response.data; // contains { saving, walletBalance }
  } catch (error: any) {
    console.error("Error creating saving:", error);
    throw new Error(error.response?.data?.error || "Failed to create saving");
  }
}

// ---------------------------------------------
// Update a Saving
// ---------------------------------------------
export async function updateSaving(id: string, data: {
  amount: number;
  savingType: "REGULAR" | "FIXED";
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/savings/${id}`, data, config);
    revalidatePath("/dashboard/savings");
    return response.data; // contains { updatedSaving, walletBalance }
  } catch (error: any) {
    console.error("Error updating saving:", error);
    throw new Error(error.response?.data?.error || "Failed to update saving");
  }
}

// ---------------------------------------------
// Delete a Saving
// ---------------------------------------------
export async function deleteSaving(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/savings/${id}`, config);
    revalidatePath("/dashboard/savings");
    return response.data; // contains { message, walletBalance }
  } catch (error: any) {
    console.error("Error deleting saving:", error);
    throw new Error(error.response?.data?.error || "Failed to delete saving");
  }
}

export async function getUserSavings() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/savings/user", config); // No userId passed explicitly
    return response.data;
  } catch (error) {
    console.error("Error fetching user savings:", error);
    return null;
  }
}