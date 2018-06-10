
var meatFoodList = {
    'schnitzel':     400,
    'chicken filet':   212
};

var meatFoodService = {};

meatFoodService.getFoodTypes = function() {
    return Object.keys(meatFoodList);
}

meatFoodService.getCaloriesByFood = function(food) {
    return meatFoodList[food];
}