### Содержание
1. [Computer Science](#computer-science)
2. [Git](#Git)
3. [Node.JS](#NodeJS)
4. [JavaScript](#JavaScript)
5. [TypeScript](#TypeScript)
6. [Nest.JS](#NestJS)
7. [PostgreSQL](#PostgreSQL)

---
# Лайвкодинг
Все задания на лайвкодинг лежат в отдельном файле - [livecoding.md](./livecoding.md)

---
# Computer Science
Общий список ситуативных вопросов по теме **Computer Science**.  
Вполне нормально, что кандидат может не знать часть.
* Что такое **DNS**?
* В чём отличие **TCP** и **UDP** протокола? С помощью какого из них работает **HTTP**?
* В чем глобальное отличие **HTTP** от **WebSockets**? Когда лучше использовать **WebSockets**?
* Какие **HTTP** методы существуют?
* Какие **HTTP** статус-коды существуют?
* Что такое модель **OSI**? Какие уровни можете назвать?
* Какие структуры данных вы знаете? В чём отличие **стека** и **очереди**?
* Что такое **Big O-notation** в контексте алгоритмов?
* Что такое **регулярные выражения**?
* Что такое **Docker**, зачем используется, какие проблемы решает?
* Что такое **мапинг портов** в **Docker**?
* Что такое **docker-compose** и в чём отличие от **Docker**?
* Что такое **CORS**? От чего он защищает?

---
# Общие вопросы по Backend разработке
* Как реализуются регулярные задачи, вызываемые по расписанию? 
* Как реализуется кеширование? Зачем в ключ кеша добавлять query параметры и идентификаторы?
* Что такое **health-check**?
* В чем отличие **авторизации** от **аутентификации**?
* Что такое уровни логирования, какие вы знаете, зачем их разделять?

---
# Как бы вы реализовали / поступили / починили?
* Из **RabbitMQ** берутся по 10 штук задач параллельно, после чего
сервис падает из-за нехватки памяти. Какие варианты решения вы можете предложить?
* Как вы бы реализовали промо-акцию, когда за каждые 300рублей в чеке клиент получает право на участие в розыгрыше?
  * Чем больше денег потрачено, тем больше должны быть его шансы (300 руб -> 1 "шанс", 30тыс руб -> 100 "шансов")
  * Розыгрыш не моментальный, а происходит через несколько месяцев, то есть после конца акции,
розыгрыш происходит между всеми людьми, участвующими в акции.
  * Клиент может отказаться от своего оплаченного заказа, в таком случае деньги возвращаются, а
заказ больше не участвует в розыгрыше.
* Как вы бы реализовали сервис для сокращения ссылок?
  * Какие пути и методы были бы у API?
  * Какую базу данных использовали бы?
  * Как анализировали эффективность работы?
* Как вы бы реализовали сервис для отложенных напоминаний?
  * Какие пути и методы были бы у API?
  * Какую базу данных использовали бы?
  * Как запускали бы напоминания по расписанию?

---
# Технологии
* Что такое **Redis**, зачем может использоваться?
* Что такое **RabbitMQ**, зачем используется?
* Что такое **Kafka**, зачем используется?
* В чем отличие **RabbitMQ** от **Kafka** и что в каких случаях лучше выбирать?

---

# Git
* Что такое **VCS**?
* Что такое **Git**?
* В чём отличие **Git** и **GitHub**/**GitLab**/**Bitbucket**?
* Что такое **Git Flow**?
* Зачем нужны ветки и что это?
* Что такое **rebase, merge**? В чём их отличие?
* Что такое (мерж)конфликт, когда он возникает и как его резолвить?
* Что такое **commit**? Что делает опция **--amend**?
* Что такое **cherry-pick**?
* Когда используется **push** c опцией **--force** ?
* В чём отличие **revert** от **reset** ?
* В чём отличие **hard** и **soft** **reset**?


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
* Является ли **Node.JS** однопоточным? Почему иногда можно услышать про **4 потока**?
* Расскажите как устроена обработка асинхронных задач в **Node.JS**?
* Что такое макро и микро задачи?
* Что такое **EventLoop**?
* Как обновить одну зависимость? Как обновить несколько (или все) зависимости?
* Как можно обнаружить утечку памяти в Node.JS? Какой инструмент дебага пригодится?
* Что такое **Stream**? В каких случаях используются стримы?

---

## Практика [Node.JS]

Что выведет код?
<details>
<summary>Код</summary>

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
</details>


---
Что выведет код?

<details>
<summary>Код</summary>

```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
```
</details>

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
* Как проверить, что в переменной лежит массив?
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
const object = {};

object['1'] = 'Hello';
object[1] = 'World!';

object[{}] = 'My';
object[[1]] = 'name';
object[[1, 2]] = 'is';
object[[{}]] = 'Ruslan';

object[new Date()] = 'good';
object[true] = 'luck,';
object[null] = 'man!';

console.log(object);
```

---
Что выведет код?
```typescript
class A {}
type B = {};
const b: B = {};
const c = () => {};

console.log(typeof {});
console.log(typeof []);
console.log(typeof new A());
console.log(typeof {});
console.log(typeof c);
console.log(typeof null);

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
* Что такое декоратор?

---

## Практика [TypeScript]
---
Какие из этих вызовов функций отработают правильно, а какие покажут ошибку?
```typescript
type User = {
  name: string;
};

type Animal = {
  name: string;
  age: number;
};

type Car = {
  name?: string;
  engine: string;
};

const logUser = (user: User) => {
  console.log(user);
};

const maxim: User = { name: 'maxim' };
const john: Animal = { name: 'john', age: 10 };
const anton = { name: 'anton' };

const astonMartin: Car = { engine: 'AM-12' };
const mcLaren: Car = { name: 'senna', engine: 'M-3' };

// Какие из этих вызовов функций будут работать, а какие нет?
// logUser(maxim);
// logUser(john);
// logUser(anton);
// logUser(astonMartin);
// logUser(mcLaren);
// logUser({ name: 'just object' });

```

---

# Nest.JS
* Что такое **Nest.JS**?
* Какие HTTP-платформы (адаптеры) может использовать **Nest.JS**?
* Что такое провайдеры, модули, зависимости?
* Что такое динамические модули?
* Какие стадии жизненного цикла компонентов **Nest.JS** вы знаете? Зачем может использоваться **onModuleInit**?
* Что такое **forwardRef**? Хорошая ли практика его использовать?
* Какая актуальная версия **Nest.JS**?
* Что такое Swagger? Как он настраивается в **Nest.JS**?
* Что такое Pipes?
* Где в **Nest.JS** используется паттерн **Singletone**?
* Зачем нужны и как создать **Guard**, **middleware**, Exception Filter ?
* Что такое паттерн **DTO**? Как их можно валидировать с помощью **class-validator** и **class-transformer**?
* Что такое переменные окружения? Как их можно прочитать в **Nest.JS**?
* Что такое **ShutdownHooks**? Зачем они нужны? Что такое **Graceful Shutdown**?

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
* Что такое транзакции? Какие уровни изоляции транзакций вы знаете? Что такое **ACID**?
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
