const accountId = 144553
let accountEmail = "sagar@google.com"
var accountPassword = "12345"
accountCity = "Ujjain"
let accountState;

// account = 2 // not allowed

accountEmail = "ps@ps.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
becuse of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
