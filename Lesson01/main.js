// number, string, boolean, null, undefined
let age = 2;
let num = age;
console.log(num);

num = 3;
console.log(num);

// object : array, function, list ...

const obj = {
    name: 'ellie',
    age: 5,
};
let obj2 = obj;
console.log(obj2.name); // ellie

obj.name = 'james'
console.log(obj.name); // james
console.log(obj2.name); // james