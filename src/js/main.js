"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// inspect -> break on -> attribute modifications -> click on element and debugger will pause and show what causes a change to the element //

p.addEventListener('click', makeGreen);

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', 'real')
// Styled
console.log('%c Hello I am some great text', 'font-size:50px; background:red; text-shadow:1px 1px 0 black');
// warning!
console.warn('OH NOOO');
// Error :|
console.error('Shit!');
// Info
console.info('Crocodiles ear 3-4 people per year');
// Testing
console.assert(p.classList.contains('ouch'), 'That is wrong!')
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`); // or just group
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})
// counting
console.count('Kamil');
console.count('Kamil');
console.count('Kamil');
console.count('Kamil');
console.count('Kamil');
console.count('Kamil');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

console.table(dogs);
