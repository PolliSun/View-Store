import { TProduct } from "../utils/types";

const BASE_URL = process.env.REACT_APP_API_URL;

const request = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!res.ok) throw res;
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error instanceof Error ? error : new Error("API Error");
  }
};

export const getProductsApi = () => request<TProduct[]>("/products");
