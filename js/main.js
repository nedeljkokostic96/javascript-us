
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