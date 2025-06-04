'use client';

import { Clock, Play, Star } from 'lucide-react';
import { ReactNode } from 'react';

import { IResponseDataMovie } from '~/types';

interface ListViewProps {
  data: IResponseDataMovie;
  title?: string;
  icon?: ReactNode;
  numberItems?: number;
}

export const ListView = (props: ListViewProps) => {
  const { data, title, icon, numberItems = 12 } = props;
  const items = data?.data?.items;

  return (
    <div className={'flex flex-col gap-6 px-4 md:px-10'}>
      <h3 className="flex items-center gap-2 text-2xl font-bold border-b-4 border-primary pb-2 w-fit">
        {icon && icon}
        <p>{title ? title : data?.data?.titlePage}</p>
      </h3>
      <div
        className={
          'grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4'
        }
      >
        {items?.slice(0, numberItems)?.map((item) => {
          return (
            <article
              key={item?._id}
              className={
                'relative w-full flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group'
              }
            >
              <div
                className={
                  'relative w-full h-64 sm:h-72 lg:h-80 bg-gray-700 overflow-hidden'
                }
              >
                {/* <img
                  src={getCdnImageUrl(item.thumb_url)}
                  alt="Poster Phim"
                  className={'w-full aspect-[2/3] object-cover'}
                /> */}
                <span
                  className={
                    'absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-md'
                  }
                >
                  {item?.quality}
                </span>
                <span
                  className={
                    'absolute top-2 right-2 bg-yellow-500 text-gray-900 text-sm font-bold px-2 py-1 rounded-md flex items-center'
                  }
                >
                  <Star size={16} className={'mr-1'} />
                  {item?.tmdb?.vote_average ?? 0}
                </span>
                <div
                  className={
                    'absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  }
                >
                  <button
                    type={'button'}
                    className={
                      'bg-white text-gray-900 rounded-full p-3 shadow-lg transform transition-transform duration-300 hover:scale-110'
                    }
                  >
                    <Play size={24} />
                  </button>
                </div>
              </div>

              <div className={'p-4 flex-1 flex flex-col'}>
                <h3
                  className={'text-lg font-semibold text-white truncate mb-1'}
                >
                  {item?.name}
                </h3>
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
    </div>
  );
};
