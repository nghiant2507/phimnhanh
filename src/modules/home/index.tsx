'use client';

import { IResponseDataMovieBanner } from '~/types';

import { MoviesUpdates } from './component/MoviesUpdates';

export const HomeModule = ({
  dataHome,
}: {
  dataHome: IResponseDataMovieBanner;
}) => {
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
