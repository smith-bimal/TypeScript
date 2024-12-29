interface User {
    name: string;
    age: number;
}

function isLeagal(user: User): boolean {
    return user.age >= 18;
}

let user1: User = {
    name: "John",
    age: 15
};
let user2: User = {
    name: "Smith",
    age: 25
};

console.log(isLeagal(user1));
console.log(isLeagal(user2));