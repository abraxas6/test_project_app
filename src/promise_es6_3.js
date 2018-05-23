const passField = document.querySelector('#pass-field');
const button = document.querySelector('#enter');
const msgField = document.querySelector('#message');



// const passwordChecker = (function () {

//     return
// }());


const checkPassword = (function () {
    const CORRECT_PASSWORD = 'pesho';

    return function () {
        const enteredPassword = passField.value;
        passField.value = '';

        return new Promise((res, rej) => {
            if (enteredPassword === '') {
                rej('Empty password');
            } else if (enteredPassword === CORRECT_PASSWORD) {
                res(true);
            } else {
                res(false);
            }
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
