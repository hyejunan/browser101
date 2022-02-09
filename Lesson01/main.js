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

// function
function add(a,b) {
    return a+b;
}

const sum = add(3,4);

const doSomething = add;

const result = doSomething(2,3); //5
const result2 = add(2,3);//5

function print() {
    console.log('print');
}

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2,3); // add(2,3)
    console.log(result);
}

surprise(); // error(operator undefined)
surprise(add); // NaN
surprise(divide);

// Class
class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase(runIf5Times) {
        this.counter++;
        if(this.counter %5===0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`yo! ${num}`);
}
const coolCounter = new Counter(printSomething);
coolCounter.increase(); //1
coolCounter.increase(); //2
coolCounter.increase(); //3
coolCounter.increase(); //4
coolCounter.increase(); //5

