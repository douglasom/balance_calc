const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const { BalanceService } = require( "../../services/balance_service" );

mocha.describe( "BalanceService", () => {
  const service = new BalanceService();

  mocha.describe( "Create instance of service", () => {
    it( "Is not null", () => {
      assert.isNotNull( service );
    });

    it( "Exposes the create method", () => {
      assert.isFunction( service.create );
    });

    mocha.describe("Create a transaction", () => {
      it("Returns the transaction", async () => {
        const transaction = await service.create({amount: 10});
        assert.equal(transaction.amount, 10);
      });
    });

    mocha.describe("Get balance", () => {
      it("Returns the balance", async () => {
        const service = new BalanceService();
        await service.create({amount: 10});
        await service.create({amount: 20});
        const balance = await service.getBalance();
        assert.equal(balance, 30);
      });
    });
  });
} );