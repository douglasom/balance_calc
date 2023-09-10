
// const MongooseService = require( "./MongooseService" ); // Data Access Layer
// const PostModel = require( "../models/post" ); // Database Model

class BalanceService {
  /**
   * @description Create an instance of BalanceService
   */
  constructor() {
    // Create instance of Data Access layer using our desired model
    // this.MongooseServiceInstance = new MongooseService( PostModel );
    this.transactions = [];
  }

  /**
   * @description Attempt to create a post with the provided object
   * @param transaction {object} Object containing all required fields to
   * create an expense
   * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
   */
  async create ( transaction ) {
    this.transactions.push(transaction);
    return transaction;
    // try {
    //   const result = await this.MongooseServiceInstance.create( postToCreate );
    //   return { success: true, body: result };
    // } catch ( err ) {
    //   return { success: false, error: err };
    // }
  }

  async getBalance() {
    return this.transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  }
}

const BalanceServiceInstance = new BalanceService();

module.exports = BalanceServiceInstance;