import Image from 'next/image';
import Link from 'next/link';

export const NotFound = () => {
  return (
    <div
      className={
        'flex-1 relative flex flex-col items-center justify-center space-y-3 my-5'
      }
    >
      <Image src={'/not-found.jpg'} height={500} width={500} alt={'404'} />
      <h2 className={'text-2xl font-semibold'}>Không tìm thấy trang</h2>
      <p className={'text-muted-foreground'}>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href={'/'}
        className={
          'rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90'
        }
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};
