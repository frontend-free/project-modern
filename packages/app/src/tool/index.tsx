import { isEqual } from './is_equal';

const IMG_EXTS = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg'];

function isImg(name: string) {
  const ext = name.split('.').pop();
  return ext && IMG_EXTS.includes(ext);
}

const Tool = {
  isEqual,
  isImg,
};

export { Tool };
