### Содержание
1. [Git](#Git)
2. [Node.JS](#NodeJS)
3. [JavaScript](#JavaScript)
4. [TypeScript](#TypeScript)
5. [Nest.JS](#NestJS)
6. [PostgreSQL](#PostgreSQL)


---

# Git
* Что такое **VCS**?
* Что такое **Git**?
* В чём отличие **Git** и **GitHub**/**GitLab**/**Bitbucket**?
* Что такое **Git Flow**?
* Зачем нужны ветки и что это?
* Что такое **rebase, merge**? В чём их отличие?
* Что такое (мерж)конфликт, когда он возникает и как его резолвить?
* Что такое **commit**? Что делает флаг **—amend**?
* Что такое **cherry-pick**?

---

# Node.JS
## Теория [Node.JS]
* Что такое **npm**?
* Что такое **Node.JS**?
* Что такое **LTS** версия?
* Какая актуальная **LTS** версия **Node.JS**? Какая последняя версия **Node.JS**? Когда она вышла? Когда будет следующая **LTS**?
* Что описано в **package.json** и **package_lock.json** файлах?
  * Нужно ли коммитить локфайл?
  * Почему локфайл такой большой?
* В чем отличие **npm ci** от **npm i**?
* Открыл старую репу, установил зависимости через **npm install**, появились какие-то изменения в **package-lock.json** файле.
  * Какие изменения? Почему они появились?
  * Нужно ли откатывать эти изменения? Нужно ли их коммитить?
  * Так и должно быть? Да - почему? Нет - как этого можно было бы избежать?
* Является ли **Node.JS** однопоточным?
* Расскажите как устроена обработка асинхронных задач в **Node.JS**?
* Что такое макро и микро задачи?
* Что такое **EventLoop**?
* Как обновить одну зависимость? Как обновить несколько (или все) зависимости?

---

## Практика [Node.JS]

Что выведет код?
```javascript
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);

let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});

p.then(function(){
    console.log('Обработка промиса');
});

console.log('Конец скрипта');
```
---
Что выведет код?
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
```
---
Почему добавление 4-го параллельного хеширования никак не изменило время работы программы, а добавление
5-го увеличило время работы программы в 2 раза?  
Подсказка: Такое же поведение будет у fs, dns.lookup, crypto и zlib. А так же оно регулируется переменной `UV_THREADPOOL_SIZE`.
```typescript
import { hash as bcryptHash } from 'bcrypt';

const hash = () => bcryptHash('', 14);

const main = async () => {
  let start = new Date().getTime();
  const hashes3 = await Promise.all([hash(), hash(), hash()]);
  console.log(`Время создания 3 хешей: ${new Date().getTime() - start} ms`);

  start = new Date().getTime();
  const hashes4 = await Promise.all([hash(), hash(), hash(), hash()]);
  console.log(`Время создания 4 хешей: ${new Date().getTime() - start} ms`);

  start = new Date().getTime();
  const hashes5 = await Promise.all([hash(), hash(), hash(), hash(), hash()]);
  console.log(`Время создания 5 хешей: ${new Date().getTime() - start} ms`);
};

main();
```

---

Объясните, почему во внешних функциях порядок вывода такой - сначала `timeout`, потом `immediate`, а во
внутренних порядок поменялся - сначала `immediate`, а потом `timeout`.
```text
startup
tick
timeout
immediate
inner immediate
inner timeout

```
```javascript
process.nextTick(() => {
  console.log('tick');
});

setImmediate(() => {
  console.log('immediate');

  setTimeout(() => {
    console.log('inner timeout');
  }, 0);

  setImmediate(() => {
    console.log('inner immediate');
  });
});

setTimeout(() => {
  console.log('timeout');
}, 0);

const startup = 'startup';

console.log(startup);
```

---

# JavaScript
## Теория [JavaScript]

* Какие типы данных есть в **JavaScript**?
* Что такое **Symbol**?
* Что такое **BigInt**?
* В чем отличие **null** от **undefined**?
* Какие значения дадут **false** при конвертации в **Boolean**?
* Какие ссылочные типы данных вы знаете?
* Как сравнить ссылочные типы данных?
* Что такое колбеки? Актуальны ли они?
* Как использовать **reduce**?
* В чем разница цикла **.map** и **.forEach**?
* В чем разница циклов **.find**, **.filter**, **.map**, **.reduce**?
* Что такое **EventEmitter**?
* Что такое **Promise**? На смену чему они пришли?
* Можно ли самому создать **Promise**?
* Какие статусы есть у **Promise**?
* В чём отличие методов **Promise.all**, **Promise.allSettled** и **Promise.race**?
* Какие методы для отложенного выполнения кода знаете? (4 штуки) В чем их отличие?
* Что такое контекст **this**, в каких случаях его можно потерять?
* Зачем нужны и в чем отличие **bind, call, apply**?

---

## Практика [JavaScript]
Что выведет код?
```javascript
const storage = [
  { age: 10, name: 'first' },
  { age: 20, name: 'second' },
  { age: 30, name: 'third' },
  { age: 40, name: 'fourth' },
];

const a = storage.find((s) => s.age > 20);
const b = storage.filter((s) => s.age > 20);
const c = storage.map((s) => s.age > 20);
const d = storage.forEach((s) => s.age > 20);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

```

---

Что выведет код?
```javascript
console.log(i);

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

console.log(i);
```
Теперь исправьте код, чтобы он выводил каждое новое число спустя 1 секунду после предыдущего.

---

# TypeScript
## Теория [TypeScript]
* Какая актуальная версия **TypeScript**?
* Как добавить поддержку **TypeScript** в проект?
* Зачем нужен **tsconfig.json**? Приведите примеры некоторых настроек оттуда.
* Что такое стрикты, сктриктмод и прочие strict-настройки в **tsconfig.json**?
* Что такое классы? Что такое инстанс класса?
* Поддерживает ли **TypeScript** множественное наследование (наследование нескольких классов сразу)?
* Поддерживает ли **TypeScript** множественную имплементацию интерфейсов (имплементация нескольких интерфейсов сразу)?
* В чем отличие интерфейса и типа?
* Что такое дженерики? Какие встроенные дженерики вы знаете?
* Какой протокол используется для передачи данных в Backend?
* В чем глобальное отличие **HTTP** от **WebSockets**? Когда лучше использовать **WebSockets**?
* Что такое **health-check**?
* В чем отличие **авторизации** от **аутентификации**?

---

## Практика [TypeScript]
Напишите рекурсивную функцию, которая пишет слово наоборот
```typescript
const word = 'code';

// Результат: edoc
const result = reverse(word);
```

---
Напишите функцию, которая находит второе наибольшее число в массиве
```typescript
const values = [1, -1, 0, 2, -2, 3, -3, 4, -4, 5, -5];

const secondMaxValue = find2ndMaxValue(values); // 4

find2ndMaxValue([0, 1, 1, 1, 2, 2, 2, 2]); // 2
```

---

У вас есть два отсортированных массива. Объедините их в один отсортированный массив за один проход.  
То есть не в две операции "объединить" а потом отдельно "отсортировать".
```typescript
const arr1 = [1, 5, 10];
const arr2 = [1, 2, 3, 5, 9, 11, 12, 13];

// Результат:
const result = [1, 1, 2, 3, 5, 5, 9, 10, 11, 12, 13];
```

---
Напишите функции для нахождения TLD (top level domain) для переданной в функцию ссылки.
Решение должно содержать минимум 2 реализации.
```typescript
// ru
const sampleUri1 = 'https://username:password@www.example.ru:888/path.to/something?a=b&c=d.e.f.g';

// com
const sampleUri2 = 'https://www.example.com/path.to/something?a=b&c=d.e.f.g';

// localhost
const sampleUri3 = 'https://localhost/path.to/something?a=b&c=d.e.f.g';
```


---

# Nest.JS
* Что такое Nest.JS?
* Какие HTTP-платформы (адаптеры) может использовать Nest.JS?
* Что такое провайдеры, модули, зависимости?
* Что такое динамические модули?
* Какие стадии жизненного цикла компонентов Nest.JS вы знаете? Зачем может использоваться onModuleInit?
* Какая актуальная версия Nest.JS?
* Что такое Swagger? Как он настраивается в Nest.JS?
* Что такое Pipes?
* Зачем нужны и как создать Guard, middleware, Exception Filter ?
* Что такое DTO? Как их можно валидировать с помощью class-validator и class-transformer?
* Что такое переменные окружения? Как их можно прочитать в Nest.JS?

---

# PostgreSQL
## Теория [PostgreSQL]
* Какие виды баз данных вы знаете (реляционные, документные, колоночные, key-value и т.д.)?
  - Приведите примеры представителей для каждого вида (PostgreSQL, MySQL, MongoDB, Clickhouse, Redis и т.д.)
  - В чем их различия?
  - Приведите примеры использования каждой из баз
* В чем ключевое преимущество реляционных баз данных перед остальными? Почему именно они используются чаще всего? (реляционная => relations => связи таблиц)
* Что такое первичные и внешние ключи?
* Какие виды связей бывают в реляционных базах данных? Приведите пример для каждой из связи:
  * 1-to-1
  * 1-to-M
  * M-to-1
  * M-to-M
  * С помощью чего реализовывается связь M-to-M?
* Что такое индексы в PostgreSQL? Какие виды индексов вы знаете?
* Что делает explain в PosgreSQL?
* Что такое ORM? Приведите примеры ORM.
* Какие виды операций существуют в SQL? (select, insert, update, delete)
* Что означает ключевое слово ALTER?
* Что такое JOIN и в чем их отличия:
  * inner join
  * cross join (ещё называют умножением)
  * outer:
    *left join
    *right join
* Обязательно ли делать **join** по первичным или внешним ключам? Можно ли делать **join** по другим полям?
* Как в **PostgreSQL** сделать колонку уникальной? Чтобы не было возможности иметь 2 одинаковых значения в разных строках.
* Как в **PostgreSQL** сделать несколько колонок уникальными?
* Что такое **CTE**?
* Что такое **GROUP BY**?
* Что такое **ORDER BY**? Что значит **asc, desc**?
* Что такое HAVING и оконные функции?
* Что выдаст запрос `select null = null` ? Как правильно сравнивать что `null` равен `null`?
* Что такое миграции? Сиды?
* В чем отличие **ilike** от **like**?
* Есть ли в **PostgreSQL** тип данных для хранения **json** объектов?
* В чем отличие типа данных **json** от **jsonb** в **PostgreSQL**?
* Что такое транзакции? Какие уровни изоляции транзакций вы знаете?
* В чем отличие типа данных varchar(n) от char(n)?

## Практика [PostgreSQL]
* Дана табличка пользователей (id, email). Как найти дублирующиеся email?

---

Создайте и наполните таблицы
```sql
create table authors (
  id int,
  name varchar(255)
);
 
create table books (
  id int,
  author_id int,
  title varchar(255),
  pages int
);
 
insert into authors (id, name) values (1, 'Ivan'), (2, 'Vasya'), (3, 'Petya');
insert into books (id, author_id, title, pages) values
(1, 1, 'Book1', 2100),
(2, 1, 'Book2', 100),
(3, 2, 'Book3', 100),
(4, 2, 'Book2', 100),
(5, 2, 'Book5', 2100),
(6, 2, 'Book6', 2200),
(7, 2, 'Book7', 3100),
(8, 2, 'Book8', 100),
(9, 2, 'Book9', 100),
(10, 2, 'Book10', 100);
```
* Выведите имя автора, общее количество его книг, и количество его книг-гигантов, то есть книг, у которых более 1000 страниц
* Выведите топ авторов по количеству книг-стостраничников, то есть имя автора, общее количество его книг, количество его книг размером 100 страниц, и этот список должен быть отсортирован по убыванию количества книг-стостраничников
