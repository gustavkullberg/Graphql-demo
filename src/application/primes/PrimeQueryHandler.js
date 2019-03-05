import {CalculateAllPrimesBelow} from '../../domain/primes/PrimeCalculator'
import {primesRepository} from "../../infrastructure-mongodb"

export const Execute = (number) => {
    const result = CalculateAllPrimesBelow(number)
    primesRepository.saveOneAsync(result)
    return result
}