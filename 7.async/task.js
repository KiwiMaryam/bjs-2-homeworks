class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // ID таймера
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall: true // Изначально звонок может быть вызван
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }

    start() {
        // Проверяем, запущен ли интервал
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                // Проверяем, совпадает ли текущее время с временем звонка
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        // Остановка интервала
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// Пример использования
const alarmClock = new AlarmClock();
alarmClock.addClock('10:00', () => console.log('Пора вставать!'));
alarmClock.start();
