/*
LOGICAL ASSIGNMENT

Logical operators can make assignments shorter than ternary conditionals
 */

var armory = {
    addSword: function(sword){
        /*
        If it's not a falsy value (empty, null, undefined, '', "", 0) assigns the old value, otherwise creates new empty
         array
         */
        this.swords = this.swords ? this.swords : [];

        /*
        Another way to do the same is with a LOGICAL ASSIGMENT: OR

        When used in an assignment, the OR operator will try to select the first leftmost value it encounters that is
        not 'falsy'. It will not even look at the empty array once it finds the truthy value (i.e. short-circuiting)
         */
        this.swords = this.swords || [];
        /*
        WARNING: ORDER MATTERS if you invert the order, [] || this.swords, it will always be true that an array empty is
        empty. So that every time you call the function, it will assign a new empty array to this.swords.
        Make sure to leave the default option last.
         */
        this.swords.push(sword);
    }
};

armory.addSword("Excalibur");
armory.addSword("Katana");
armory.addSword("Claymore");
armory.addSword("Scimitar");

console.log(armory.swords);

/*
When all elements are falsy, it will get the last falsy value found
 */
var result1 = undefined || "";
console.log(result1);

/*
------------------------------------------------------------------------------------------------------------------------
 */

/*
 LOGICAL ASSIGNMENT: AND &&

 The && takes the rightmost truthy value or the first falsy value;
 */

var result1 = undefined && 42;
console.log(result1); //undefined - shor-circuit, 42 is never examined.

var result2 = 0 && ["Sweet", "array"];
console.log(result2); // 0 - short-circuit, the array is never examined

var result3 = "" && {type: "ring", stone: "diamond"};
console.log(result3); // "" - short-circuit, the object is never examined

/*
 In this case, it doesn't matter the order we place the statements, since the compiles seeks to verify that only "truthy"
 values exist, but if it ever arrives at a falsy value, that value gets the assignment

 When all elements are truthy, && will return the last "truthy" value found
 */

var king = "Arthur" && "Cesar";
console.log(king); // "Cesar"

var king2 = "Cesar" && "Arthur";
console.log(king2); // "Arthur"

//Compared to OR (||)
var king3 = "Arthur" || "Cesar";
console.log(king3); // "Arthur"

var king4 = "Cesar" && "Arthur";
console.log(king4); // "Cesar"

/*
 When all elements are falsy, && will return the first falsy value found
 */

var resultAllFalsy1 = undefined && "";
console.log(resultAllFalsy1); // undefined

var resultAllFalsy2 = "" && undefined;
console.log(resultAllFalsy2); // ""

//Compared to OR(||)

var resultAllFalsy3 = undefined || "";
console.log(resultAllFalsy3); // ""

var resultAllFalsy4 = "" || undefined;
console.log(resultAllFalsy4); // undefined

/*
 && is useful in CONTINGENT ASSIGNMENTS
 */

armory.retrieveSword = function(request){
    return (this.swords.indexOf(request) >= 0) ?
        this.swords.splice(this.swords.indexOf(request), 1)[0] :
        alert("No " + request + ", baby!");
};

var isKnight = true;
var weapon = isKnight && armory.retrieveSword("Katana");
//It will only retrieve the sword if it's a knight - Katana!
var weapon = isKnight && armory.retrieveSword("Rapier"); //undefined

isKnight = false;
var weapon = isKnight && armory.retrieveSword("Katana");
//retrieveSword will never be called - false!

var armoryIsOpen = false;
var weapon = armoryIsOpen && isKnight && armory.retrieveSword("Katana"); //false