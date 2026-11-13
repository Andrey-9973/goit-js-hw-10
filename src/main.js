import { PREP_TIME } from './js/menu.js';

const form = document.querySelector('.form');
const orderLog = document.querySelector('.order-log');

function makeOrder(drink, shouldResolve) {
  return new Promise((resolve, reject) => {
    const delay = PREP_TIME[drink];
    setTimeout(() => {
      if (shouldResolve === 'fulfilled') {
        resolve({ drink, delay });
      } else {
        reject({ drink, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const drink = form.elements.drink.value;
  const state = form.elements.state.value;

  const order = makeOrder(drink, state);

  orderLog.insertAdjacentHTML(
    'beforeend',
    `<li class="row-pending" >${drink} · у роботі</li>`
  );
  const row = orderLog.lastChild;
  order
    .then(({ drink, delay }) => {
      row.className = 'row-ok';
      row.textContent = `✅ ${drink} · готове · ${delay} ms`;
    })
    .catch(({ drink, delay }) => {
      row.className = 'row-err';
      row.textContent = `❌ ${drink} · скасовано · ${delay} ms`;
    })
    .finally(() => {
      row.textContent += ` · ${new Date().toLocaleTimeString('uk-UA')}`;
    });
});
