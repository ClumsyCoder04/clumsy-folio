/* let day = parseInt(prompt("input a number between 1 and 7"));
if (day === 5) {
    alert("Today is Thursday");
} else if (!day) {
    day = parseInt(prompt("Enter a real number"));
} else if (day === 1) {
    alert("Today is Sunday");
} else if (day === 2) {
    alert("Today is Monday");
} else if (day === 3) {
    alert("Today is Tuesday");
} else if (day === 4) {
    alert("Today is Wednesday");
} else if (day === 6) {
    alert("Today is Friday");
} else if (day === 7) {
    alert("Today is Friday");
}

console.log('These are the work day of the week')
const day = parseInt(prompt('input a number between 1 and 5'))
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("That's not a number between 1 and 5");

}

else {
    alert('Wrong Number');
}
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
const firstname = prompt("Enter Your First Name")
if(!firstname){
    const firstname = prompt("Enter Your First Name")
} else{
    console.log(`Your first name is ${firstname}`)
} 
let names = ['Ade','Yinka','Ghafar','Azeez', 'Ayomide','Fathia','Ganiu']
                                //Results
names
(7) ['Ade', 'Yinka', 'Ghafar', 'Azeez', 'Ayomide', 'Fathia', 'Ganiu']
names.pop()
'Ganiu'
names.push('Ganiu')
7
names
(7) ['Ade', 'Yinka', 'Ghafar', 'Azeez', 'Ayomide', 'Fathia', 'Ganiu']
names.shift()
'Ade'
names
(6) ['Yinka', 'Ghafar', 'Azeez', 'Ayomide', 'Fathia', 'Ganiu']
names.unshift('Ade')
7
names
(7) ['Ade', 'Yinka', 'Ghafar', 'Azeez', 'Ayomide', 'Fathia', 'Ganiu'] 
*/

// let names = ['Ade','Yinka','Ghafar','Adebowale', 'Ayomide','Fathia','Ganiu']
// let surnames = ['Adebayo']
// let fullname = names.concat(surnames)



// for (let day = 0; day <= 7; day++) {
//     // console.log(i);
//     day = parseInt(prompt("Enter a real number"));
// }
// let day = parseInt(prompt("input a number between 1 and 7"));
// while (!day) {
//     let day = parseInt(prompt("Enter a real number"));
//     if (day === 5) {
//         alert("Today is Thursday");
//     } else if (day === 1) {
//         alert("Today is Sunday");
//     } else if (day === 2) {
//         alert("Today is Monday");
//     } else if (day === 3) {
//         alert("Today is Tuesday");
//     } else if (day === 4) {
//         alert("Today is Wednesday");
//     } else if (day === 6) {
//         alert("Today is Friday");
//     } else if (day === 7) {
//         alert("Today is Friday");
//     }
// }

// let names = ['Ade','Yinka','Ghafar','Adebowale', 'Ayomide','Fathia','Ganiu'];
// const age = [19, 18, 17, 20, 17, 12, 15]


// for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} is ${age[i]} years old`);
//   }

//   for (const [index, name] of names.entries()) {
//     console.log(`${name} is ${age[index]} years old`);
//   }
//   for (let name of names) {
//     console.log(name);
  
//     for (let i = 0; i < names.length; i++) {
//       if (names[i] === name) {
//         console.log(`${name} is ${age[i]} years old`);
//       }
//     }
//   }
  


//  for (let day = 0; day <= 7; day++) {
//       console.log(day);
// }

function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant ('idiot');