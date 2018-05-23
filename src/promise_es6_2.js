const root = document.getElementById('root');


const getANumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = (Math.random() * 6 + 1 | 0); // from 1 to 6 inclusive
        if (number >=5 ) {
            respons(number);
        } else {
            reject(number);
        }
    }, 1000);
});




getANumber.then(
    number => console.log('Success ' + number),
    number => console.log('Error ' + number));
