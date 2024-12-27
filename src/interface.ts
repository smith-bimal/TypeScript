//without interface
function showDetails(obj: {
    name: string,
    age: number
}): string {
    return (`My name is ${obj.name} and I am ${obj.age} years old`);
}

let obj1: {
    name: string,
    age: number
} = {
    name: "John",
    age: 25
};

console.log(showDetails(obj1));

//with interface
interface Person {
    name: string,
    age: number
}

function showDetails2(obj: Person): string {
    return (`My name is ${obj.name} and I am ${obj.age} years old`);
}

let obj2: Person = {
    name: "Jane",
    age: 30
};

console.log(showDetails2(obj2));
