import { scroll } from 'quasar';

export const shapeData = (
  num: number,
  cardsNumber: number
): { angle: number } => {
  const angle = (360 / cardsNumber) * num;
  return { angle };
};

export const removeCard = (num: number, arr: number[]): number[] => {
  const newArr = arr.filter((item) => item !== num);
  return newArr;
};

export const randomCard = (max: number, invert: number): number => {
  const mightInvert = invert ? -1 : 1;
  return (
    Math.floor(Math.random() * max) * (Math.random() > 0.5 ? 1 : mightInvert)
  );
};

export const wordDeclination = (num: number): string => {
  if (
    num === 1 ||
    num === 21 ||
    num === 31 ||
    num === 41 ||
    num === 51 ||
    num === 61 ||
    num === 71
  )
    return 'карту';
  if (
    (num >= 5 && num <= 20) ||
    (num >= 25 && num <= 30) ||
    (num >= 35 && num <= 40) ||
    (num >= 45 && num <= 50) ||
    (num >= 55 && num <= 60) ||
    (num >= 65 && num <= 70)
  )
    return 'карт';
  return 'карты';
};

export const preloadImage = (num: number, imageCollection: string): void => {
  const img = new Image();
  img.src = `/assets/${imageCollection}/${num}.png`;
};

export const color = (group: string): string => {
  switch (group) {
    case 'старшие':
      return '#2b092b';
    case 'мечи':
      return '#440f73';
    case 'пентакли':
      return '#6f0f93';
    case 'кубки':
      return '#660b67';
    case 'жезлы':
      return 'rgb(154 3 171 / 99%)';
    default:
      return '#000';
  }
};

const { getScrollTarget, setVerticalScrollPosition } = scroll;
export const scrollToElement = (el: HTMLElement, delay: number, time: 0) => {
  const target = getScrollTarget(el);
  const offset = el.offsetTop - 20;
  const duration = time;
  setTimeout(() => setVerticalScrollPosition(target, offset, duration), delay);
};
