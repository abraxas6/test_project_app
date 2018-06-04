SystemJS.config({
    map: {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'main': './src/main.js'
    },
    transpiler: 'plugin-babel',
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    },
});
