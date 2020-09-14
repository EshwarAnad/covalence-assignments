function abhishek(message, delay) {
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            let rand = Math.floor(Math.random() * 10);
            resolve(message);
            if(rand % 2 == 0) {
                resolve(message);
            }
            else {
                let err = new Error('Its error');
                reject(err);
            }
        }, delay);
    })
}
// It gets resolved only when of them gets resolved, otherwise it gives error.
Promise.all([
    abhishek('I am abhishek', 100),
    abhishek('I am Naidu', 200),
    abhishek('I am bongs', 300)
]).then( (val) => {
    console.log(val);
    // results in the form of array.
}).catch( (err) => {
    console.log(err);
});

// We can directly resolve and reject the promise as well, if we want!
// let abhi =  Promise.resolve(value);
// abhi.then( (returnValue) => {
// }).catch( (err) => {
// })

// async and awaits does not replaces Promises, but instead it just enhances the use of Promises, it much makes more simpler to use Promises,
// Always Recommended to use try and catch in order to handle promises with the async and await efficiently.
async function ab() {
    try {
        let val = await Promise.all([
            abhishek('I am first', 100),
            abhishek('I am second', 200),
            abhishek('I am thrid', 300)
        ])
        console.log(val);
    } catch(err) {
        console.log(err);
    }

}
ab(); 

// In sequentialStart, execution suspends 2 seconds for the first await, and then again another 
// 1 second for the second await. The second timer is not created until the first has already fired.
// let sequentialStart = async () => {
//     console.log('==SEQUENTIAL START==');

//     const slow = await resolveAfter2Seconds(); 
//     // If the value of the expression following the await operator is not a Promise, 
//     // it's converted to a resolved Promise.
//     const fast = await resolveAfter1Second();

//     console.log(slow);
//     console.log(fast);
// }

// In concurrentStart, both timers are created and then awaited. 
// The timers are running concurrently but the await calls are still running in series, 
// meaning the second await will wait for the first one to finish. This leads the code to finish in 2 rather than 3 seconds, 
// which is the time the slowest timer needs. The same happens in stillSerial using Promise.all this time.
// let concurrentStart = async () => {
//     console.log('==CONCURRENT START with await==');

//     const slow = resolveAfter2Seconds(); // starts timer immediately
//     const fast = resolveAfter1Second();

//     console.log(await slow);
//     console.log(await fast); // waits for slow to finish, even though fast is already done!
// }

// If we wish to await two or more promises in parallel, you must still use Promise.then, as parallel does in the example.
