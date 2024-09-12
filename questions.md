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