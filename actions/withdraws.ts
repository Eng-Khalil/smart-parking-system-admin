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
// Get All withdraws
// ---------------------------------------------
export async function getAllwithdraws() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/withdraws", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching withdraws:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Withdrawal
// ---------------------------------------------
export async function createWithdrawal(data: {
  userId: string;
  amount: number;
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/withdraws", data, config);
    revalidatePath("/dashboard/withdraws");
    return response.data; // contains { withdrawal, walletBalance }
  } catch (error: any) {
    console.error("Error creating withdrawal:", error);
    throw new Error(error.response?.data?.error || "Failed to create withdrawal");
  }
}

// ---------------------------------------------
// Update a Withdrawal
// ---------------------------------------------
export async function updateWithdrawal(id: string, data: {
  amount: number;
  reason: string;
  description?: string;
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/withdraws/${id}`, data, config);
    revalidatePath("/dashboard/withdraws");
    return response.data; // contains { updatedWithdrawal, walletBalance }
  } catch (error: any) {
    console.error("Error updating withdrawal:", error);
    throw new Error(error.response?.data?.error || "Failed to update withdrawal");
  }
}

// ---------------------------------------------
// Delete a Withdrawal
// ---------------------------------------------
export async function deleteWithdrawal(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/withdraws/${id}`, config);
    revalidatePath("/dashboard/withdraws");
    return response.data; // contains { message, walletBalance }
  } catch (error: any) {
    console.error("Error deleting withdrawal:", error);
    throw new Error(error.response?.data?.error || "Failed to delete withdrawal");
  }
}

// ---------------------------------------------
// Get User withdraws
// ---------------------------------------------
export async function getUserwithdraws() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/withdraws/user", config); // No userId passed explicitly
    return response.data;
  } catch (error) {
    console.error("Error fetching user withdraws:", error);
    return null;
  }
}