//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var finishMas = [];
function action(a, b, c, d) {
    do {
        ok = false;
        event = +prompt(a + b + c + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(d, event);
            finishMas.push(event);
        }
    } while (!ok);
}
action(works.a00, works.a1, works.a2, works.a0)

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        action(works.b00, works.b1, works.b2, works.b0)

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                action(works.d00, works.d1, works.d2, works.d0)

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                action(works.d00, works.d1, works.d2, works.d0)

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        action(works.c00, works.c1, works.c2, works.c0)

        switch (event) {
            case 1: // Второе действие
                action(works.d00, works.d1, works.d2, works.d0)

                break;
            case 2: // Второе действие
                action(works.d00, works.d1, works.d2, works.d0)

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
var finish = +prompt('Введите номер окна ');
if (finish == 1 && finishMas[0] == 1) {
    alert(works.a00 + works.a1);
} else if (finish == 1 && finishMas[0] == 2) {
    alert(works.a00 + works.a2);
} else if (finish == 2 && finishMas[1] == 1) {
    alert(works.b00 + works.b1);
} else if (finish == 2 && finishMas[1] == 2) {
    alert(works.b00 + works.b2);
} else if (finish == 3 && finishMas[2] == 1) {
    alert(works.c00 + works.c1);
} else if (finish == 2 && finishMas[2] == 2) {
    alert(works.c00 + works.c2);
}


alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

