import { Film, VideoIcon } from 'lucide-react';

import { IResponseDataMovie, IResponseDataMovieBanner } from '~/types';

import { ListView } from './component/ListView';
import { MoviesUpdates } from './component/MoviesUpdates';

export const HomeModule = ({
  dataHome,
  dataFilmLe,
  dataSection,
}: {
  dataHome: IResponseDataMovieBanner;
  dataFilmLe: IResponseDataMovie;
  dataSection: IResponseDataMovie;
}) => {
  return (
    <div className={'flex-1 flex flex-col gap-8'}>
      <MoviesUpdates
        items={dataHome.items}
        itemsUpdate={dataHome?.pagination?.updateToday}
      />
      <ListView
        data={dataFilmLe}
        title={'Phim lẻ'}
        icon={<VideoIcon color={'var(--primary)'} size={28} />}
      />
      <ListView
        data={dataSection}
        icon={<Film color={'var(--primary)'} size={24} />}
      />
    </div>
  );
};
