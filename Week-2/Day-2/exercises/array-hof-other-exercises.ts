// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO
let ages = someAcademitesWithAges.map((n) => n.age);
console.log("All Ages:",ages);
let sumfun = (tot:number,age:number) => tot+age;
let startbal=0;
let sumofAges = ages.reduce(sumfun,startbal);
console.log(`SumofAges: ${sumofAges}`);


// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
let allNames = someAcademitesWithAges.map((n) => n.name);
const order = allNames.sort(); 
console.log("Alphabetically sorted names:", order);

// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges  = (a:number, b:number) => b - a 
console.log("Ages from Old to Young:",ages.sort(sortByAges)) 



// EOF
