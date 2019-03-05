import { collections } from "./db";
import { PrimeObject } from "../domain/primes/PrimeObject";

export const primesRepository = {
  async saveOneAsync(primeObject) {
    const perstistedPrimeObject = Object.assign({}, primeObject);
    console.log(perstistedPrimeObject);
    const opResult = await collections.primes.insertOne(perstistedPrimeObject);
    console.log(opResult);
    if (opResult.result.ok) console.log("Great news, operation success!");
    else console.log("Operation falied :(");
  },

  async getAllAsync() {
    const cursor = await collections.primes.find({});
    return cursor.map(c => new PrimeObject(c));
  }
};
