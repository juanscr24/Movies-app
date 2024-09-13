import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "0b79b8b65d9d987d01dcf04fa9b1bc28",
    lenguage: "es",
  },
});
