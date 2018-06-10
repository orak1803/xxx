
var leftContainer,
foodList,
inputList = {},
inputSteps,
inputMeters,
calcBtn,
comapreContainer,
rightContainer,
resultContainer,
resultLabel,
comapreLabel;


function createFoodPicker(){
    var container = document.createElement('div');
    foodList = document.createElement('ul');
    foodList.classList.add('foodList');
    veganFoodService.getFoodTypes().forEach(fillList);
    meatFoodService.getFoodTypes().forEach(fillList);
    container.appendChild(foodList);
    return container;
}

function fillList(element){
    var item = document.createElement('li');
    item.classList.add('item');
    var itemTitle = document.createElement('span');
    itemTitle.innerHTML = element;
    itemTitle.classList.add('itemTitle');
    inputList[element] = document.createElement('input');
    inputList[element].classList.add('itemInput');
    inputList[element].type = "text";
    inputList[element].placeholder = element + ' amount';
    item.appendChild(itemTitle);
    item.appendChild(inputList[element]);
    foodList.appendChild(item);
}

function createComapreButton(){
    calcBtn = document.createElement('button');
    calcBtn.classList.add('button');
    calcBtn.classList.add('b1');
    calcBtn.id = 'calcBtn';
    calcBtn.innerHTML = 'compare';
    calcBtn.addEventListener('click', CompareCalories);
    return calcBtn;
}

function createFootStepsPicker(){
    var container = document.createElement('div');
    container.style.textAlign = 'center';
    var label = document.createElement('span');
    label.id = 'stepsLabel';
    label.innerHTML = 'Steps';

    inputSteps = document.createElement('input');
    inputSteps.id = 'stepsInput';
    inputSteps.type = 'text';
    inputSteps.placeholder = 'Steps amount';

    container.appendChild(label);
    container.appendChild(inputSteps);
    return container;
}

function createFootMetersPicker(){
    var container = document.createElement('div');
    container.style.textAlign = 'center';
    var label = document.createElement('span');
    label.id = 'metersLabel';
    label.innerHTML = 'Meters';

    inputMeters = document.createElement('input');
    inputMeters.id = 'metersInput';
    inputMeters.type = 'text';
    inputMeters.placeholder = 'Meters amount';

    container.appendChild(label);
    container.appendChild(inputMeters);
    return container;
}

function CompareCalories() {
    var caloriesEaten = Number(calcCaloriesEaten());
    var caloriesBurned = Number(calcCaloriesBurned());
    var sign = '';
    if(caloriesEaten > caloriesBurned){
        sign = '>';
        resultLabel.innerHTML = 'You gain weight';
    }
    else if(caloriesEaten < caloriesBurned){
        sign = '<';
        resultLabel.innerHTML = 'You lose weight';
    }
    else {
        sign = '=';
        resultLabel.innerHTML = 'Balanced!';
    }
    comapreLabel.innerHTML = caloriesEaten.toFixed(2) + 'kcal' + ' ' + sign + ' ' + caloriesBurned.toFixed(2) + 'kcal';
}

function calcCaloriesEaten() {
    var ans = 0;
    veganFoodService.getFoodTypes().forEach(function(veganFood){
        ans += calcService.calcByFoodAmount(veganFoodService.getCaloriesByFood(veganFood), inputList[veganFood].value);
    });
    meatFoodService.getFoodTypes().forEach(function(meatFood){
        ans += calcService.calcByFoodAmount(meatFoodService.getCaloriesByFood(meatFood), inputList[meatFood].value);
    });
    console.log('Left ans = ' + ans);
    return ans;
}

function calcCaloriesBurned() {
    var ans = 0;
    ans += calcService.calcSteps(inputSteps.value);
    ans += calcService.calcMeters(inputMeters.value);
    console.log('Right ans = ' + ans);
    return ans;
}

window.onload = function() {
    resultLabel = document.getElementById('resultLabel');
    comapreLabel = document.getElementById('compareLabel');

    leftContainer = document.getElementById('leftContainer');
    var foodPickerContainer = createFoodPicker();

    comapreContainer = document.getElementById('comapreContainer');
    var comapreButton = createComapreButton();
    var position = ((window.innerWidth / 2.0) - 98.23/2.0);
    comapreContainer.style.left =  position + 'px';  

    rightContainer = document.getElementById('rightContainer');
    var stepPicker = createFootStepsPicker();
    var meterPicker = createFootMetersPicker();

    leftContainer.appendChild(foodPickerContainer);
    comapreContainer.appendChild(comapreButton);
    rightContainer.appendChild(stepPicker)
    rightContainer.appendChild(meterPicker)

}

window.onresize = function (){
    var position = ((window.innerWidth / 2.0) - 98.23/2.0);
    comapreContainer.style.left =  position + 'px';
}