//------------------------------------------
//Напишите функцию fetchUserData, которая будет получать данные пользователя по URL https://jsonplaceholder.typicode.com/users/1 и выводить имя, email, полный адрес и телефон пользователя на экран.
//------------------------------------------

async function getUserData() {


    let task = `1. Напишите функцию fetchUserData, которая будет получать данные пользователя по URL https://jsonplaceholder.typicode.com/users/1 и выводить имя, email, полный адрес и телефон пользователя на экран.`;

    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(task);
        console.log(data);
    });
}

getUserData();

//------------------------------------------
//Создай функцию fetchRandomDog, которая делает запрос к API для получения случайного изображения собаки (например, https://dog.ceo/api/breeds/image/random), и выводи это изображение на веб-странице, в HTML-документ.
//------------------------------------------

function fetchRundomDog() {
    let task = `<br> 2. Создай функцию fetchRandomDog, которая делает запрос к API для получения случайного изображения собаки (например, https://dog.ceo/api/breeds/image/random), и выводи это изображение на веб-странице, в HTML-документ.`;
    
    let taskElem = document.createElement('div');
    taskElem.innerHTML = task;
    let elem = document.createElement("img");
    let url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
    .then(response => response.json())
    .then(data => elem.src = data.message);
    
    document.body.append(taskElem, elem);
}

fetchRundomDog();

//------------------------------------------
//Напиши функцию fetchStarWarsCharacter, которая получает информацию о персонажах Звездных войн из API https://swapi.dev/api/people/1/ и выводит имя, рост и цвет волос на веб-странице, в HTML-документ.
//------------------------------------------

function fetchStarWarsCharacter() {
   
    let task = `3. Напиши функцию fetchStarWarsCharacter, которая получает информацию о персонажах Звездных войн из API https://swapi.dev/api/people/1/ и выводит имя, рост и цвет волос на веб-странице, в HTML-документ.`;

    let taskElem = document.createElement('div');
    taskElem.innerHTML = task;
    let elemName = document.createElement("div");
    let elemHeight= document.createElement("div");
    let elemColorHair = document.createElement("div");

    let url = "https://swapi.dev/api/people/1/";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        elemName.innerHTML = `Character Name: ${data.name}`;
        elemHeight.innerHTML = `Character Height: ${data.height}`;
        elemColorHair.innerHTML = `Character Hair Color: ${data.hair_color}`;

        document.body.append(taskElem, elemName, elemHeight, elemColorHair);
    });
}

fetchStarWarsCharacter();

//------------------------------------------
//Напишие функцию wordsTranslate для перевода слов с английского на русский, используя API: https://tmp.myitschool.org/API/translate/?source=LANG&target=LANG&word=WORD , где source - с какого языка переводим, target - на какой язык перевод, word - что переводим.
//------------------------------------------

function wordsTranslate(s, t, w) {

    let task = `4. Напишие функцию wordsTranslate для перевода слов с английского на русский, используя API: https://tmp.myitschool.org/API/translate/?source=LANG&target=LANG&word=WORD , где source - с какого языка переводим, target - на какой язык перевод, word - что переводим.`;

    fetch('https://tmp.myitschool.org/API/translate/?source' + s + '&target' + t +'&word' + w)
    .then(response => response.json())
    .then(data => {
        console.log(task);
        console.log(data);
    });
}
wordsTranslate('ru','en','стол');

//------------------------------------------
//Реализуй функцию fetchRandomFact, которая запрашивает случайный факт о человечестве из https://uselessfacts.jsph.pl/random.json?language=en и выводит его на веб-странице.
//------------------------------------------

function fetchRandomFact() {

    let task = `<br> 5. Реализуй функцию fetchRandomFact, которая запрашивает случайный факт о человечестве из https://uselessfacts.jsph.pl/random.json?language=en и выводит его на веб-странице.`;
    let taskElem = document.createElement('div');
    taskElem.innerHTML = task;

    let fact = document.createElement("div");

    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => fact.innerHTML = `Fact: ${data.text}`);

    document.body.append(taskElem, fact);
}
fetchRandomFact();

//------------------------------------------
//Реализуй функцию fetchJokeAndCacheData, которая получает данные (шутку по URL https://official-joke-api.appspot.com/random_joke) и кэширует их в localStorage. При повторном вызове функции проверяй, есть ли данные в кэше, и выводи их, если они доступны.
//занятие 48 время 20:45
//------------------------------------------

