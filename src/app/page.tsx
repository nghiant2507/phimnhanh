import type { Metadata } from 'next';
import { cache } from 'react';

import { PageHeader } from '~/components';
import { HomeModule } from '~/modules';
import { createService } from '~/services';
import { IResponseDataMovie, IResponseDataMovieBanner } from '~/types';

const getDataBanner = cache(async () => {
  return await createService<IResponseDataMovieBanner>(
    '/danh-sach/phim-moi-cap-nhat-v3',
  );
});

const getDataFilm = cache(async () => {
  return await createService<IResponseDataMovie>('/v1/api/danh-sach/phim-le', {
    page: 1,
    limit: 15,
  });
});

const getDataSection = cache(async () => {
  return await createService<IResponseDataMovie>(
    '/v1/api/danh-sach/phim-long-tieng',
    {
      page: 1,
      limit: 15,
    },
  );
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Xem Phim Online Miễn Phí | Phim Mới 2025 | Phimnhanh.vn',
    description:
      'PhimHD.vn - Website xem phim online miễn phí chất lượng cao. Cập nhật phim mới nhất 2025: phim lẻ, phim bộ, phim chiếu rạp, vietsub, thuyết minh nhanh nhất.',
    openGraph: {
      title: 'Xem Phim Online Miễn Phí | Phim Mới 2025 | Phimnhanh.vn',
      description:
        'Tổng hợp phim hay, phim chiếu rạp, phim bộ hấp dẫn cập nhật liên tục. Trải nghiệm xem phim không quảng cáo tại Phimnhanh.vn.',
      images: [
        {
          url: '/thumbnail.png',
          width: 1200,
          height: 630,
          alt: 'Phimnhanh.vn - Xem phim online miễn phí',
        },
      ],
      type: 'website',
    },
  };
};

export default async function Home() {
  const dataHome = await getDataBanner();

  const dataFilmLe = await getDataFilm();

  const dataSection = await getDataSection();

  return (
    <>
      <PageHeader />
      <HomeModule
        dataHome={dataHome}
        dataFilmLe={dataFilmLe}
        dataSection={dataSection}
      />
    </>
  );
}
