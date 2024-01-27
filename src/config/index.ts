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
      field(position: string, place: number) {
        return position + '_yes';
      },
      leftHint: 'Сформулируйте "Да-Нет" вопрос',
    },
    {
      id: 1,
      title: 'Карта дня',
      number: 1,
      disabled: false,
      owner: null,
      link: '/readings/1/',
      invert: 0,
      field(position: string, place: number) {
        return 'card_of_day';
      },
      leftHint: 'Узнайте карту на сегодня',
    },
    {
      id: 3,
      title: 'Совет карты',
      number: 1,
      disabled: false,
      owner: null,
      link: '/readings/3/',
      invert: 0,
      field(position: string, place: number) {
        return 'advice';
      },
      leftHint: 'Спросите совет у карт',
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
          field(position: string, place: number) {
            return position + '_meaning';
          },
          leftHint: 'Подумайте о вашем жизненном пути',
        },
        {
          id: 1,
          title: 'Ситуация: причина, действие, итог',
          number: 3,
          disabled: false,
          owner: 2,
          link: '/readings/2/1/',
          cardNames: ['Причина', 'Действие', 'Итог'],
          invert: 1,
          field(position: string, place: number) {
            let fieldName = '';
            switch (place) {
              case 0:
                fieldName = position + '_' + 'situation';
                break;
              case 1:
                fieldName = 'advice';
                break;
              default:
                fieldName = position + '_' + 'meaning';
                break;
            }
            return fieldName;
          },
          leftHint: 'Подумайте о вашей ситуации',
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
          field(position: string, place: number) {
            let fieldName = '';
            switch (place) {
              case 1:
                fieldName = 'love';
                break;
              default:
                fieldName = 'meaning';
                break;
            }
            return position + '_' + fieldName;
          },
          leftHint: 'Подумайте о ваших отношениях',
        },
      ],
    },
  ],
  LINKS: [
    {
      title: 'Справочник',
      link: '/handbook',
      disabled: false,
    },
    {
      title: 'О проекте',
      link: '/contacts',
      disabled: false,
    },
  ],
});
