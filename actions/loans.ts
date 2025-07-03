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
// Get All Loans
// ---------------------------------------------
export async function getAllLoans() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/loans", config);
    return response.data;
  } catch (error) {
    console.error("Error fetching loans:", error);
    return [];
  }
}

// ---------------------------------------------
// Create a Loan
// ---------------------------------------------
export async function createLoan(data: {
  userId: string;
  amount: number;
  rateId: string;
  duration: number;
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.post("/loans", data, config);
    revalidatePath("/dashboard/loans");
    return response.data; // expected: { loan, updatedWalletBalance }
  } catch (error: any) {
    console.error("Error creating loan:", error);
    throw new Error(error.response?.data?.error || "Failed to create loan");
  }
}

// ---------------------------------------------
// Update a Loan
// ---------------------------------------------
export async function updateLoan(id: string, data: {
  amount?: number;
  duration?: number;
  status?: "PENDING" | "APPROVED" | "REJECTED" | "COMPLETED" | "DEFAULTED";
}) {
  try {
    const config = await getAuthHeader();
    const response = await api.put(`/loans/${id}`, data, config);
    revalidatePath("/dashboard/loans");
    return response.data; // expected: { updatedLoan }
  } catch (error: any) {
    console.error("Error updating loan:", error);
    throw new Error(error.response?.data?.error || "Failed to update loan");
  }
}

// ---------------------------------------------
// Delete a Loan
// ---------------------------------------------
export async function deleteLoan(id: string) {
  try {
    const config = await getAuthHeader();
    const response = await api.delete(`/loans/${id}`, config);
    revalidatePath("/dashboard/loans");
    return response.data; // expected: { message }
  } catch (error: any) {
    console.error("Error deleting loan:", error);
    throw new Error(error.response?.data?.error || "Failed to delete loan");
  }
}

// ---------------------------------------------
// Get Loans for Logged-In User
// ---------------------------------------------
export async function getUserLoans() {
  try {
    const config = await getAuthHeader();
    const response = await api.get("/loans/user", config); // assumes endpoint filters by user
    return response.data;
  } catch (error) {
    console.error("Error fetching user loans:", error);
    return null;
  }
}
