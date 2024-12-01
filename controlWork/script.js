console.log("---------------------1----------------------");
// Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.

let cities = ["Soligorsk", "Minsk ", "Borisov"],
	param = "Zhodino,Slutsk,Brest,Mikashevichi,Dobrush,Gomel,Vitebsk,Nesvizh,Molodechno";
	
function addCity(param) {
	let paramArr = [];
	paramArr = param.split(',');
	for (let i = 0; i < paramArr.length; i++) {
		cities.push(paramArr[i]);
	}
	cities.sort();
	console.log(cities);
}

addCity(param);

console.log("---------------------2----------------------");
//Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.

let arr = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']],
	dist = [0, 344, 281, 197],
	arrNames = [],
	arrCities = [],
	arrRezult = [],
	index = 0,
	resultStr = "";

for (let i = 0; i < arr.length; i++) {
	arrCities = arr[i];
	for (let j = 0; j < i; j++) {
		arrNames = arr[j];
	}
}

index = arrNames.indexOf('Максим');

for (let i = 0; i < arrCities.length; i++) {
	arrNames[i] += ' из ';
	arrNames[i] += arrCities[i];
}

resultStr = arrNames.join(', ');
console.log(resultStr);

console.log(`Расстояние между Иваном и Максимом ${dist[index]} км`);

console.log("---------------------3----------------------");
//Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).

function getDays(first, second) {

	let dateA = new Date(first),
		dateB = new Date(second),
		diffDay = (dateA - dateB) / (1000 * 60 * 60 * 24);

	if (diffDay <= 3) {
		console.log(`Между датами ${first} и ${second} разница ${diffDay} дней - дата уже близко`);
	} else if (diffDay > 3 && diffDay < 7) {
		console.log(`Между датами ${first} и ${second} разница ${diffDay} дней - еще есть время`);
	} else if (diffDay >= 7) {
		console.log(`Между датами ${first} и ${second} разница ${diffDay} дней - далековато еще`);
	}
}

getDays('2024-11-28', '2024-11-23');

console.log("---------------------4----------------------");
//Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).

function celsiusToFahrenheit(celsius) {
	let celsiusF = 1.8 * celsius + 32;
	if (celsius >= 5 && celsius < 10) {
		console.log(`${celsius} градусов Цельсия это ${celsiusF} градусов по Фаренгейту - сегодня прохладнее, чем обычно`);
	} else if (celsius >= 0 && celsius < 5) {
		console.log(`${celsius} градусов Цельсия это ${celsiusF} градусов по Фаренгейту - одевайтесь теплее`);
	} else if (celsius < 0 && celsius > -5) {
		console.log(`${celsius} градусов Цельсия это ${celsiusF} градусов по Фаренгейту - сегодня очень холодно`);
	} else if (celsius <= -5) {
		console.log(`${celsius} градусов Цельсия это ${celsiusF} градусов по Фаренгейту - оставайтесь дома`);
	}
}

celsiusToFahrenheit(-15);

console.log("---------------------5----------------------");
//Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.

let arrRand = ["Orange", "Peach", "Apple", "Avocado", "Banana", "Lemon", "Melon",  "Pear", "Apricot", "Persimmon", "Mandarin", "Kiwi"];

function randomElement(arrRand) {
	let indexRand= Math.floor(Math.random() * arrRand.length);
	let elemRand = arrRand[indexRand];
	console.log(elemRand);
}

randomElement(arrRand);

console.log("---------------------6----------------------");
//Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.

let strCeasar = "",
	strUnCeasar = "",
  	code = 0;

function ceasar(str,shift) {
	strCeasar = "";
	for (let i = 0; i < str.length; i++) {
		code = str.charCodeAt(i);
		code = code + shift;
		strCeasar += String.fromCharCode(code);
	}
	console.log(`Зашифрованный текст: ${strCeasar}`);
}

function unCeasar(strCeasar,shift) {
	strUnCeasar = "";
	for (let i = 0; i < strCeasar.length; i++) {
		code = strCeasar.charCodeAt(i);
		code = code - shift;
		strUnCeasar += String.fromCharCode(code);
	}
	console.log(`Расшифрованный текст: ${strUnCeasar}`);
}

ceasar("table",2);
unCeasar(strCeasar,2);

ceasar("Ekaterina",2);
unCeasar(strCeasar,2);

console.log("---------------------7----------------------");
//Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.

function genNumericPassword(length) {
	let password = "";
    for (let i = 0; i < length; i++) {
        password += Math.floor(Math.random() * (9 - 0) + 0);
    }
	console.log(`Сгенерированный пароль из ${length} чисел: ${password}`);
}

genNumericPassword(8);

function genGeneralPassword(length) {
	let specialSymbols = "_-,.&*^$#@+=!",
	symbolsLow = "qwertyuiopasdfghjklzxcvbnm",
	symbolsUpper = "QWERTYUIOPASDFGHJKLZXCVBNM",
	numbs = "123456789",
	password = "";

	let allSymbols = specialSymbols + symbolsLow + symbolsUpper + numbs;

	for (let i = 0; i < length; i++) {
		password += allSymbols.charAt(Math.floor(Math.random() * allSymbols.length));
	}
	
	if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[-._,&*^$#@+=!]/.test(password)) {
		console.log(`Случайно сгенерированный пароль из ${length} символов: ${password}`);
	} else {
		return genGeneralPassword(length);
	}
}

genGeneralPassword(8);

console.log("---------------------8----------------------");
//Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.

