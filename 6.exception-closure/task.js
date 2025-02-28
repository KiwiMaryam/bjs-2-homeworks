// Задача №1
console.log('Задача №1');
function parseCount(value) {
    const result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error.message;
    }
}

// Примеры использования
console.log(validateCount('10'));
console.log(validateCount('abc'));

// Задача №2

console.log('Задача №2');
class Triangle {
    constructor(a, b, c) {
        // Проверка существования треугольника
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const s = this.perimeter / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}

// Примеры использования
const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter); // 12
console.log(triangle1.area); // 6.000

const triangle2 = getTriangle(1, 2, 3);
console.log(triangle2.perimeter); // Ошибка! Треугольник не существует
console.log(triangle2.area); // Ошибка! Треугольник не существует
