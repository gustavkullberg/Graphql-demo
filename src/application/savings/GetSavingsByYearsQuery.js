import {GetsSavingsByYears} from "../../domain/savings/SavingsCalculator";

export const Execute = (amount, yearlyReturn, nbrYears) => GetsSavingsByYears(amount, yearlyReturn, nbrYears)