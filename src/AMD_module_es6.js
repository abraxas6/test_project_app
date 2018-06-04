define('http', ['jquery', 'promise'], function ($, Promise) {
    //
});

define('main', ['http'], function (http) {
    http.get('/api/books')
        .then(books => {
            //
        });

    function start () {
        //
    }

    return {
        start
    };
});


