import { IResponseDataMovie } from '~/types';

import { ListView, PaginationComponent } from './component/';
import { FillterComponent } from './component/Fillter';

export const CategoryModule = ({ data }: { data: IResponseDataMovie }) => {
  console.log(data);

  return (
    <div className={'container mx-auto flex flex-col gap-8 mt-4'}>
      <FillterComponent />
      <ListView data={data} />
      <PaginationComponent params={data?.data?.params} />
    </div>
  );
};
