const assert = require('assert');

async function test() {
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000)
    })
    console.log('Hello, World!')
}

async function test2() {
    // Works, just doesn't do anything useful
    await 5000;
    console.log('Hello, World!');
}


async function test3() {
    // This object is a "thenable". It's a promise by the letter of the law,
    // but not the spirit of the law.
    await { then: (resolve) => setTimeout(() => resolve(), 1000) };
    console.log('Hello, World!');
}

// function test4() {
//     const p = new Promise(resolve => setTimeout(() => resolve(), 1000));
//     // SyntaxError: Unexpected identifier
//     await p;
// }

// async function test5() {
//     const p = Promise.resolve('test');
//     assert.doesNotThrow(function() {
//         // SyntaxError: Unexpected identifier
//         await p;
//     });
//     console.log('Hello, world!');
// }

async function test6() {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
    console.log('Hello, World! test6');
}
  
// Prints "Promise { <pending> }"
console.log(test6());


/**
 * Another important detail to remember about async functions is that 
 * `async` functions return promises:
 */
async function wait(ms) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function test7() {
    // Since `wait()` is marked `async`, the return value is a promise, so
    // you can `await`
    await wait(1000);
    console.log('Hello, World! test7');
}

test7();

async function test8() {
    const res = await new Promise((resolve) => {
        // This promise resolves to "Hello, World!" after ~ 1sec
        setTimeout(() => resolve('Hello, World! test8'), 1000)
    })

    // Prints "Hello World". `res` is equal to the value the promise resolved to
    console.log(res)
}

test8()

/**
 * In an async function, you can use try/catch to catch promise rejections. 
 * Asynchronous promise rejections behave like synchronous errors:
 */
async function test9() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Woops!')), 1000)
        })
    } catch (error) {
        // Prints "Caught Woops"
        console.log('Caught', error.message)
    }
}
test9()

/**
 * Write code like synchronous
 */
function bad() {
    throw new Error('bad')
}

function bad2() {
    return new Promise(() => {throw new Error('bad2')})
}

async function test10() {
    try {
      await bad();
    } catch (error) {
      console.log('caught', error.message);
    }
  
    try {
      await bad2();
    } catch (error) {
      console.log('caught', error.message);
    }
}
test10();


/**
 * killer feature of async/await is that you can write async code using if statements, for loops, 
 * and all the other synchronous constructs that you had to swear off of when using callbacks.
 */

function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}
  
async function test11() {
    for (let i = 0; i < 10; ++i) {
        await wait(1000);
        // Prints out "Hello, World!" once per second and then exits
        console.log('Hello, World! from for loop11');
    }
}
  
test11();


function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}
  
async function test12() {
    for (let i = 0; i < 10; ++i) {
        if (i < 5) {
            await wait(1000);
    }
    
    // Prints out "Hello, World!" once per second 5 times, then prints it 5 times immediately
    console.log('Hello, World! from loop12');
    }
}
  
test12();


// One cute JavaScript interview question.
for (var i = 0; i < 5; ++i) {
    // Actually prints out "5" 5 times.
    // But if you use `let` above, it'll print out 0-4
    setTimeout(() => console.log(i), 0);
}
  
// This will print *before* the 5's
console.log('end');


function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function test13(ms) {
    for (let i = 0; i < 5; ++i) {
        await wait(ms);
        console.log(ms * (i + 1));
    }
}
  
// These two function calls will actually run in parallel
test13(70);
test13(130);
