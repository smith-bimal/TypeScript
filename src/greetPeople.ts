interface People {
    name: string;
    age: number;
    greet: () => string;
}

let person1: People = {
    name: "John",
    age: 15,
    greet: function () {
        return `Hello, ${this.name}!`;
    }
};

console.log(person1.greet());