
const root = document.getElementById('root');



let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
});


const createP = (function () {
    let counter = 0;

    return function () {
        const p = document.createElement('p');
        counter += 1;
        p.innerHTML = '' + counter;
        root.appendChild(p);
    };
}());

function waitASecond() {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
}

// promise
//     .then(value => {
//         createP();
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(), 1000);
//         });
// })
//     .then(value => {
//         createP();
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve, 1000);
//         });
// })
//     .then(value => {
//         createP();
//     });

//var --- 2

waitASecond()
    .then(() => {
        createP();
        return waitASecond();
    })
    .then(() => {
        createP();
        return waitASecond();
    })
    .then(() => {
        createP();
        return waitASecond();
    });



// let promise = waitASecond();

// for (let i = 0; i < 10; i += 1) {
//     promise = promise.then(() => {
//         createP();
//         return waitASecond();
//     });
// }
