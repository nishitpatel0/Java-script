//                                     Dom - Document Object Model
//  Dom is part of body.
// Manupulation means change.

// Select element
let abcd = document.getElementById("abcd");
console.dir(abcd);

// Class acess
let abc = document.getElementsByClassName("abcd");
console.dir(abc);

// Most use
let ab = document.querySelector("h1");
console.dir(ab);
let b = document.querySelectorAll("h1");
console.dir(b);

// Change name in H1
let head = document.querySelector("h1");
head.textContent = "Hello nishit kaise ho";

// To add new value in html
head.innerHTML = "<i>Bapu</>";              

// add value using setattribute
let href = document.querySelector("a");
href.setAttribute("href","https://www.google.com");
console.dir(href);

// Remove use removeAttribute use in href.

// ** Create element
let create = document.createElement("h2");
create.textContent = "Hello this is Create element in js";
document.body.append(create);

// ** Addin style
let he = document.querySelector("h1");
he.style.color("red");
he.classList("hulu");