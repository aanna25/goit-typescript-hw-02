import axios, { AxiosResponse } from "axios";

import type { Image } from "../components/App/App.types";

interface UnsplashResponse {
  results: Image[];
  total_pages: number;
}

const BASE_URL = "https://api.unsplash.com";
const API_KEY = import.meta.env.VITE_UNSPLASH_KEY as string;

export const getImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
) => {
  const response: AxiosResponse<UnsplashResponse> = await axios.get(
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
