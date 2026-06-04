const accountId = 144553
let accountEmail = "bansi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
because  of issue in block scope and functiona scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])