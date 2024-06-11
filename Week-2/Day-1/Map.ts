const academitePets = ['Daisy', 'Oscar', 'Wiggins', 'Gatsby']
/* const shoutOut = academitePets.map((nn)=>  `Hello ${nn}`);
console.log('Shout out is', shoutOut) */

// Let's use filter to remove Daisy as she's been naughty today
/* const filtered = academitePets.filter ((nb) => nb !=='Daisy')
console.log('Filtered names are', filtered)
console.log('Filtered names are',academitePets ) */

/* const academitePetsWithAges = [
    // array of objects
    { name: 'Daisy', age: 8 }, // ages in months!
    { name: 'Oscar', age: 9 },
    { name: 'Wiggins', age: 44 },
    { name: 'Gatsby', age: 56 },
  ]
const above12Months = academitePetsWithAges.filter ((n) => n.age > 12);
console.log('Academites above 12 months:', above12Months)
const filteredAndShouted = above12Months.map((na) => `Hello ${na.name}`)
console.log('Shout out to our young best friends ', filteredAndShouted) */


/* const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}

let ages = someAcademitesWithAges.map((n) => n.age);
console.log(ages);
let sumfun = (tot:number,age:number) => tot+age;
let startbal=0;
let sumofAges = ages.reduce(sumfun,startbal);
console.log(sumofAges); */

const numbers = [100, 2, 45, 1]
console.log(numbers.sort()) // Not useful

const compareNumbersA = (a:number, b:number) => a - b // ASC
const compareNumbersD = (a:number, b:number) => b - a // DESC
console.log(numbers.sort(compareNumbersA)) // ASC
console.log(numbers.sort(compareNumbersD))