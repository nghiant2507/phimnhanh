'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { useEffect } from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieEntity } from '~/types';

import { ItemUpdate } from '../Item/ItemUpdate';

export const MoviesUpdates = ({
  items,
  itemsUpdate,
}: {
  items: MovieEntity[];
  itemsUpdate: number;
}) => {
  useEffect(() => {
    if (itemsUpdate) {
      const currentValue = localStorage.getItem('updateToday');
      const newValue = JSON.stringify(itemsUpdate);

      if (currentValue !== newValue) {
        localStorage.setItem('updateToday', newValue);
      }
    }
  }, [itemsUpdate]);

  return (
    <div className={'w-full min-h-160 border-b border-border'}>
      <Swiper
        speed={1200}
        spaceBetween={20}
        slidesPerView={1}
        effect={'fade'}
        slidesPerGroup={1}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={'banner-swiper size-full px-6 pb-6'}
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            {({ isActive }) => <ItemUpdate item={item} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
