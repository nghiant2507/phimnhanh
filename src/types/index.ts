import { MovieEntity } from './movies';

export * from './movies';

export interface ISeoPageEntity {
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_type: string;
}

export interface IPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  totalItemsPerPage: number;
}

export interface IParamsMeta {
  filterCategory: string[];
  filterCountry: string[];
  filterYear: string;
  sortField: string;
  totalSportsVideos: string;
  type_slug: string;
}

export interface IResponseDataMovie {
  status: boolean;
  data: {
    items: MovieEntity[];
    params: IParamsMeta;
    seoOnPage: ISeoPageEntity;
    APP_DOMAIN_CDN_IMAGE: string;
    APP_DOMAIN_FRONTEND: string;
    type_list: string;
    titlePage: string;
  };
  pagination: IPagination;
}

export interface IResponseDataMovieBanner {
  status: boolean;
  items: MovieEntity[];
  pagination: IPagination;
}
