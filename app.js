console.log ('задание 1')

let mounth = prompt ('Введите число от 1 до 12')

let mounths = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']


console.log(mounths [mounth -1]);

console.log ('задание 2')
let dostavka = 250;

let tovar1 = [10000, 'Intel Core i5 12400F', 250];
let tovar2 = [40000, 'RTX 2060 Super', 250];
let tovar3 = [5000, 'Блок питание 500W', 250];

let suumma = tovar1[2]+tovar2[2]+tovar3[2]+tovar1[0]+tovar2[0]+tovar3[0];

console.log (`Общая сумма товара равна ${suumma}`);

let tovars = [tovar1, tovar2, tovar3]

console.log ('задание 3')

let arr = [25, 30, 6, 9, 8]

console.log (`Максмальное число из массивов [25, 30, 6, 9, 8] равно ${Math.max(...arr)}`)

console.log (`Максмальное число из массивов [25, 30, 6, 9, 8] равно ${Math.min(...arr)}`)


console.log ('задание 4')

arr = [
  Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
  Math.floor(Math.random()*10+1),
Math.floor(Math.random()*10+1)

];
arr.sort(function (a, b) {return(a - b)})
console.log(arr.sort())
console.log(arr)

console.log('Задание 5')

let arr2 = [ "Hi", "Hello", "Bonjour"];
arr2 [3] = 'Hola';
console.log(arr2)

console.log('Задание 6')

let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
let c = [...a, ...b];
console.log(c)

console.log('Задание 7')

let arr4 = [1,2,3]
arr4.reverse();
console.log(arr4)

console.log('Задание 8')
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
console.log(fruits.includes('Banana'))

console.log('Задание 9')
const array = [2, 5, 9];
delete array [1];
console.log(array)

