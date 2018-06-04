var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://github.com', false); //false --- synchronous

xhr.send();


// xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) {
//         return;
//     }
//     console.log(xhr.statusCode);
// };

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }
    //const exception = xhr.response.replace(/.*(.{10}throw.{40}).*/, '$1');
    const index = xhr.response.indexOf('throw');
    const exception = xhr.response.substr(index,50);
    console.log(exception);
};


$.ajax({
    url: '/api/auth',
    method: 'POST',  // or GET,PUT, ...
    data: JSON.stringify({username: 'name', passHash: 'hash passwprd'}),
    success: x => console.log('Success: ' + x), // callback
    error: x => console.log('Error: ' + x), // callback
    contentType: 'application/json'
});

$.ajax({
    url: '/api/users',
    method: 'GET',  // or POST,PUT, ...
    headers: {
        [x-auth-key]: 'AUTENTICATION CODE'
    },
    success: x => console.log('Success: ' + x), // callback
    error: x => console.log('Error: ' + x), // callback
    contentType: 'application/json'
});


