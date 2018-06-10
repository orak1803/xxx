
var veganFoodList = {
    'pita':     171,
    'banana':   135
};

var veganFoodService = {};

veganFoodService.getFoodTypes = function() {
    return Object.keys(veganFoodList);
}

veganFoodService.getCaloriesByFood = function(food) {
    return veganFoodList[food];
}