let count = 0;

function wait(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            count += 1;
            res(`Waitting for ${ms} finished ${count}`);
        }, ms);
    });
}

const beginTime = new Date();

const promises = [
    wait(1000),
    wait(100),
    wait(500)
];

Promise.all(promises)
    .then(values => {
        console.log(values);
        const endTime = new Date();
        console.log(endTime - beginTime);
    },
    values => {
        console.log('Fail');
        console.log(values);
        const endTime = new Date();
        console.log(endTime - beginTime);
    }
);

