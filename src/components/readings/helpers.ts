export const shapeData = (
  num: number,
  cardsNumber: number,
  cardHeight: number
): { angle: number; line: number } => {
  const angle = (360 / cardsNumber) * num;
  const rad = ((360 / cardsNumber) * Math.PI) / 180;
  const line = Math.tan(rad) * cardHeight;
  return { angle, line };
};
