
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
