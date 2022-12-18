// const brands = [
//     'Lambo',
//     'BMW',
//     'Mazda',
//     'Porshe'
// ]

// let i = 0;

// For loop
// for (i; i < brands.length; i++) {
//     console.log(brands[i]);
// }

// For of loop
// for (brand of brands) console.log(brand);

// const User = {
//     'firstName': 'Radek',
//     'lastName': 'Siek'
// }

// For in loop
// for (key in User) console.log(User[key]);

// While loop
// let i = 0;
// while(i < 10) {
//     i++;
//     if (i === 5) continue;
//     console.log(i);
// }

// Do while loop
// let i = 0;
// do {
//     i++;
//     if (i === 5) continue;
//     console.log(i);
// } while (i < 10);

// forEach loop for mapping arrays

// const animals = [
//     'cat',
//     'dog',
//     'horse',
//     'sheep',
//     'bird'
// ]

// animals.forEach(animal => {
//     console.log(animal);
// })

// for (let i = 0; i < 30; i++) {
//     console.log('clap!');
// }

// let sum = 0;

// for (let i = 1; i < 11; i++) {
//     sum+= i;
// }

// console.log(`The total is ${sum}`);

// const fruits = [
//     'mango',
//     'banana',
//     'apple',
//     'strawberry'
// ]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

let Data = {
    name: 'Radek',
    age: 23,
    maritalStatus: false
}

for (elem in Data) console.log(Data[elem]);

function Person (firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
}

let personOne = new Person('Radosław', 'Siek', 23);

for (element in personOne) console.log(`${element}: ${personOne[element]}`);