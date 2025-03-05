class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // ID таймера
    }

    addClock(time, callback) {
        // Проверяем наличие обязательных аргументов
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        // Проверяем, есть ли уже звонок с таким временем
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }
        // Добавляем новый звонок в коллекцию
        this.alarmCollection.push({
            callback,
            time,
            canCall: true // Изначально звонок может быть вызван
        });
    }

    removeClock(time) {
        // Удаляем звонок по времени
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        // Получаем текущее время в формате HH:MM
        const date = new Date();
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }

    start() {
        // Проверяем, запущен ли уже интервал
        if (this.intervalId) {
            return;
        }
        // Запускаем интервал для проверки звонков каждую секунду
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                // Проверяем, совпадает ли текущее время с временем звонка
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false; // Запрет на повторный вызов
                    alarm.callback(); // Вызываем колбек
                }
            });
        }, 1000);
    }

    stop() {
        // Останавливаем интервал
        clearInterval(this.intervalId);
        this.intervalId = null; // Сбрасываем ID таймера
    }

    resetAllCalls() {
        // Сбрасываем возможность запусков всех звонков
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        // Останавливаем будильник
        this.stop();
        // Очищаем все звонки
        this.alarmCollection = [];
    }
}

// Пример использования
const alarmClock = new AlarmClock();
alarmClock.addClock('10:00', () => console.log('Пора вставать!'));
alarmClock.start();

// Чтобы очистить все звонки
 alarmClock.clearAlarms();
