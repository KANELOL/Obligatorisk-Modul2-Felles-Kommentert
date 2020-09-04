const model = {
    // I AM HERE!!!! I AM IN THE MATRIX
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll', // denne blir endret av changePage ettersom man klikker på "stem" eller "lag poll"
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],
    //lager options som er inne i pollen, og gir laget poll en id som vi kan referere til senere
    //
    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },
    },
    //jeg tror at denne fyller seg med pollene vi lager???
    polls: [
        {pollId: 0,
            id: 0,
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,},

        {pollId: 1,
            id: 1,
            createdBy: 'per',
            isOpen: true,
            usersCanAddAlternatives: true,
            question: 'Liker du å spise is?',
            options: ['Ja', 'Nei']},

        {pollId: 2,
            id: 2,
            createdBy: 'nuløl',
            isOpen: true,
            usersCanAddAlternatives: true,
            question: 'Exisister vi egentlig?',
            options: ['Kanskje', 'Nei']
        }
    ]
};
