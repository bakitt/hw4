let arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
let count = {};

for (let i of arr) {
    if (count[i] === undefined) {
    count[i] = 1;
    } else {
    count[i]++;
    }
}
console.log(count); 

let array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
let newArray = []
for(var number of array){
  if(newArray.includes(number)) continue
  newArray.push(number)
}
console.log(newArray);