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
export async function getAllDeposits() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/deposits", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching deposits:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Saving
// ---------------------------------------------
export async function createDeposit({data}:any) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/deposits", data, config);
    revalidatePath("/dashboard/user/deposits");
    return response.data; // contains { saving, walletBalance }
  } catch (error: any) {
    console.error("Error creating deposit:", error);
    throw new Error(error.response?.data?.error || "Failed to make deposit");
  }
}

// ---------------------------------------------
// Update a Saving
// ---------------------------------------------
export async function updateDeposit(id: string, data:any) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/deposits/${id}`, data, config);
    revalidatePath("/dashboard/user/deposits");
    return response.data; // contains { updatedSaving, walletBalance }
  } catch (error: any) {
    console.error("Error updating deposit:", error);
    throw new Error(error.response?.data?.error || "Failed to update deposit");
  }
}

// ---------------------------------------------
// Delete a Saving
// ---------------------------------------------
export async function deleteDeposit(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/deposits/${id}`, config);
    revalidatePath("/dashboard/user/deposits");
    return response.data; // contains { message, walletBalance }
  } catch (error: any) {
    console.error("Error deleting deposit:", error);
    throw new Error(error.response?.data?.error || "Failed to delete deposit");
  }
}

// export async function getUserDeposits() {
//   try {
//     const config = await getAuthHeader();
//     const response = await api.get("/savings/user", config); // No userId passed explicitly
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user savings:", error);
//     return null;
//   }
// }