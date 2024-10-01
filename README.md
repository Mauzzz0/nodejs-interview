# Теоретические вопросы
1. Склонил репу, установил зависимости через `npm install`, появились какие-то изменения в `package-lock.json` файле:
   * Какие изменения? Почему они появились?
   * Нужно ли откатывать эти изменения? Нужно ли их коммитить?
   * Так и должно быть? Да - почему? Нет - как этого можно было бы избежать?

# Практические вопросы

1. Объясните, почему во внешних функциях порядок вывода такой - сначала `timeout`, потом `immediate`, а во
внутренних порядок поменялся - сначала `immediate`, а потом `timeout`.
```text
startup
tick
timeout
immediate
inner immediate
inner timeout

```
```typescript
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

2. Что выведет этот код?
   * Исправьте код, чтобы он выводил каждое новое число спустя 1 секунду после предыдущего
```typescript
var i = 0;
for (i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

3. Напишите функцию, которая принимает на вход арабское число, а возвращает римское
```typescript
const convert = (num: number): string => {
  const data = [
    { arab: 1000, rome: 'M' },
    { arab: 900, rome: 'CM' },
    { arab: 500, rome: 'D' },
    { arab: 400, rome: 'CD' },
    { arab: 100, rome: 'C' },
    { arab: 90, rome: 'XC' },
    { arab: 50, rome: 'XL' },
    { arab: 40, rome: 'L' },
    { arab: 10, rome: 'X' },
    { arab: 9, rome: 'IX' },
    { arab: 5, rome: 'V' },
    { arab: 4, rome: 'IV' },
    { arab: 1, rome: 'I' },
  ];

  for (const { arab, rome } of data) {
    if (num >= arab) {
      return rome + convert(num - arab);
    }
  }

  return '';
};

console.log(convert(2024)); // MMXXIV
```