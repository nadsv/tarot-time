export const config = Object.freeze({
    TOTAL_NUMBER_OF_CARDS: 78,
    CARD_HEIGHT: 130,
    INITIAL_ARRAY_OF_CARDS: Array.from({ length: 78 }, (_, i) => i + 1),
    READINGS: [
        {
            id: 0,
            title: "Да или Нет?",
            number: 1,
            disabled: false,
            owner: 0,
            link: "readings/"
        },
        {
            id: 1,
            title: "Карта дня",
            number: 1,
            disabled: false,
            owner: 0,
            link: "readings/"
        },
        {
            id: 2,
            title: "Линейные расклады",
            number: 1,
            disabled: false,
            owner: 0,
            link: "readings/"
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