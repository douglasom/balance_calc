const BalanceServiceInstance = require('../services/balance_service')

const currencyFormatter = require('../services/currency_formatter');

module.exports = (app, express) => {
  const forceTreatingBodyAsJson = express.json({type: '*/*'});

  // Route that receives a POST request to /sms
  app.post('/spent', forceTreatingBodyAsJson, function (req, res) {
    const body = req.body;
    console.log('Received spent', body);
    BalanceServiceInstance.create({amount: body.amount}).then(r => {
      console.log('Created spent', r);
      res.set('Content-Type', 'text/plain');
      res.send(`You spent: ${currencyFormatter.format(body.amount)}.`);
    });
  });
};
