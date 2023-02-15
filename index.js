// function deepIterator(target) {
//     console.log("Argument: ", target);
//     if (typeof target === 'object') {
//       for (const key in target) {
//         deepIterator(target[key]);
//       }
//     } else {
//       console.log("Logged value: ", target);
//     }
//   }

//   const numbers = [1, [2, [4, [5, [6]], 3]]];

//   deepIterator(numbers);

// const userInfo = {
//   firstName: "Avi",
//   lastName: "Flombaum",
//   company: {
//     name: "Flatbook Labs",
//     jobTitle: "Developer Apprentice",
//   },
//   friends: [
//     {
//       firstName: "Nancy",
//       lastName: "Burgess",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Developer Apprentice",
//       },
//     },
//     {
//       firstName: "Corinna",
//       lastName: "Jackson",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Lead Developer",
//       },
//     },
//   ],
//   projects: [
//     {
//       title: "Flatbook",
//       description:
//         "The premier Flatiron School-based social network in the world.",
//     },
//     {
//       title: "Scuber",
//       description:
//         "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
//     },
//   ],
// };

// function deepIterator(target) {
//   if (Array.isArray(target)) {
//     for (const element of target) {
//       deepIterator(element);
//     }
//   }else if (typeof target === "object") {
//     for (const key in target) {
//       deepIterator(target[key]);
//     }
//   } else {
//     console.log(target);
//   }
// }


// deepIterator(userInfo);
// var isName = 'jon';

// function name(){
  
//   var isName;
//   console.log(isName); 
// }
// name();

// function imNotSure(){
//     console.log(tellMe);
//     var tellMe = 'Doesnt matter';
// }
// program to print the text
// greet();

// let greet = function() {
//     console.log('Hi, there.');
// }
let menu = document.getElementById('menu').innerHTML='z';
console.log(menu);

let button = document.getElementsByClassName('cont1')[0];
console.log(button);
  let line1 = document.getElementsByClassName('cont2')[0];
  let line2 = document.getElementsByClassName('cont3')[0];
  let line3 = document.getElementsByClassName('cont4')[0];
  let nav_col=document.getElementsByClassName('cont5')[0];
  let nav=document.getElementsByTagName('nav')[0];
  console.log(line1, line2, line3);
button.addEventListener('click', function() {
  console.log('clicked');
  line2.classList.toggle('hide');
  line1.classList.toggle('rotate_anticlockwise');
  line3.classList.toggle('rotate_clockwise');
  nav_col.classList.toggle('display');
    nav.classList.toggle('remove');
})


