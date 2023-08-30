export const shapeData = (
  num: number,
  cardsNumber: number
): { angle: number } => {
  const angle = (360 / cardsNumber) * num;
  return { angle };
};
