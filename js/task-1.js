//TODO: Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

//? Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//? Усі символи slug повинні бути в нижньому регістрі.
//? Усі слова slug повинні бути розділені тире.
//? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function slugify(title){
    let titleArr = title.toLowerCase().split(' ');

    let slug = titleArr.join('-');
    return slug;
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));