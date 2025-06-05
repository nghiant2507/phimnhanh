import { buildSearchParams, IParams } from '~/core/lib/utils';
import { CategoryEntity } from '~/types';

export const createService = async <T>(
  path: string,
  params?: Partial<IParams>,
): Promise<T> => {
  const queryString = buildSearchParams(params);
  const url = `${process.env.NEXT_PUBLIC_API_URL}${path}${queryString ? `?${queryString}` : ''}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data;
};

export const getCategories = async () => {
  const data = await createService<CategoryEntity[]>('/the-loai');
  return data;
};

export const getCountries = async () => {
  const data = await createService<CategoryEntity[]>('/quoc-gia');
  return data;
};
