// //                          Functions

// // Simple create function
// function abs(){
//     console.log("Hello world");
//     console.log("Hello world");
//     console.log("Hello world");
//     console.log("Hello world");
//     console.log("Hello world");
// }
// abs();

// // Using let - Function expression
// let fnc = function(){
//     console.log("Hey");
//     console.log("Hey");
//     console.log("Hey");
//     console.log("Hey");
//     console.log("Hey");
// }
// fnc();

// // Fat arrow
// let fn = () => (
//     console.log("Fat arrow")
// )
// fn();

// // Function with parameter and arguments.  V1- Parameter
// function ani(v1){
//     console.log(`${v1} Nach raha hai`);
// }
// ani("Hourse");
// ani("Kutta");
// ani("Lakadbagga");


// // Default
// function abc(v1 = 0 , v2 = 0){
//     console.log(v1 + v2);
// }

// abc();

// // Rest
// function n(...val){
//     console.log(...val);
// }

// n(1,2,3,4,5,6,7,8);

// // Return 
// function u() {
//     return 12;
// }

// let data = u();
// console.log(data);

// // first class function -> function use to value.

// function firstc(val) {
//     val();
// }
// firstc(
//     function() {
//         console.log("This is first class function");
//     }
// );

// // pure and impure fun.
// let age = 12;
// // pure
// function abcd() {                  
//     console.log("hehhee");
// }
// // Impure
// function hui() {
//     a++;
// }

// // closures fun.
// function abci(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// // Lexical scoping function
// function abcc() {
//     let a = 12;
//     function bcd(){
//         let b = 14;
//         function nbv(){
//             let c = 16;
//         }
//     }
// }

// //                              Arrays

// let value = [1,2,3,4,5];
// console.log(value);

// value.push(6);
// console.log(value);

// value.pop();
// console.log(value);

// value.shift();
// console.log(value);

// value.unshift(0);
// console.log(value);

// value.slice(2,1);
// console.log(value);

// value.reverse();
// console.log(value);

// let sr = value.sort(function (a,b){
//     return b - a;
// })
// // A-B asce B-A dec

// // For-each
// let pq = [13,23,7,90,1];
// pq.forEach(function (val){
//     console.log(val + 5);
// });

// // Map   -> Blank array we return value it can store in the new empty array.
// let io = [11,54,234,2,42];
// let newarr = io.map(function(val){
//     if(val > 10) return val;
// })

// // Filter
// let fil = [1,2,3,4,5,6,7,8];

// let newfil = fil.filter(function(val){
//     if ( val > 4) return true;
// })

// // Reduce  -> Return one value
// let am = [1,2,3,4,5];
// let newam =am.reduce(function(accumlator,val){
//     return accumlator + val;
// })

// // Find
// let ne = [1,2,3,1,4,5];
// let newne =am.find(function(val){
//     return val === 1;
// })


// //                              Objects

// // key value pair
// let obj = {
//     name : "Nishit",
//     address : {
//         city : "ahemdabad",
//     },
//     age : 21,
// };

// obj['age'];

// // Nestig one obj. ni andar one and deep access -> obj.address.city;
// obj.address.city;

// // Destructuing -> make a variable in a obj.
// let {city} = obj.address;

