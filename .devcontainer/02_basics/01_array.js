//array

const myArr = [0, 1, 2, 3, 5]
const myHeros = ["Hanuman", "parshuram"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


//ArrayMethods

// myArr.push(6)
// console.log(myArr); 
// myArr.push(7)

myArr.unshift(9)

console.log(myArr.includes(9))

const newArr = myArr.join()

console.log(myArr);

console.log(typeof newArr);

//slice, splice

console.log("A", myArr);

const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2= myArr.splice(1,3)

console.log(myn2);
