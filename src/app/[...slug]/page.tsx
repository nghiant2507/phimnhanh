import { NotFound, PageHeader } from '~/components';
import { IParams } from '~/core/lib/utils';
import { CategoryModule } from '~/modules';
import { createService } from '~/services';
import { IResponseDataMovie } from '~/types';

interface PropsPage {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string }>;
}

export const generateMetadata = async ({ params }: PropsPage) => {
  const { slug } = await params;

  switch (slug[0]) {
    case 'danh-sach': {
      const data = await createService<IResponseDataMovie>(
        `/v1/api/danh-sach/${slug[1]}`,
      );
      return {
        title: data?.data?.titlePage,
        description: data?.data?.seoOnPage?.descriptionHead,
      };
    }

    default:
      return {
        title: 'Phim Nhanh - Xem phim online',
        description: 'Phim Nhanh - Xem phim online',
      };
  }
};

export default async function Page({ params, searchParams }: PropsPage) {
  const { slug } = await params;
  const search: IParams = await searchParams;
  switch (slug[0]) {
    case 'danh-sach':
      const data = await createService<IResponseDataMovie>(
        `/v1/api/danh-sach/${slug[1]}`,
        {
          ...search,
          limit: 30,
        },
      );
      return (
        <>
          <PageHeader title={data?.data?.titlePage} />
          <CategoryModule data={data} />
        </>
      );

    default:
      return <NotFound />;
  }
}
