export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  poster: string;
  backdrop: string;
  releaseDate: Date;
}

export interface fullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
