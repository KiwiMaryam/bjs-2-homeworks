//Задача №1

function getArrayParams(...arr) {

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    // Поиск min, max и sum
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }

    // Вычисление среднего
    const avg = (sum / arr.length).toFixed(2); // Округление до двух знаков после запятой
    
    // Возврат
    return {
        min: min,
        max: max,
        avg: Number(avg)
    };
}

console.log ('Задача №1');

console.log ('Пример №1 - ',getArrayParams(-99, 99, 10));

console.log ('Пример №2 - ',getArrayParams(1, 2, 3, -100, 10));

console.log ('Пример №3 - ',getArrayParams(5));

//Задача №2


function summElementsWorker(...arr) {
    if (!arr || arr.length === 0) return 0; // Проверка на наличие элементов
    return arr.reduce((sum, current) => sum + current, 0);
}

// разница между максимальным и минимальным элементами
function differenceMaxMinWorker(...arr) {
    if (!arr || arr.length === 0) return 0; // Проверка на наличие элементов
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

// Вычисление разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
    if (!arr || arr.length === 0) return 0; // Проверка на наличие элементов
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (const num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num; // Сумма чётных
        } else {
            sumOddElement += num; // Сумма нечётных
        }
    }
    return sumEvenElement - sumOddElement;
}

// вычисление среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
    if (!arr || arr.length === 0) return 0; // Проверка на наличие элементов
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (const num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    }
    return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement; // Проверка на деление на ноль
}

console.log ('Задача №2');

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

//Задача №3

function makeWork(arrOfArr, func) {
    if (!arrOfArr || arrOfArr.length === 0) return 0; // Проверка на наличие элементов
    let maxWorkerResult = -Infinity; // Инициализация максимального результата

    for (let i = 0; i < arrOfArr.length; i++) {
        const currentResult = func(...arrOfArr[i]); // Применение функции-насадки с использованием spread-оператора
        if (currentResult > maxWorkerResult) { // Проверка на максимальное значение
            maxWorkerResult = currentResult; // Обновление максимального результата
        }
    }
    
    return maxWorkerResult; // Возврат максимального результата
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log('Задача №3');
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72