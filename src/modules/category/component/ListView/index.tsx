'use client';

import { Clock, Play, Star } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { getCdnImageUrl } from '~/core/lib/image-utils';
import { IResponseDataMovie } from '~/types';

interface ListViewProps {
  data: IResponseDataMovie;
  title?: string;
  icon?: ReactNode;
  numberItems?: number;
}

export const ListView = (props: ListViewProps) => {
  const { data } = props;
  const items = data?.data?.items;
  return (
    <div
      className={
        'flex snap-x overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible md:auto-cols-auto lg:grid-cols-3 xl:grid-cols-5 gap-4'
      }
    >
      {items?.map((item) => {
        return (
          <article
            key={item?._id}
            className={
              'group snap-center relative min-w-66 md:min-w-auto w-full flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden'
            }
          >
            <Link
              href={`/movie/${item?.slug}`}
              className={
                'relative h-64 sm:h-72 lg:h-80  aspect-[2/3] bg-gray-700 overflow-hidden cursor-pointer'
              }
            >
              <img
                src={getCdnImageUrl(item.poster_url)}
                alt="Poster Phim"
                className={
                  'size-full object-cover transition-all duration-500 group-hover:scale-110'
                }
              />
              <span
                className={
                  'z-20 absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-md'
                }
              >
                {item?.quality}
              </span>
              <span
                className={
                  'z-20 absolute top-2 right-2 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-md flex items-center'
                }
              >
                <Star size={16} className={'mr-1'} />
                {item?.tmdb?.vote_average ?? 0}
              </span>
              <div
                className={
                  'absolute top-0 left-0 size-full bg-black/40 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300'
                }
              >
                <div
                  className={
                    'bg-primary rounded-full p-4 scale-0 -rotate-180 group-hover:scale-100 group-hover:rotate-0 transition-all duration-700'
                  }
                >
                  <Play size={24} />
                </div>
              </div>
            </Link>

            <div className={'p-4 flex-1 flex flex-col'}>
              <Link href={`/movie/${item?.slug}`}>
                <h3
                  className={
                    'text-lg font-semibold text-white truncate mb-1 group-hover:text-red-500/90 transition-all duration-300'
                  }
                >
                  {item?.name}
                </h3>
              </Link>
              <p className={'text-white/80 text-sm truncate mb-2'}>
                {item?.origin_name} ({item?.year})
              </p>
              <p className={'text-gray-400 text-sm truncate mb-2'}>
                {item?.category?.map((item) => item.name).join(', ')}
              </p>
              <div
                className={
                  'flex-1 mt-auto flex gap-5 justify-between items-center text-gray-500 text-xs'
                }
              >
                <div className={'flex gap-1 items-center '}>
                  <Clock size={16} />
                  <span className={'truncate'}>{item?.time}</span>
                </div>
                <span
                  className={
                    'bg-primary font-medium text-white px-2 py-0.5 rounded-md truncate'
                  }
                >
                  {item?.lang}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
