type User2 = {
    name: string,
    age: number,
}

type Employee2 = {
    salary: number,
    greet: () => string,
}

let user: User2 & Employee2 = {
    name: "John",
    age: 15,
    salary: 50000,
    greet: function () {
        return `Hello, ${this.name}! You are ${this.age} years old and get ${this.salary} salary.`;
    },
}

console.log(user.greet());