async function fetchJokeAndCacheData() {

    let task = `6. Реализуй функцию fetchJokeAndCacheData, которая получает данные (шутку по URL https://official-joke-api.appspot.com/random_joke) и кэширует их в localStorage. При повторном вызове функции проверяй, есть ли данные в кэше, и выводи их, если они доступны.`;

    let joke = localStorage.getItem('joke');
    if (joke) joke = joke;

    if (!joke) {
        joke = await fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            return data.setup;
        });
        localStorage.setItem('joke', joke);
    }

    console.log(task);
    console.log(joke);
}

fetchJokeAndCacheData();

//------------------------------------------
//Создай функцию fetchWeather, которая получает данные о погоде по вашему городу (например, используйте https://www.weatherapi.com/) и отображает текущую температуру и погодные условия.
//------------------------------------------

async function fetchWeather() {

    let task = `7. Создай функцию fetchWeather, которая получает данные о погоде по вашему городу (например, используйте https://www.weatherapi.com/) и отображает текущую температуру и погодные условия.`;

    await fetch('http://api.weatherapi.com/v1/current.json?key=5b7c9e771f374ee8b80182108252403&q=Soligorsk')
    .then(response => response.json())
    .then(data => {
        console.log(task);
        console.log(data.location.name,data.current.temp_c);
    });
}

fetchWeather();

//------------------------------------------
//Реализуй функцию fetchCurrencyRates, которая получает актуальные курсы валют с API, например, https://api.exchangerate-api.com/v4/latest/USD, и отображает их на веб-странице - выведите все валютные пары, либо только одну любую, например: USD/BYN.
//------------------------------------------


function fetchCurrencyRates() {

    let task = `<br> 8. Реализуй функцию fetchCurrencyRates, которая получает актуальные курсы валют с API, например, https://api.exchangerate-api.com/v4/latest/USD, и отображает их на веб-странице - выведите все валютные пары, либо только одну любую, например: USD/BYN.`;
    let taskElem = document.createElement('div');
    taskElem.innerHTML = task;

    let val = document.createElement("div");

    fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => { 
        // val.innerHTML = `Валютная пара: USD ${data.rates.USD} / BYN ${data.rates.BYN}` 
        for (let key in data.rates) {
            val.innerHTML += `USD / ${key} = ${data.rates[key]} <br>`
        }
    });
    document.body.append(taskElem, val);
}

fetchCurrencyRates();

//------------------------------------------
// Реализуйте функцию fetchUsersWithPostCount, которая получает пользователей и их посты из https://jsonplaceholder.typicode.com/users и https://jsonplaceholder.typicode.com/posts, а затем выводит пользователей с количеством их постов.
//------------------------------------------

async function fetchUsersWithPostCount() {
   
    let task = `9. Реализуйте функцию fetchUsersWithPostCount, которая получает пользователей и их посты из https://jsonplaceholder.typicode.com/users и https://jsonplaceholder.typicode.com/posts, а затем выводит пользователей с количеством их постов.`;

    let url1 = "https://jsonplaceholder.typicode.com/users";
    let url2 = "https://jsonplaceholder.typicode.com/posts";
    
    return Promise.all([
        fetch(url1).then(response => response.json()),
        fetch(url2).then(response => response.json()),
    ])
        .then(([users, posts]) => {
            return users.map(user => ({
            username: user.username, 
            postCount: posts.filter(post => post.userId === user.id).length,
            }));
        })
        .then(users => {
            console.log(task);
            users.forEach(user => {
                console.log(`${user.username}: ${user.postCount} posts`);
            });
        });
    }

fetchUsersWithPostCount();

//------------------------------------------
// Напишите функцию fetchWithErrorHandling, которая делает запрос к несуществующему URL и обрабатывает ошибку. Вывести сообщение об ошибке в консоль.
//------------------------------------------

async function fetchWithErrorHandling() {

    let task = `10.Напишите функцию fetchWithErrorHandling, которая делает запрос к несуществующему URL и обрабатывает ошибку. Вывести сообщение об ошибке в консоль.`
    
    await fetch("https://www.soligorskapi.com/")
    .then(response => response.json())
    .then(data => {
        console.log(task)
        console.log(data);
    })

    .catch(err => {
        console.log(task)
        console.log(err.message);
    });
 }

fetchWithErrorHandling();