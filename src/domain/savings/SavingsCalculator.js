const GetSum = (yearlyAmount ,yearlyReturn, nbrYears) => {
    let sum = 0;
    for(let i = 0; i < nbrYears; i++) {
        sum *= yearlyReturn
        sum += yearlyAmount
    }
    return sum;
}

export const GetsSavingsByYears = (amount, yearlyReturn, nbrYears) => GetSum(amount, yearlyReturn, nbrYears)