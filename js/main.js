
var outside = 10;

function myFunc(){

    var inside = 20;

    for (let i = 0; i < 10; i++) {
        var temp = i;
        let tem1 = i;        
    }
    console.log('Var declared using VAR keyword = ' + temp);// 9
    console.log('Var declared using LET keyword = ' + temp1);//Reference error - temp1 is not defined
    console.log('Var declared outside of the function = ' + outside);// 10
}

console.log('Var declared inside of the function = ' + inside);// Reference error - inside is not defined

myFunc();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapSquaredNumbers = numbers.map(x => x * x);

console.log('Array numbers: ' + numbers);
console.log('Array mapSquaredNumbers: ' + mapSquaredNumbers);

const anonymousSquaredNumbers = function(){
    let temp = [];
    numbers.forEach(x => temp.push(x * x));
    return temp;
};

console.log('Array numbers: ' + numbers);
console.log('Array anonymousSquaredNumbers: ' + anonymousSquaredNumbers());

(sum = function(x = 0, y = 0){ 
    console.log('Sum of ' + x  + ' and ' + y + ' is: ' + (x + y));
})();

let numX = 10;
let numY = 20;

sum(numX, numY);

let double = number => { return number * 2; };

let doubleNumber = 10;
console.log(doubleNumber + ' doubled: ' + double(doubleNumber));

let colors = ['red', 'green', 'blue'];

console.log('Colors logged using for loop:')
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('Colors logged using forEach:')
colors.forEach(x => console.log(x));

function rotateArray(arr){
    for (let i = 0; i < arr.length; i++) {
        arr.unshift(arr.pop());
    }
}

let testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 100, 200];

rotateArray(testNumbers);

console.log('Array rotated: ' + testNumbers);

function reduceArray(array = []){
    return array.reduce((total, num) => {
        if(num > 50) {
            return total += num;
        }
        return total;
    }, 0);
}

console.log(reduceArray(testNumbers));

function makeArray(number = 0){
    let retArray = [];
    let doubled = number * 2;
    for (let i = 0; i <= doubled; i++) {
        retArray.push(i <= number ? i : doubled - i);
    }
    return retArray;
}

console.log('New array: ' + makeArray(20));

function zooInventory(zoo = []){
    return zoo.map(x => [x[0], x[1].join(' is ')].join(' the '));
}

let myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  newZoo = zooInventory(myZoo);
  console.log(newZoo);

let jsObject = {
    firstName : "Nedeljko",
    lastName : "Kostic",
    age : 23
};

let jsonObject = '{'+
                    '"firstName" : "Nedeljko",' +
                    '"lastName" : "Kostic", ' +
                    '"age" : 23' +
                '}';

console.log(JSON.parse(jsonObject));
console.log(JSON.stringify(jsObject));

let jsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let jsonArray = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';

console.log(JSON.parse(jsonArray));
console.log(JSON.stringify(jsArray));

JSON.parse(jsonArray).forEach(x => console.log(x)); //looping over json array

const testNum = 2;

checkIfEven = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num % 2 == 0 ? resolve(num) : reject(num);
        },1000);
    });
};

checkIfEven(testNum).then((addition) => {
    console.log('Success');
    return checkIfEven(addition + 1);
}).catch((e) => {
    console.error('Error');
});
