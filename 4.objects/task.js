function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
};

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0; // Если оценрк нет, возвращаем 0
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0); // Суммируем оценки
    return sum / this.marks.length; // Среднее значение
};

// Исключение студента, удаляя данные
Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};

// Примеры использования
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1); 
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2); 
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
