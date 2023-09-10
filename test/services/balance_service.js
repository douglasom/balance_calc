const { assert } = require('chai');
const mocha = require('mocha');
const { BalanceService } = require('../../services/balance_service');

mocha.describe('BalanceService', () => {
  mocha.describe('Create instance of service', () => {
    it('Is not null', () => {
      const service = new BalanceService();
      assert.isNotNull(service);
    });

    it('Exposes the create method', () => {
      const service = new BalanceService();
      assert.isFunction(service.create);
    });

    mocha.describe('Create a transaction', () => {
      it('Returns the transaction', async () => {
        const service = new BalanceService();
        const transaction = await service.create({ amount: 10 });
        assert.equal(transaction.amount, 10);
      });
    });

    it('Exposes the getBalance method', () => {
      const service = new BalanceService();
      assert.isFunction(service.getBalance);
    });

    mocha.describe('Get balance', () => {
      it('Returns the balance', async () => {
        const service = new BalanceService();
        await service.create({ amount: 10 });
        await service.create({ amount: 20 });
        const balance = await service.getBalance();
        assert.equal(balance, 30);
      });
    });
  });
});
