// Урок 1

// Задание 1
var temperature = +prompt("Введите температуру в грудусах Цельсия")
var result = (9 / 5) * temperature + 32;
alert(result);


// Задание 3
var name = "Василий";
var admin = name;
alert(admin);


// Задание 4
var expression = 1000 + "108";
alert(expression);


// Задание 5*
var a = 5, b = 7;
[a, b] = [b, a]
alert("a= " + a + "\nb= " + b);

// Урок 2

// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 a - Сначала увеличивается на единицу затем присваивается
// d = b++; alert(d);           // 1 b - Сначала присваивается потом увеличивается на единицу
// c = (2 + ++a); alert(c);      // 5 с = (2 + 1 + 2)
// d = (2 + b++); alert(d);      // 4 d = (2 + 2) после данного действия b увеличилась на единицу
// alert(a);                    // 3 
// alert(b);                    // 3

// Задание 2
var a = 2;
var x = 1 + (a *= 2); Ответ 5, так как *= умножает значение a на число 2

// Задание 3
var a = +prompt("Введите число");
var b = +prompt("Введите число");
if (a > 0 && b > 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert(a + b);
}
// Задание 4
var a = parseInt(Math.random() * (15 - 0) + 0);
switch (a) {
    case 0:
        document.write(0 + " ");
    case 1:
        document.write(1 + " ");
    case 2:
        document.write(2 + " ");
    case 3:
        document.write(3 + " ");
    case 4:
        document.write(4 + " ");
    case 5:
        document.write(5 + " ");
    case 6:
        document.write(6 + " ");
    case 7:
        document.write(7 + " ");
    case 8:
        document.write(8 + " ");
    case 9:
        document.write(9 + " ");
    case 10:
        document.write(10 + " ");
    case 11:
        document.write(11 + " ");
    case 12:
        document.write(12 + " ");
    case 13:
        document.write(13 + " ");
    case 14:
        document.write(14 + " ");
    case 15:
        document.write(15 + " ");

        // Задание 5
        function operations(a, b) {
            var c = a + b;
            var d = a - b;
            var e = a * b;
            var f = a / b;
            return alert('Сумма = ' + c + '\nРазность = ' + d + '\nРезультат умножения = ' + e + '\nРезультат деления = ' + f);
        }
        operations(4, 2);

        // Задание 6
        function sum(arg1, arg2) {
            var c = arg1 + arg2;
            return alert('Сумма = ' + c);
        }
        function raznost(arg1, arg2) {
            var c = arg1 - arg2;
            return alert('Разность = ' + c);
        }
        function umnozheniye(arg1, arg2) {
            var c = arg1 * arg2;
            return alert('Результат умножения = ' + c);
        }
        function division(arg1, arg2) {
            var c = arg1 / arg2;
            return alert('Результат деления = ' + c);
        }
        function mathOperation(arg1, arg2, operation) {
            return;
        }
        mathOperation(2, 3, raznost(2, 3));

        // Задание 8
        var a = +prompt('Введите число');
        var n = +prompt('Введите степень');

        function cycle(a, n) {
            if (n == 1) {
                return a;
            } else {
                return a * cycle(a, --n);
            }
        }
        alert(cycle(a, n));
        // Урок 3
        // Задание 1
        var n = 2;
        while (n <= 100) {
            if (examination(n)) {
                console.log(n);
            }
            n++;
        }

        function examination(n) {
            var i = 2;
            while (i < n) {
                if (n % i == 0) {
                    return false;
                }
                i++;
            }
            return true;
        }
        // Задание 2
        var goods = [
            {
                title: "Товар 1",
                price: 100,
                count: 3,
            },
            {
                title: "Товар 2",
                price: 200,
                count: 2,
            },
            {
                title: "Товар 3",
                price: 300,
                count: 5,
            },
        ];
        for (var sum of goods) {
            sum = sum.count * sum.price;
            alert(sum);
        }
        // Задание 4
        var n = 0;
        for (i = 0; i < 10; i++) {
            console.log(n);
            n++;
        }

        // Задание 5
        var n = "x";
        for (i = 0; i < 20; i++) {
            console.log(n);
            n = n + "x";
        }
        // Урок 4
        // Задание 1
        var n = +prompt('ВВедите 3-х значное число!');

        if (n > 999) {
            +prompt('Ошибка! Прошу ввести повторно 3-х значное число');
        }
        var obj = {
        };
        function f(num) {
            obj.hundreds = num[0];
            obj.dozens = num[1];
            obj.units = num[2];
        }
        f(n);
        console.log(obj);

        // Задание 3*
        var questions = [
            {
                question1: "Назовите столицу Венгрии?",
                variant1: "Лодон",
                variant2: "Москва",
                variant3: "Будапешт",
                variant4: "Прага",
                answer: 3
            },
            {
                question1: "Назовите столицу Нидерландов?",
                variant1: "Амстердам",
                variant2: "Стокгольм",
                variant3: "Будапешт",
                variant4: "Лиссабон",
                answer: 1
            }
        ];

        function questionAsk(a) {
            var variantPlayer = +prompt(questions[a].question1 + "\n" + "1. " + questions[a].variant1 + "\n" + "2. " + questions[a].variant2 + "\n" + "3. " + questions[a].variant3 + "\n" + "4. " + questions[a].variant4)
            examination(variantPlayer);
            return variantPlayer;
        }

        var n = 0;
        for (i = 0; i < 1; i++) { //Добрый день! В данном месте у меня возникли проблемы. код не работает.
            questionAsk(i);
            if (variantPlayer == questions[n].answer) {
                alert('Ответ верный');
                n++;
            } else {
                alert("Ответ не верный! Попробуйте еще раз!");
                break;
            }
        }

        function examination(a) {
            if (a <= 0 || a > 4) {
                alert('Вы ввели недопустимый символ');
                return false;
            }
            return true;
        }
