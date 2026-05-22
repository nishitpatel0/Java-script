// Event - Koi action hua screen me
// Event react karne ke liye hume event listener ki jarurat hoti hai
// Event listener - Koi event hua to uske react karne ke liye hum event listener ka use karte hai

// // Event listener to change style in h1 tag
// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//     h1.style.color = "red";
// });

// let p = document.querySelector("p");
// p.addEventListener("dblclick", function () {
//     p.style.fontSize = "50px";
// });

// // Event listener to get input value
// let input = document.querySelector("input");
// input.addEventListener("input", function (dets) {
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// })

// // change event
// let sel = document.querySelector("select");
// let device = document.querySelector("#drop");

// sel.addEventListener("change", function (val) {
//     device.textContent = `${val.target.value} is selected`;
// });

// Mouseover and mouseout mousemove events

let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "blue";
})

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
})

window.addEventListener("mousemove", function(dets){
    abcd.style.left = dets.x + "px";
    abcd.style.top = dets.y + "px"; 
})

