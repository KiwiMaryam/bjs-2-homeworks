
// Задача №1

console.log ('Задача №1');
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = Math.min(this.state * 1.5, 100);
    }

    set state(value) {
        if (value < 0) {
            this._state = 0; // состояние меньше 0 не может существовать
        } else if (value > 100) {
            this._state = 100; // состояние не превышает 100
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const sherlock = new PrintEditionItem(
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

const picknick = new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
);

console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15

// Задача №2

console.log ("Задача №2");

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }
        return null; // Иначе книга не найдена
    }
}

// Пример использования
const library = new Library('Библиотека имени Ленина');

library.addBook(
    new DetectiveBook(
        'Артур Конан Дойл',
        'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        'Аркадий и Борис Стругацкие',
        'Пикник на обочине',
        1972,
        168
    )
);
library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));

console.log(library.findBookBy('name', 'Властелин колец')); // null
console.log(library.findBookBy('releaseDate', 1924).name); // "Мурзилка"

console.log('Количество книг до выдачи: ' + library.books.length); // 4
library.giveBookByName('Машина времени');
console.log('Количество книг после выдачи: ' + library.books.length); // 3

// Тестирование
const damagedBook = library.giveBookByName('Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе');
damagedBook.state = 10;
console.log(damagedBook.state);
damagedBook.fix();
console.log(damagedBook.state);
library.addBook(damagedBook);
console.log('Количество книг после добавления восстановленной книги: ' + library.books.length);
