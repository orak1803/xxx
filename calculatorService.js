
var calcService = {}

calcService.calcByFoodAmount = function(calories, amount) {
    if (isNaN(amount) || !Number.isInteger(Number(amount))) {
        console.log(amount + ' is not in the right format!!');
        return 0;
    }
    return calories * amount;
}

calcService.calcSteps = function(amount) {
    if (isNaN(amount) || !Number.isInteger(Number(amount))) {
        console.log(amount + ' is not in the right format!!');
        return 0;
    }
    return amount * 0.05;
}

calcService.calcMeters = function(amount) {
    if (isNaN(amount) || !Number.isInteger(Number(amount))) {
        console.log(amount + ' is not in the right format!!');
        return 0;
    }
    return amount * 0.06;
}