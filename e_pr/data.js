const data = [
    {
        title: 'вопрос 1',
        description: 'пояснение 1',
        path: [
            {
                title: 'вопрос 11',
                description: 'пояснение 11',
                answer: 'ответ 1 - 1',
            },
            {
                title: 'вопрос 12',
                answer: 'ответ 1 - 2',
            },
            {
                title: 'вопрос 13',
                description: 'пояснение 13',
                path: [
                    {
                        title: 'вопрос 131',
                        description: 'пояснение 131',
                        answer: 'ответ 1 - 3 - 1',
                    },
                    {
                        title: 'вопрос 132',
                        description: 'пояснение 132',
                        answer: 'ответ 1 - 3 - 2',
                    }
                ]
            }
        ]
    },
    {
        title: 'вопрос 2',
        path: [
            {
                title: 'вопрос 21',
                description: 'пояснение 21',
                answer: 'ответ 2 - 1',
            },
            {
                title: 'вопрос 22',
                answer: 'ответ 2 - 2',
            },
        ]
    },
    {
        title: 'вопрос 3',
        description: 'пояснение 3',
        answer: 'ответ 3',
    }
]