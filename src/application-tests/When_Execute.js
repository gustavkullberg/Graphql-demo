import assert from "assert"
import {Execute} from '../application/primes/PrimeQueryHandler'

describe("When Execute", function() {
  it("returns vector of numbers", function() {
    let numbers = Execute(10)
    assert.notEqual([], numbers)
  });
});