function createHtml(width, height, radius, color) {
	if (!width || !height || !radius || !color) {
		let width = Math.floor(Math.random() * (200 - 50) + 50),
			height = Math.floor(Math.random() * (200 - 50) + 50),
			radius = Math.floor(Math.random() * (200 - 0) + 0),
			letters = '0123456789ABCDEF',
			color = '#';
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
		document.write(`<div style="width: ${width}px; height: ${height}px; border-radius: ${radius}px; background-color: ${color};"></div>`);
	
	} else {
	document.write(`<div style="width: ${width}; height: ${height}; border-radius: ${radius}; background-color: ${color};"></div>`);
	}
}

document.write("Случайная фигура");
createHtml();

document.write("Круг");
createHtml("200px", "200px", "100px", "blue");

document.write("Овал");
createHtml("200px", "100px", "100px", "green");

document.write("Квадрат");
createHtml("200px", "200px", "0px", "yellow");

document.write("Прямоугольник");
createHtml("200px", "100px", "0px", "red");

console.log("---------------------9----------------------"); 
//[18+] Создайте функцию-цензор, которая проверяет текст на наличие нецензурных слов и заменяет их на "#". 

// Пример текста: 
// "В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."
// Нецензурные слова: "нахрен", "черт", "бляха".
// Предусмотрите возможность расширения проверяемых слов в тексте.

let text = `В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка.`,
	textCensure = "",
	wordsCensure = ["нахрен", "черт", "бляха"]; //добавлять слова в массив

function checkCensure(text,wordsCensure) {

	let regex = new RegExp(wordsCensure.join('|'), 'gi');

	textCensure = text.replace(regex, (match) => '#'.repeat(match.length));

	console.log(textCensure);
}

checkCensure(text,wordsCensure);

console.log("---------------------10----------------------");
//Создайте функцию-конструктор или отдельный простой объект "Тамагочи" с минимальным набором функций: включение, выключение, вывод общей информации о состоянии (имя, дата рождения, здоровье по 5-бальной шкале, сытость по 5 шкале, сон в часах от 0 до 8), покормить, спать. При включении "друга" запрашивается имя, автоматически добавляется дата рождения, и все показатели состояния устанавливаются в максимальные значения. Каждую минуту (или 1 час, как вы захотите), показатель сытости уменьшается на одну единицу. Каждый раз, когда сытость доходит до 1 и меньше, то уменьшается здоровье на 1 единицу. Если "друг" не спал больше 6 часов, то каждый последующий час здоровье уменьшается на 1 единицу. Чтобы восстановить здоровье, нужно быть сытым и хорошо спать: при каждом вызове метода "покормить" или "спать" соотв. параметры увеличиваются на 1 единицу. Каждый раз, когда параметры сон и сытость приходят к значению 5, то здоровье увеличивается на 1 единицу, но не может превышать максимального значения. По вашему желанию, функции тамагочи могут быть улучшены или добавлены новые. Проявите фантазию!

//Chat gpt

function Tamagotchi() {
    this.name = null;
    this.birthDate = null;
    this.health = 5;
    this.hunger = 5; 
    this.sleep = 8; 
    this.awakeHours = 0; // Количество часов без сна
    this.isActive = false;

    this.init = function () {
        this.name = prompt("Введите имя вашего Тамагочи:");
        this.birthDate = new Date().toLocaleString();
        this.health = 5;
        this.hunger = 5;
        this.sleep = 8;
        this.awakeHours = 0;
        this.isActive = true;

        console.log(`Тамагочи "${this.name}" включён!`);
        console.log(this.getInfo());

        this.startLifeCycle();
    };

    this.getInfo = function () {
        return `
            Имя: ${this.name}
            Дата рождения: ${this.birthDate}
            Здоровье: ${this.health}/5
            Сытость: ${this.hunger}/5
            Сон: ${this.sleep}/8 часов
        `;
    };

    this.feed = function () {
        if (!this.isActive) return console.log("Тамагочи выключен.");
        if (this.hunger < 5) {
            this.hunger++;
            console.log("Тамагочи покормлен!");
        } else {
            console.log("Тамагочи уже сытый!");
        }
        this.checkHealth();
        console.log(this.getInfo());
    };

    this.sleepTime = function () {
        if (!this.isActive) return console.log("Тамагочи выключен.");
        if (this.sleep < 8) {
            this.sleep++;
            this.awakeHours = 0;
            console.log("Тамагочи поспал!");
        } else {
            console.log("Тамагочи уже выспался!");
        }
        this.checkHealth();
        console.log(this.getInfo());
    };

    this.startLifeCycle = function () {
        const interval = setInterval(() => {
            if (!this.isActive) {
                clearInterval(interval);
                return;
            }

            this.hunger--;
            this.awakeHours++;

            if (this.hunger <= 1) {
                this.health--;
                console.log("Тамагочи голоден! Здоровье уменьшается.");
            }

            if (this.awakeHours > 6) {
                this.health--;
                console.log("Тамагочи хочет спать! Здоровье уменьшается.");
            }

            this.checkHealth();

            if (this.health <= 0) {
                console.log("Тамагочи умер...");
                this.isActive = false;
                clearInterval(interval);
            } else {
                console.log(this.getInfo());
            }
        }, 60000); // 1 минута (можно изменить на 1 час: 3600000)
    };

    this.checkHealth = function () {
        if (this.hunger === 5 && this.sleep === 8 && this.health < 5) {
            this.health++;
            console.log("Здоровье восстановлено!");
        }
    };

    this.turnOff = function () {
        this.isActive = false;
        console.log("Тамагочи выключен.");
    };
}


let myTamagotchi = new Tamagotchi();
myTamagotchi.init();
myTamagotchi.startLifeCycle();