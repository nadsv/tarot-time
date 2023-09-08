export const config = Object.freeze({
    TOTAL_NUMBER_OF_CARDS: 78,
    INITIAL_ARRAY_OF_CARDS: Array.from({ length: 78 }, (_, i) => i + 1),
    READINGS: [
        {
            id: 0,
            title: 'Да или Нет?',
            number: 1,
            disabled: false,
            owner: 0,
            link: '/readings/0/'
        },
        {
            id: 1,
            title: 'Карта дня',
            number: 1,
            disabled: false,
            owner: 0,
            link: '/readings/1/'
        },
        {
            id: 2,
            title: 'Линейные расклады',
            disabled: false,
            owner: 0,
            link: '/readings/3/',
            subReadings: [
                {id: 0, title: 'Прошлое, настоящее, будущее', number: 2, disabled: false, owner: 2, link: '/readings/2/0/', cardNames: ['Прошлое', 'Настоящее', 'Будущее']},
                {id: 1, title: 'Ситуация, действие, исход', number: 2, disabled: false, owner: 2, link: '/readings/2/1/', cardNames: ['Ситуация', 'Действие', 'Исход']},
                {id: 2, title: 'Вы, ваши отношения, партнер', number: 2, disabled: false, owner: 2, link: '/readings/2/2/', cardNames: ['Вы', 'Ваши отношения', 'Партнер']},
            ]
        },
    ],
    LINKS: [
        {
            title: "Контакты",
            link: "/contacts",
            disabled: false
        }
    ]
});