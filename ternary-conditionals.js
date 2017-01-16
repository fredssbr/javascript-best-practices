/*

TERNARY CONDITIONAL

Help make lengthier conditionals smaller and more concise

*/

var isArthur = false;
var isKing = true;
var isArcher = true;
var weapon;
var helmet;

weapon = isArthur ? "Excalibur" : "Longsword";

/*
However, in this situaion:
*/
console.log("Current weapon: " + isArthur ? "Excalibur" : "Longsword");

/*
It will concatenate the boolean value, which is "false", so that it is not null anymore, which is truthy for JS
 */
console.log("Current weapon: " + (isArthur ? "Excalibur" : "Longsword"));

/*
Ternaries can be compound conditionals
 */
console.log("Current weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword"));

/*
Executable statements can also be used instead of just returning a value
 */
isKing && isArthur ? alert("Hail Arthur, King of the Britons") : alert("Charge on, yeknight, for the glory of the King!");

/* Calling a IIFE (Immediately invoked function expression */
isKing && isArthur ? function(){
        alert("Hail Arthur, King of the Britons");
        console.log("Current weapon: Excalibur");
    }()
    :
    function(){
        alert("Charge on, yeknight, for the glory of the King!");
        console.log("Current weapon: Longsword");
    }();
/*
You can execute multiple actions within a ternary conditional.

WARNING: IF THE CONDITION GETS TOO DENSE, IT MIGHT BE BETTER TO USE A CONDITIONAL BLOCK (IF, SWITCH) INSTEAD
 */

isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite") : (weapon = "Longsword", helmet = "Iron Helm");
console.log("Current weapon: " + weapon + "\nCurrent helmet: " + helmet);

/*
Nested ternary conditional

WARNING: THE SAME AS ABOVE.
 */
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite")
                    :
                    isArcher ? (weapon = "Longbow", helmet = "Mail Helm")
                             : (weapon = "Longsword", helmet = "Iron Helm");
console.log("Current weapon: " + weapon + "\nCurrent helmet: " + helmet);