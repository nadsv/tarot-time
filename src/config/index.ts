export const config = Object.freeze({
  TOTAL_NUMBER_OF_CARDS: 78,
  INITIAL_ARRAY_OF_CARDS: Array.from({ length: 78 }, (_, i) => i + 1),
  READINGS: [
    {
      id: 0,
      title: 'Да или Нет?',
      number: 1,
      disabled: false,
      owner: null,
      link: '/readings/0/',
      invert: 1,
      field(position: string) {return position+'_yes'},
    },
    {
      id: 1,
      title: 'Карта дня',
      number: 1,
      disabled: false,
      owner: null,
      link: '/readings/1/',
      invert: 0,
      field(position: string) {return 'card_of_day'}
    },
    {
      id: 3,
      title: 'Совет карты',
      number: 1,
      disabled: false,
      owner: null,
      link: '/readings/3/',
      invert: 0,
      field(position: string) {return 'advice'}
    },
    {
      id: 2,
      title: 'Линейные расклады',
      disabled: false,
      owner: null,
      link: '/readings/3/',
      subReadings: [
        {
          id: 0,
          title: 'Прошлое, настоящее, будущее',
          number: 3,
          disabled: false,
          owner: 2,
          link: '/readings/2/0/',
          cardNames: ['Прошлое', 'Настоящее', 'Будущее'],
          invert: 1,
          field(position: string) {return position+'_meaning'}
        },
        {
          id: 1,
          title: 'Ситуация, действие, исход',
          number: 3,
          disabled: false,
          owner: 2,
          link: '/readings/2/1/',
          cardNames: ['Ситуация', 'Действие', 'Исход'],
          invert: 1,
          field(position: string) {return position+'_meaning'}
        },
        {
          id: 2,
          title: 'Вы, ваши отношения, партнер',
          number: 3,
          disabled: false,
          owner: 2,
          link: '/readings/2/2/',
          cardNames: ['Вы', 'Отношения', 'Партнер'],
          invert: 1,
          field(position: string) {return position+'_meaning'}
        },
      ],
    },
  ],
  LINKS: [
    {
      title: 'Контакты',
      link: '/contacts',
      disabled: false,
    },
  ],
});
