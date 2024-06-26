export const getImageUtl = (path) => {
  return new URL(`assets/${path}`, import.meta.url).href;
};
