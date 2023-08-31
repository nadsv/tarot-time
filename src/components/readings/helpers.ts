export const shapeData = (
  num: number,
  cardsNumber: number
): { angle: number } => {
  const angle = (360 / cardsNumber) * num;
  return { angle };
};

export const removeCard = (num: number, arr: number[]) : number[] => {
  const newArr = arr.filter(item => item !== num)
  return newArr
}

export const randomCard = (max: number) : number => {
  return Math.floor(Math.random() * max) *  ( (Math.random()>0.5)? 1 : -1 );
}

export const wordDeclination = (num: number): string => {
  if (num === 1 || num === 21 || num === 31 || num === 41 || num === 51 || num === 61 || num === 71) return 'карту';
  if (num >= 5 && num <=20 || num >= 25 && num <=30 || num >= 35 && num <=40 || num >= 45 && num <=50 || num >= 55 && num <=60 || num >= 65 && num <=70) return 'карт';
  return 'карты';
}
