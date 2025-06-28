import axios, { AxiosResponse } from "axios";

import type { UnsplashImage } from "../components/App/App.types";

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}

const BASE_URL = "https://api.unsplash.com";
const API_KEY = import.meta.env.VITE_UNSPLASH_KEY as string;

export const getImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    `${BASE_URL}/search/photos`,
    {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: API_KEY,
      },
    }
  );
  return response.data;
};
