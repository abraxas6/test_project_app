setTimeout(() => {
    console.log('Hello World');
}, 1);


// function* iterateNumbers() {
//     for (let i = 0; i <= 5; i++) {
//         const x = yield i;
//         console.log(`${x} was specified through.next()`);
//     }
// }

function* uploadFiles() {
    let file = yield;
    while (file >= 0) {
        console.log(`Uploading file ${file}`);
        file = yield new Promise ((res, rej) => {
            setTimeout(res, 200);
        });
    }
}

let uploader = uploadFiles();
uploader.next();
const getNextFile = (function () {
    let file = 0;
    return function () {
        file += 1;
        if (file > 10) {
            return -1;
        }
        return file;
    };
}());

function startUpload(obj) {
    if (obj.done) {
        return;
    }
    obj.value.then(() => {
        console.log('done');
        startUpload(uploader.next(getNextFile()));
    });

}

startUpload(uploader.next(getNextFile()));




const it = iterateNumbers();
while (true) {
    const obj = it.next(54);

    if (obj.done) {
        break;
    }
    console.log(obj.value);
}



