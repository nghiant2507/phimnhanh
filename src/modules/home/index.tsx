'use client';

import { useEffect } from 'react';

import { IResponseDataMovieBanner } from '~/types';

import { MoviesUpdates } from './component/MoviesUpdates';

export const HomeModule = ({
  dataHome,
}: {
  dataHome: IResponseDataMovieBanner;
}) => {
  useEffect(() => {
    if (dataHome?.pagination?.updateToday) {
      const currentValue = localStorage.getItem('updateToday');
      const newValue = JSON.stringify(dataHome?.pagination?.updateToday);

      if (currentValue !== newValue) {
        localStorage.setItem('updateToday', newValue);
      }
    }
  }, [dataHome]);

  return (
    <div className={'flex-1 flex flex-col gap-8'}>
      <MoviesUpdates items={dataHome.items} />
      {/* <ListView
        data={dataHome}
        title={'Phim mới cập nhập'}
        icon={<CloudUpload color={'var(--primary)'} size={24} />}
      />
      <ListView
        data={dataSection}
        icon={<Film color={'var(--primary)'} size={24} />}
      /> */}
    </div>
  );
};
