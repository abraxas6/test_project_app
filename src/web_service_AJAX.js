var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://github.com', false); //false --- synchronous

xhr.send();


xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }
    console.log(xhr.statusCode);
};

// 30:00
