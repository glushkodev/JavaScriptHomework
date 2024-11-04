// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.


function culc (a, b, c) {
	return (a - b) / c;
}

console.log(culc(4, 7, 9));

 
// Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function min (a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

function max (a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(min(4, 7));
console.log(max(4, 7));


//Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

function pushArr (a,b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		arr.push(i);
	}
	return arr;
}

function printArr (arr) {
	for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
	}
}

let arr = pushArr(a, b);
printArr(arr);


//Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Необходимо найти и вывести наименьшее число в массиве

// используйте внутри функции уже созданные функции для создания массива и поиска мин значения

function getMinInArr (arr) {

	
	
	for (let i = 0; i < arr.length; i++) {
		let minNumber = Infinity;
		
		minNumber = minNumber(arr[i], min);
	}
	console.log(m);
}

let myArr = pushArr (-5, 6);


//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

function isEven (a) {
	if (a % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isEven(7));


//Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательные функции isEven и createArr из предыдущих задач.

function intArr (Arr) {
	let newArr = [];
	for (let i = 0; i < Arr.length; i++) {
		if (isEven(i)) {
			newArr.push(i);
		}
	}
	return newArr;
}

let Arr = pushArr (-5, 6);

console.log(intArr(Arr));


//"Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию" Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.

let str = "Lorem IpsumLorem ipsum dolor sit amet consectetur adipisicing elit";
let maxx = 0;
let LongestWord = "";

function findLongestWord (str) {
	let strArr = str.split(" ");

	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].length > maxx) {
			maxx = strArr[i].length;
			LongestWord = strArr[i];
		}
	}
	console.log(LongestWord);
}

findLongestWord(str);