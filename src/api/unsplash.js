import axios from "axios";
const ACCESS_KEY = "Na4JJEtCcUiChPPQzrdn7JQ-PBhdIy7bKAzmptEXryM";
const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (query, page = 1, perPage = 12) => {
  const response = await instance.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  return response.data;
};
