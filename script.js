// Урок 1

// Задание 1
// var temperature = +prompt("Введите температуру в грудусах Цельсия")
// var result = (9 / 5) * temperature + 32;
// alert(result);


// Задание 3
// var name = "Василий";
// var admin = name;
// alert(admin);


// Задание 4
// var expression = 1000 + "108";
// alert(expression);


// Задание 5*
// var a = 5, b = 7;
// [a, b] = [b, a]
// alert("a= " + a + "\nb= " + b);

// Урок 2

// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2 + ++a); alert(c);      // 5
// d = (2 + b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3

// Задание 2
// var a = 2;
// var x = 1 + (a *= 2); Ответ 5, так как *= умножает значение a на число 2

// Задание 3
// var a = +prompt("Введите число");
// var b = +prompt("Введите число");
// if (a > 0 && b > 0) {
//     alert(a - b);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
//     alert(a + b);
// }
// Задание 4
// var a = parseInt(Math.random() * (15 - 0) + 0);
// alert(a);

// Задание 5
// function operations(a, b) {
//     var c = a + b;
//     var d = a - b;
//     var e = a * b;
//     var f = a / b;
//     return alert('Сумма = ' + c + '\nРазность = ' + d + '\nРезультат умножения = ' + e + '\nРезультат деления = ' + f);
// }
// operations(4, 2);

// Задание 6
// function sum(arg1, arg2) {
//     var c = arg1 + arg2;
//     return alert('Сумма = ' + c);
// }
// function raznost(arg1, arg2) {
//     var c = arg1 - arg2;
//     return alert('Разность = ' + c);
// }
// function umnozheniye(arg1, arg2) {
//     var c = arg1 * arg2;
//     return alert('Результат умножения = ' + c);
// }
// function division(arg1, arg2) {
//     var c = arg1 / arg2;
//     return alert('Результат деления = ' + c);
// }
// function mathOperation(arg1, arg2, operation) {
//     return;
// }
// mathOperation(2, 3, raznost(2, 3));

// Задание 8
// var a = +prompt('Введите число');
// var n = +prompt('Введите степень');

// function cycle(a, n) {
//     if (n == 1) {
//         return a;
//     } else {
//         return a * cycle(a, --n);
//     }
// }
// alert(cycle(a, n));

