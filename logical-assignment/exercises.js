//1.8
var lost;
lost = 4 || undefined;

//1.9
/*
When part of an assignment is never evaluated, it's called short-circuiting
 */


//1.10
var darkness = true;
lost = undefined || darkness;

//1.11
(function(){
    var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
    var pocketContents = pocketStuff || [];
})();


//1.12
(function(){
    var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
    var cluesToThePast = pocketStuff || [];
    getMyIdentity(cluesToThePast);

    function getMyIdentity(memories) {
        var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
        return identity || 'unknown';
    }
})();

//1.14
(function(){
    var aiedraIsConvincing = true;
    var dhuunIsCurious = true;
    var beginJourney = aiedraIsConvincing && dhuunIsCurious;
})();

//1.15
var strength = true;
var fear = false;
var surviveThisTrial = strength && !fear;

//1.16
(function(){
    var strength = true;
    var fear = false;
    var pack = {
        food: [ 'carrot',
            'mystery meat',
            'apple',
            'crust of bread',
            'spicy dried sausage',
            'carrot',
            'wedge of sharp cheese',
            'jug of milk',
            'mystery meat',
            'carrot'
        ],
        addFood: function(foodItem) {
            this.food = this.food || [];
            this.food.push(foodItem);
        },
        enoughFood: function(amount) {
            return(this.food.length >= amount);
        }
    };

    var surviveThisTrial = strength && !fear && pack.enoughFood(10);

    console.log(surviveThisTrial);

})();

//1.17 YES

//1.18 - The fear variable will short-circuit the logical assignment, and enoughFood will not be called at all.
(function(){
    var strength = true;
    var fear = true;
    var pack = {
        food: [ 'carrot',
            'mystery meat',
            'apple',
            'crust of bread',
            'spicy dried sausage',
            'carrot',
            'wedge of sharp cheese',
            'jug of milk',
            'mystery meat',
            'carrot'
        ],
        addFood: function(foodItem) {
            this.food = this.food || [];
            this.food.push(foodItem);
        },
        enoughFood: function(amount) {
            return(this.food.length >= amount);
        }
    };

    var surviveThisTrial = strength && !fear && pack.enoughFood(10);
})();