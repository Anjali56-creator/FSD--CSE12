const heroParadies=['Eren', 'Mikasa', 'Armin', 'Levi'];
const heroMaraley=['Zeke', 'Reiner', 'Bertholdt', 'Annie'];


//heroParadies.push(heroMaraley);//push will add the whole array as a single element in the original array
//console.log(heroParadies);


//const allHeroes = heroParadies.concat(heroMaraley);//concatenate return a new array with the elements of both arrays
//console.log(allHeroes);


//spread operator
const allHeroes2=[...heroParadies, ...heroMaraley];//spread operator will add the elements of both arrays into a new array
console.log(allHeroes2);

const array=[1,2,3,[6],7,8,[10,9]];
const flatArray=array.flat();//flat method will flatten the array and return a new array with all the elements of the original array
console.log(flatArray);


console.log(Array.isArray("hello"));//it will return false because "hello" is not an array
console.log(Array.from("hello")); 
console.log(Array.from({name:"Anjali"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));