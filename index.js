// Write your solution in this file!

var customerName = "bob" ;
function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
}

 function setBestCustomer(){
    window.bestCustomer = "not bob"
 }

function overwriteBestCustomer(){
    window.bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Mary" ;
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Sam" ;
}
changeLeastFavoriteCustomer();

// Write your solution in this file!
// // Declare a variable in global scope called customerName using the var keyword.
// var customerName = "bob";

// // Write a function that accesses that global customerName variable, and uppercases it.
// function upperCaseCustomerName() {
//   customerName = customerName.toUpperCase();
// }

// // Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
// function setBestCustomer() {
//   bestCustomer = "not bob";
// }


// function overwriteBestCustomer() {
//   bestCustomer = "maybe bob";
// }

// const leastFavoriteCustomer = "Karen";

// function changeLeastFavoriteCustomer() {
//   leastFavoriteCustomer="Bob";
// }