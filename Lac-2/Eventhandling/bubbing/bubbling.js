// Bubbling is the process of an event propagating from the innermost element to the outermost element. When an event occurs on an element, it first triggers any event handlers on that element, then it moves up to the parent element and triggers any event handlers there, and so on until it reaches the root of the document.

let li = document.querySelectorAll('ul');

document.addEventListener('click', function (e) {
    e.target.classList.toggle("lt");
})