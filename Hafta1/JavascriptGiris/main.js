const var1 = "string"
const var2 = 123
let var3 = 11
const var4 = "123"
console.log(var2 + var3);
console.log(var2 - var3);
console.log(var2 / var3);
console.log(var2 * var3);

if(var2 == 123){
    console.log("Var 2 degeri 123");
}else if(var3 == 11){
    console.log("Var 3 deger 11");
}else{
    console.log("Kosul saglanmadi");
}

console.log(var4 === var2);

while(var3 != 0){
    //console.log("Var3 degeri" + var3);
    console.log(`Var 3 degeri ${var3}`);
    var3 -= 1;
}

var3 = 5
for (let index = 0; index < var3 ; index++) {
    console.log(`Index degeri ${index}`);
}

let flag = false;
for (let index = 0; !flag ; index++) {
    console.log(`Index degeri ${index}`);
    if(index == 5){
        flag = true;
    }
}

function addition(v1,v2){
    return {
        additon: v1 + v2,
        variable1: v1,
        variable2: v2
    }
}

const additionArrowFunc = (v1,v2) =>{
    return {
        additon: v1 + v2,
        variable1: v1,
        variable2: v2
    }
}

const additionResult = addition(var2,var3)
console.log(`Result of addition function ${additionResult.additon} and variable1 is ${additionResult.variable1} also variable2 is ${additionResult.variable2}`);
console.log(`Result of addition function inner ${addition(var2,var3).additon}`);

const additionResultArrowFunc = additionArrowFunc(100,20)
console.log(`Result of addition arrow function ${additionResultArrowFunc.additon} and variable1 is ${additionResultArrowFunc.variable1} also variable2 is ${additionResultArrowFunc.variable2}`);
console.log(`Result of addition arrow function inner ${additionArrowFunc(100,20).additon}`);

let arr = []
arr.push(10)
const itemFromPop = arr.pop()
console.log(itemFromPop);

for (let index = 0; index < 10; index++) {
    arr.push(index) 
}
arr.splice(5,1)
console.log(arr)
const arrFilter = (value,index) => value % 2 === 0 && index != 0
console.log(arr.filter(arrFilter))
console.log(arr.forEach((value,index)=>{
    console.log(`Element at index ${index} is ${value}`);
}));
const strArr = arr.map((value,index)=>{ return `Element at index ${index} is ${value}`});
//map long form
const tempArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    tempArr.push(`Element at index ${index} is ${element}`)
}
console.log(strArr);
console.log(tempArr);
