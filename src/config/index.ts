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
            link: 'readings/'
        },
        {
            id: 1,
            title: 'Карта дня',
            number: 1,
            disabled: false,
            owner: 0,
            link: 'readings/'
        },
        {
            id: 2,
            title: 'Линейные расклады',
            disabled: false,
            owner: 0,
            link: 'readings/',
            subReadings: [
                {id: 0, title: 'Прошлое, настоящее, будущее', number: 3, disabled: false, owner: 2, link: '#'},
                {id: 1, title: 'Ситуация, действие, исход', number: 3, disabled: false, owner: 2, link: '#'},
                {id: 1, title: 'Вы, ваши отношения, партнер', number: 3, disabled: false, owner: 2, link: '#'},
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