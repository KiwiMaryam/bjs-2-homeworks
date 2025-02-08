"use strict";

// Задача №1

function solveEquation(a, b, c) {
    // Вычисление дискриминанта
    const d = Math.pow(b, 2) - 4 * a * c;
    
    // Проверка значения дискриминанта
    if (d < 0) {
        // Если нет корней
        return [];
    } else if (d === 0) {
        // Если один корень
        const root = -b / (2 * a);
        return [root];
    } else {
        // Если два корня
        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        return [root1, root2];
    }
}

console.log('Задача №1\n');
console.log('Два корня : ',(solveEquation(2, -5, 2)));
console.log('Один корень : ',(solveEquation(4, -4, 1)));
console.log('Нет корней : ',(solveEquation(5, 2 ,1)));

// Задача №2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    let monthlyRate = (percent / 100) / 12;
    
    let loanBody = amount - contribution;
    
    // Если тело кредита меньше или равно нулю, возвращаем 0
    if (loanBody <= 0) {
        return 0;
    }

    let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), countMonths) - 1)));
    
    let totalPayment = monthlyPayment * countMonths;
    
    return Math.round(totalPayment * 100) / 100;
}

console.log('\nЗадача №2\n');
console.log('Кейс №1 :',(calculateTotalMortgage(10, 0, 50000, 12))); // кейс №1
console.log('Кейс №2 :',(calculateTotalMortgage(10, 1000, 50000, 12))); // кейс №2
console.log('Кейс №3 :',(calculateTotalMortgage(10, 0, 20000, 24))); // кейс №3
console.log('Кейс №4 :',(calculateTotalMortgage(10, 1000, 20000, 24))); // кейс №4
console.log('Кейс №5 :',(calculateTotalMortgage(10, 20000, 20000, 24))); // кейс №5
console.log('Кейс №6 :',(calculateTotalMortgage(10, 0, 10000, 36))); // кейс №6
console.log('Кейс №7 :',(calculateTotalMortgage(15, 0, 10000, 36))); // кейс №7
