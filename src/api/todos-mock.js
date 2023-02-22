export const getTodos = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    userId: 1,
                    title: "Lorem ipsum dolor sit amet"
                },
                {
                    id: 2,
                    userId: 2,
                    title: "consectetur adipiscing elit"
                },
                {
                    id: 3,
                    userId: 3,
                    title: "sed do eiusmod tempor incididunt"
                },
                {
                    id: 4,
                    userId: 4,
                    title: "ut labore et dolore magna aliqua"
                },
                {
                    id: 5,
                    userId: 5,
                    title: "Ut enim ad minim veniam, quis nostrud"
                },
                {
                    id: 6,
                    userId: 5,
                    title: "exercitation ullamco laboris nisi ut aliquip"
                },
                {
                    id: 7,
                    userId: 4,
                    title: "ex ea commodo consequat"
                },
                {
                    id: 8,
                    userId: 3,
                    title: "Duis aute irure dolor in reprehenderit"
                },
                {
                    id: 9,
                    userId: 2,
                    title: "in voluptate velit esse cillum dolore"
                },
                {
                    id: 10,
                    userId: 1,
                    title: "eu fugiat nulla pariatur. Excepteur sint occaecat"
                },
            ]);
        }, Math.random() * 1000)
    });

}
