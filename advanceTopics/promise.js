const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
});
 
promiseOne.then(function(){
    console.log("Promise consumed"); // after resolve() has been execute then this function will execute.
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Aync task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2nd resolved")
}) 

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "anagoel@geliooo.com"}) // passing data
    },1000)
})

promiseThree.then(function(userData){
    console.log(userData)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Ananya", password: "samiksha"})
        } else{
            reject("Error: something went wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((userName) => {
    console.log(userName)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("The promise is either resolved or rejected.")
})



const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JS", password: "ana@nya666999"})
        } else{
            reject("ERROR: there is something wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log("Data: ",data)
//     } catch(error){
//         console.log("ERROR is occurring, something went wrong with API")
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log("Data Then/Catch: ", data)
})
.catch((error) => console.log(error))


