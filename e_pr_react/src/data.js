const data = [
    {
        title: 'вопрос 1',
        id: 1,
        description: 'пояснение 1',
        path: [
            {
                title: 'вопрос 11',
                id: 4,
                description: 'пояснение 11',
                answer: 'ответ 1 - 1',
            },
            {
                title: 'вопрос 12',
                id: 5,
                answer: 'ответ 1 - 2',
            },
            {
                title: 'вопрос 13',
                id: 6,
                description: 'пояснение 13',
                path: [
                    {
                        title: 'вопрос 131',
                        id: 9,
                        description: 'пояснение 131',
                        answer: 'ответ 1 - 3 - 1',
                    },
                    {
                        id: 10,
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
        id: 2,
        path: [
            {
                title: 'вопрос 21',
                id: 7,
                description: 'пояснение 21',
                answer: 'ответ 2 - 1',
            },
            {
                id: 8,
                title: 'вопрос 22',
                answer: 'ответ 2 - 2',
            },
        ]
    },
    {
        title: 'вопрос 3',
        id: 3,
        description: 'пояснение 3',
        answer: 'ответ 3 ответ 3 ответ 3 ответ 3 <img style="object-fit: cover" width="200px" height="100px" src="https://4lapki.com/wp-content/uploads/2020/10/Screenshot_7-1.jpg" /> ответ 3 ответ 3 ответ 3 ответ 3 ответ 3 ответ 3',
    }
];
export default data;
