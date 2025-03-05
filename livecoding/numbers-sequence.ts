/**
 * Решение уровня Junior
 * Функция ищет пропущенные числа, временная сложность O(N^2)
 *
 * При 100 млн элементов нужно будет выполнить 100 млн * 100 млн операций - это катастрофически много
 */
const findMissingNumbersV1Junior = (arr: number[]): number[] | null => {
  // Пропущенные числа (результат работы функции)
  const missed: number[] = [];

  // Максимальное число среди arr
  let max = arr[0];

  // Предыдущее число для цикла
  let previous = arr[0];

  for (const number of arr) {
    // Если текущее число меньше предыдущего - значит массив не отсортирован
    if (number < previous) {
      return null;
    }

    // Если текущее число больше запомненного max - обновляем запомненный max
    if (number > max) {
      max = number;
    }

    // Обновляем предыдущее число
    previous = number;
  }

  // Перебираем всё от 1 до max и проверяем каких чисел нет в arr, те добавляем в missing
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      missed.push(i);
    }
  }

  return missed;
};

/**
 * Решение уровня Middle
 * Функция ищет пропущенные числа, временная сложность N, то есть
 * алгоритм отрабатывает за 1 проход по массиву:
 *
 * При 100 млн элементов нужно будет выполнить 100 млн операций - отлично
 */
const findMissingNumbersV2Middle = (arr: number[]): number[] | null => {
  // Пропущенные числа (результат работы функции)
  const missed: number[] = [];

  // Предыдущее число для цикла
  let previous = arr[0];

  // Перебираем каждое число массива
  for (const number of arr) {
    // Если текущее число меньше предыдущего - значит массив не отсортирован
    if (number < previous) {
      return null;
    }

    // Добавляем все числа между предыдущим и текущим.
    // Например - Если предыдущее число 3, а текущее 7, то пропущенные - от 3+1 до 7 (То есть 4, 5, 6)
    // Например - Если предыдущее число 5, а текущее 6, то цикл и не запустится
    for (let i = previous + 1; i < number; i++) {
      missed.push(i);
    }

    // Обновляем предыдущее число
    previous = number;
  }

  return missed;
};

const test1 = [1, 3, 6, 10, 11];
const test2 = [1, 5];
const test3 = [1, 5, 2];
const test4: number[] = [];

console.log(findMissingNumbersV1Junior(test1));
console.log(findMissingNumbersV1Junior(test2));
console.log(findMissingNumbersV1Junior(test3));
console.log(findMissingNumbersV1Junior(test4));
console.log();

console.log(findMissingNumbersV2Middle(test1));
console.log(findMissingNumbersV2Middle(test2));
console.log(findMissingNumbersV2Middle(test3));
console.log(findMissingNumbersV2Middle(test4));

/*
Тесты производительности
 */

const chanceToSkip = 0.3;
const limit = 1_000_000;

const numbers = [];

for (let i = 0; i < limit; i++) {
  if (Math.random() > chanceToSkip) {
    numbers.push(i);
  }
}

console.log(`\nСгенерирована последовательность из ${limit} чисел. Из них пропущено: ${limit - numbers.length}`);

let start = performance.now();
findMissingNumbersV1Junior(numbers);
const durationV1 = performance.now() - start;

start = performance.now();
findMissingNumbersV2Middle(numbers);
const durationV2 = performance.now() - start;

console.log(`Время работы V1: ${Math.floor(durationV1)} ms`);
console.log(`Время работы V2: ${Math.floor(durationV2)} ms`);
/*
Сгенерирован массив из 1000000 чисел. Из них пропущено: 300007
Время работы V1: 67013 ms (≈ 1 минута 7 секунд)
Время работы V2: 12 ms (≈ 12 миллисекунд)
 */
