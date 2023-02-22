export const getUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "John"
                },
                {
                    id: 2,
                    name: "Katy"
                },
                {
                    id: 3,
                    name: "Peter"
                },
                {
                    id: 4,
                    name: "Helen"
                },
                {
                    id: 5,
                    name: "Michael"
                }
            ]);
        }, Math.random() * 1000)
    });

}
