// let array = [2,2,2,2,2,22,4,4,44,4,4,5,5,5,56,6,6,6,6,4,4,87,87,87,87,00,0,0,0]
// let newArray = []
// for(var number of array){
//   if(newArray.includes(number)) continue
//   newArray.push(number)
// }
// console.log(array);
// console.log(newArray);
//способ 1

//способ 2
let array2 = [2,2,2,2,2,22,4,4,44,4,4,5,5,5,56,6,6,6,6,4,4,87,87,87,87,00,0,0,0]
let arr_2 = array2.filter((item, index) => {
  return array2.indexOf(item) === index
});
console.log(arr_2);