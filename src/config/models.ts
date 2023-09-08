export interface Link {
    title: string;
    link: string;
    disabled: boolean;
  }

export interface Reading {
    id: number;
    title: string;
    number?: number;
    disabled: boolean;
    owner: number;
    link: string;
    subReadings?: {id: number; title: string; number: number; disabled: boolean; owner: number; link: string; cardsNames?: string[];}[];
  }
  