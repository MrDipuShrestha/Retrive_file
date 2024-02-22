const myArr = [1, 2, 3, 4, 5]; 

myArr.push(6); //it add value in the last of an array.
console.log(`After push:`, myArr);

myArr.pop(); //it delete value from last of an array.
console.log(`After pop:`, myArr);

myArr.unshift(0); //it add a new item in the beginning of an array.. it is not efficiet because in large array we have to shift all the element which is time consuming.
console.log(myArr);

myArr.shift(); //it remove element from beginning of an array. 
console.log(myArr);

console.log(myArr.includes(0)); //it search element from an array and return true or false value.
console.log(myArr.indexOf(9)); // it retun index of element. if index not found it return -1.

// const arr = [0, 1, 2, 3, 4, 5, 6];
const sliced = arr.slice(2,5);  //it doesnt modify an array.
console.log(sliced);
console.log(arr);

console.log(arr.splice(2,3)); //it modify original array and create new 
console.log(arr);

const arr = [0, 1, 2, 3, 4, 5, 6];
const arr1 = [7,8,9];

// console.log(arr.concat(arr1)); // it merge two array.

const z = [...arr,...arr1]; // it spread  the element  and return combined array.
console.log(z); 

const insideArr = [1,2,3,[4,5],6,7,[8,9,[2,5]]];
const carr = insideArr.flat(Infinity); //it flattern nested array.
console.log(carr);

const dipesh = Array.from("dipesh"); // it convert string to array.
console.log(dipesh);
console.log(Array.isArray(dipesh));  //it check whether its array or not 

let a1 =1;
let b1 = 2 ;
let c = 3;
console.log(Array.of(a1,b1,c)); // it creates array from set of variable.

//map method
let a = [1, 2, 3, 45, 6, 7, 8, 9];
let b = a.map((value, index) => {
  //this function take only value, array, index as argument
  console.log(value + index); // print element of an array by performig operation
  return value + index; // it return array to variable b
});
console.log(b); // print array b return from function

//filter method
let q = [1, 2, 3, 45, 6, 7, 8, 9];
let d = q.filter((value) => {
  //this function take any user keyword as argument
  console.log(value + 10);
  return value + 10; //this return an array
});
console.log(d);

//reduce method
let e = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let f = e.reduce((a1, b1) => {
  return a1 + b1; //it return value by performing given operation on first and second elemet and again perform operation on result and third element and so on
});
console.log(f);
