export function CalculateAllPrimesBelow(number) {
    let result = [];
        
    number = parseInt(number)
    for(var i = 3; i < number + 1 ;i++) {
        let couldBePrime = true;
        for(var j = 2; j < i ; j++) {
            if(parseInt(i) % parseInt(j) == 0) couldBePrime = false;
        }
        if(couldBePrime) result.push(i)    
    }
    return result;
}