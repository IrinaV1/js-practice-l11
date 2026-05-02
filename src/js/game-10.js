/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */
const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container-item');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStart);

function handleStart() {
  const promises = [...container.children].map(item => {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > 0.5) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    });
  });
  Promise.allSettled(promises).then(data => {
    data.forEach((item, i) => {
      container.children[i].textContent = '';
      setTimeout(
        () => {
          container.children[i].textContent = item.value || item.reason;
        },
        1000 * (i + 1)
      );

      // console.log(item.value || item.reason);
    });
  });
}
