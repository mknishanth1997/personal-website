document.addEventListener('DOMContentLoaded', () => {
  // Map example
  document
    .querySelector('.js-map-code-block button')
    .addEventListener('click', () => {
      const money = [2, 4, 6, 8, 10];
      let politician = money.map((peopleMoney) => peopleMoney * 2);
      document.querySelector('.rd1').textContent = JSON.stringify(politician);
    });

  // Filter example
  document
    .querySelector('.js-filter-code-block button')
    .addEventListener('click', () => {
      const politicianName = ['Ramesh', 'Suresh', 'Naresh'];
      let HonestPolitician = politicianName.filter(
        (honesty) => honesty === 'honesty'
      );
      document.querySelector('.rd2').textContent = HonestPolitician.length
        ? HonestPolitician
        : 'None';
    });

  // Reduce example
  document
    .querySelector('.js-reduce-code-block button')
    .addEventListener('click', () => {
      const peoplesMoney = [1, 2, 3, 4, 5];
      const taxableIncome = peoplesMoney.reduce((tax, more) => tax + more, 0);
      document.querySelector('.rd3').textContent = taxableIncome + ' Rs';
    });
});

// Async
// 🌟 Closure Example (Father's Money)
function closureFatherMoney() {
  const fatherMoney = '💰 1000Rs';
  return function () {
    return fatherMoney;
  };
}

let child = closureFatherMoney();

document.getElementById('getMoney').addEventListener('click', function () {
  document.getElementById(
    'moneyDisplay'
  ).textContent = `Father's Money: ${child()}`;
});

// 🍕 Async/Await Example (Order Pizza)
function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍕 Pizza is Ready!');
    }, 2000);
  });
}

document
  .getElementById('orderPizza')
  .addEventListener('click', async function () {
    document.getElementById('pizzaStatus').textContent =
      'Status: Cooking... 🔥';
    let result = await orderPizza();
    document.getElementById('pizzaStatus').textContent = `Status: ${result}`;
  });

// 🎯 Event Delegation (Click a Pizza)
document
  .getElementById('pizzaMenu')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('pizza')) {
      document.getElementById(
        'orderText'
      ).textContent = `Your Order: ${event.target.textContent}`;
    }
  });
