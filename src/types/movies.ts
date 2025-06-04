export interface CategoryEntity {
  id: string;
  name: string;
  slug: string;
}

export interface CountryEntity {
  id: string;
  name: string;
  slug: string;
}

export interface TMDBEntity {
  type: string;
  id: string;
  season: string | null;
  vote_average: number;
  vote_count: number;
}

export interface IMDBEntity {
  id: string | null;
}

export interface ModifiedEntity {
  time: string;
}

export interface MovieEntity {
  tmdb: TMDBEntity;
  imdb: IMDBEntity;
  modified: ModifiedEntity;
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  poster_url: string;
  thumb_url: string;
  year: number;
  status: string;
  episode_current: string;
  type: string;
  sub_docquyen: boolean;
  time: string;
  quality: string;
  lang: string;
  category: CategoryEntity[];
  country: CountryEntity[];
}
