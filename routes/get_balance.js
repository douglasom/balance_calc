const { BalanceServiceInstance } = require('../services/balance_service');

const currencyFormatter = require('../services/currency_formatter');

module.exports = (app) => {
  app.get('/balance', (req, res) => {
    BalanceServiceInstance.getBalance().then((balance) => {
      res.set('Content-Type', 'text/plain');
      res.send(JSON.stringify({ amount: balance, formattedAmount: `${currencyFormatter.format(balance)}` }));
    });
  });
};
