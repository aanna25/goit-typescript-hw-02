import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const getImages = async (query, page = 1, perPage = 12) => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });
  return data;
};
