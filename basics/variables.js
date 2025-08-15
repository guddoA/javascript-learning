const accountId = 12452
var accountEmail = "anagoel6566@gmail.com"
let accountPassword = "88773"
accountCity = "Jaipur"  // not a recommended way to do so
let accountState  // what happened when we do not assign a variable and just let it remain declare
// accoutnId = 87287 ===> will throw an error as not allowed as it is a constant

/*
    Not to use "var" because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])