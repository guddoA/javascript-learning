// Whenever we refer current context that time we use 'this' keyword

//************************ 'this' keyword************************************* */
// const user = {
//     username : "Ananya",
//     age : 23,
//     welcomeMessage : function() {

//         //Below line will give this error ==> ReferenceError: username is not defined
//         //console.log(`Hi ${username}, how are you. I got to know your age is ${this.age}.`)

//         // Below is correct way to do by using 'this' keyword
//         console.log(`Hi ${this.username}, how are you. I got to know your age is ${this.age}.`)

//     }
// }

//user.welcomeMessage();




// // ***************Changing the welcomeMessage function itself, to check if it will change or not.*********************
// user.welcomeMessage = function(){
//     console.log(`Here, I have changed the function itself. Let's see what will gonna happen. ${user.age}`)
// }
// user.welcomeMessage();  // Here, I have chnaged the function itself. Let's see what will gonna happen. 23

// user.age=26;
// user.welcomeMessage();  // Here, I have chnaged the function itself. Let's see what will gonna happen. 26




// *********************'this' keyword for global context*************************
// const user = {
//     username : "Shayam",
//     age : 29,
//     welcomeMessage : function() {
//         console.log(`Hi ${this.username}, how are you. I got to know your age is ${this.age}.`)
//     }
// }

// console.log(this); // {} ==> whenever we are in node environment then 'this' will gonna refer to the empty object as there is no context available globally.
// whereas if you run the same thing in browser, then it will not print empty object, it will give 'window' object as global object in browser is 'window object.'


// // *************let's say you didn't define the user object yet and thought to execute it's(user object) function, then it will throw below error. *********/
// user.welcomeMessage() /// ReferenceError: Cannot access 'user' before initialization





/******************** this refers to what in object block ******************/
// const user = {
//     username : "Ananya",
//     age : 23,
//     welcomeMessage : function() {
//         console.log('I am this:    ',this);
        
//         console.log(`Hi ${this.username}, how are you. I got to know your age is ${this.age}.`)

//     }
// }

// user.welcomeMessage();
// /***output***/
// // I am this:     {
// //   username: 'Ananya',
// //   age: 23,
// //   welcomeMessage: [Function: welcomeMessage]
// // }
// // Hi Ananya, how are you. I got to know your age is 23.

// user.username = "Shubham";
// user.welcomeMessage();
// /***output***/
// // I am this:     {
// //   username: 'Shubham',
// //   age: 23,
// //   welcomeMessage: [Function: welcomeMessage]
// // }
// // Hi Shubham, how are you. I got to know your age is 23.





/*********If we are using 'this' inside the function to check what it refers to*********/
// function code(){
//     console.log(this); // when we are trying to print 'this' in function rather than just outside.
// }
// code()

// /***output***/
// //  Object [global] {
// //   global: [Circular *1],
// //   queueMicrotask: [Function: queueMicrotask],
// //   clearImmediate: [Function: clearImmediate],
// //   setImmediate: [Function: setImmediate] {
// //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //   },
// //   structuredClone: [Getter/Setter],
// //   clearInterval: [Function: clearInterval],
// //   clearTimeout: [Function: clearTimeout],
// //   setInterval: [Function: setInterval],
// //   setTimeout: [Function: setTimeout] {
// //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //   },
// //   atob: [Getter/Setter],
// //   btoa: [Getter/Setter],
// //   performance: [Getter/Setter],
// //   fetch: [AsyncFunction: fetch]
// // }


