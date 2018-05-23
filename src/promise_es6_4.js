const passField = document.querySelector('#pass-field');
const button = document.querySelector('#enter');
const msgField = document.querySelector('#message');

//Promise simple implementation
class OurPromise {
    constructor(asyncFunc) {
        const resolve = (value) => {
            this._successCallback(value);
        };
        const reject = (err) => {
            this._erorrCallback(err);
        };
        asyncFunc(resolve, reject);
    }
    then(successCallback, errorCallback) {
        this._successCallback = successCallback;
        this._erorrCallback = errorCallback;
        return this;
    }
}


// const passwordChecker = (function () {

//     return
// }());


const checkPassword = (function () {
    const CORRECT_PASSWORD = 'pesho';

    return function () {
        const enteredPassword = passField.value;
        passField.value = '';

        return new OurPromise((res, rej) => {
            setTimeout(() => {
                if (enteredPassword === '') {
                    rej('Empty password');
                } else {
                    res(enteredPassword === CORRECT_PASSWORD);
                }
            }, 1000);
        });
        // if (enteredPassword === CORRECT_PASSWORD) {
        //     msgField.innerHTML = 'Log in successful';
        // } else {
        //     msgField.innerHTML = 'Wrong password';
        // }
    };
}());


button.addEventListener('click', () => {
    checkPassword()
        .then(logInSucces => {
            if (logInSucces) {
                msgField.innerHTML = 'Success';
            } else {
                msgField.innerHTML = 'Wrong password';
            }
        },
        errMessage => {
            msgField.innerHTML = `Error: ${errMessage}`;
        }
    );
});
