// // // *************************Global scoping********************************

// var a = 3;
// let b = 4;
// const c = 5;

// // if(true){
// //     console.log("INNER a: ", a);  // 3
// //     console.log("INNER b: ", b);  //4
// //     console.log("INNER c: ", c);  //5
// // }
// // console.log("a: ", a); // 3
// // console.log("b: ", b);//4
// // console.log("c: ", c);//5

// // *************************Block scoping********************************
// if(true){
    
//     // 'let' and 'const' are block scoping
//     // But var is global scoping, though we have declare the variable 'a' inside the 'if' block but then also it is available outside of the 'if' block
    
//     var a = 300;  // or a = 300
//     // let b = 400;
//     // const c = 500;
//     //console.log("INNER b: ", b);  // 400 ==> block scoping, taking value from global variable 'b' which is inside of 'if'
//     //console.log("INNER c: ", c);  // 500 ==> block scoping, taking value from global variable 'c' which is inside of 'if'

//     console.log("INNER a: ", a);  // 300
//     console.log("INNER b: ", b);  // 4  // global scoping, taking value from global variable 'b' which is outside of 'if'
//     console.log("INNER c: ", c);  // 5  // global scoping, taking value from global variable 'c' which is outside of 'if'
// }
// console.log("a: ", a);  // 300 as 'var' is a global variable so, it's value is getting change in 'if' block
// console.log("b: ", b);  // 4  inner 'b' and 'c' of 'if' block can't be accessed as both 'let' and 'const' are blocked scope.
// console.log("c: ", c);  // 5 inner 'b' and 'c' of 'if' block can't be accessed as both 'let' and 'const' are blocked scope.


// // global scope is different for node and browser


/***************************Scopes in function***************************** */
function funOne(){
    const userName = "Ananya"

    function funTwo(){
        console.log("UserName: ", userName);  // "userName" variable can be accessed by funTwo as it's get scoped globally, funTwo is a part of funOne function, so we can access all the variables of funOne in funTwo but vice-versa is not applicable.
        const password = "khayatiMishra@777"
    }
    funTwo();

    //console.log("Password: ", password);   // Will give ReferenceError: password is not defined as "password" variable is having block scope within funTwo, not outside of it.
}

funOne();  


/*************************************Expression****************************************** */

console.log(addOne(6));  // If we are calling function above the declaration then there will not be a problem
function addOne(num){
    return num+1;
}
//addOne(6);

// But we call this "addTwo" function above the declaration then it will throw an error

//This is called expression when we store a function in a variable
//console.log("AddTwo func call before declaration: ", addTwo(9)); //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num){
    return num+2;
}

//addTwo(9);












