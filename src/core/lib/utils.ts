import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type IParams = {
  page?: number | string;
  type_list?: number;
  sort_field?: 'modified.time' | '_id' | 'year';
  sort_type?: 'desc' | 'asc';
  sort_lang?: string;
  category?: string;
  country?: string;
  year?: string;
  limit?: number | string;
};

export const buildSearchParams = (params?: Partial<IParams>) => {
  const flattenParams = (params: string[]): string => {
    return params.join(',');
  };

  const searchParams = new URLSearchParams();

  if (!params) return '';

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      if (Array.isArray(value)) {
        // Flat array params
        searchParams.append(key, flattenParams(value));
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          searchParams.append(`${key}[${subKey}]`, String(subValue));
        });
      } else {
        searchParams.append(key, String(value));
      }
    }
  });

  return searchParams.toString();
};
