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
// Get All Wallets (Admin or System-wide Access)
// ---------------------------------------------
export async function getAllWallets() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/wallets", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching wallets:", error);
    return [];
  }
}

// ---------------------------------------------
// Get Logged-in User's Wallet
// ---------------------------------------------
export async function getUserWallet() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/wallets/user", config); // your API should resolve user from token
    return response.data;
  } catch (error) {
    console.error("Error fetching user wallet:", error);
    return null;
  }
}

// ---------------------------------------------
// Create Wallet
// ---------------------------------------------
export async function createWallet(data: {
  accountNumber: string;
  userId: string;
  balance?: number;
  interestRate?: number;
  minimumBalance?: number;
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/wallets", data, config);
    revalidatePath("/dashboard/wallets");
    return response.data;
  } catch (error: any) {
    console.error("Error creating wallet:", error);
    throw new Error(error.response?.data?.error || "Failed to create wallet");
  }
}

// ---------------------------------------------
// Update Wallet
// ---------------------------------------------
export async function updateWallet(id: string, data: Partial<{
  accountNumber: string;
  balance: number;
  interestRate: number;
  minimumBalance: number;
  status: "ACTIVE" | "INACTIVE" | "BLOCKED"; // Assuming AccountStatus enum
}>) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/wallets/${id}`, data, config);
    revalidatePath("/dashboard/wallets");
    return response.data;
  } catch (error: any) {
    console.error("Error updating wallet:", error);
    throw new Error(error.response?.data?.error || "Failed to update wallet");
  }
}

// ---------------------------------------------
// Delete Wallet
// ---------------------------------------------
export async function deleteWallet(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/wallets/${id}`, config);
    revalidatePath("/dashboard/wallets");
    return response.data;
  } catch (error: any) {
    console.error("Error deleting wallet:", error);
    throw new Error(error.response?.data?.error || "Failed to delete wallet");
  }
}
