export const getCdnImageUrl = (path: string) => {
  const cdnImage = process.env.NEXT_PUBLIC_CDN_IMAGE;
  return `${cdnImage}${path}`;
};
