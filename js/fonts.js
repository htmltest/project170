var html = document.documentElement;

var fontsfile = document.createElement('link');
fontsfile.href = pathTemplate + 'css/fonts.css';
fontsfile.rel = 'stylesheet';
document.head.appendChild(fontsfile);

if (sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
} else {
    var script = document.createElement('script');
    script.src = pathTemplate + 'js/fontfaceobserver.js';
    script.async = true;

    script.onload = function () {
        var Roboto300 = new FontFaceObserver('Roboto', {
            weight: '300'
        });
        var Roboto300i = new FontFaceObserver('Roboto', {
            weight: '300',
            style: 'italic'
        });
        var Roboto400 = new FontFaceObserver('Roboto', {
            weight: 'normal'
        });
        var Roboto500 = new FontFaceObserver('Roboto', {
            weight: '500'
        });
        var Roboto700 = new FontFaceObserver('Roboto', {
            weight: 'bold'
        });
        var Roboto900 = new FontFaceObserver('Roboto', {
            weight: '900'
        });
        var RobotoCondensed300 = new FontFaceObserver('RobotoCondensed', {
            weight: '300'
        });
        var RobotoCondensed400 = new FontFaceObserver('RobotoCondensed', {
            weight: 'normal'
        });
        var RobotoCondensed700 = new FontFaceObserver('RobotoCondensed', {
            weight: 'bold'
        });

        Promise.all([
            Roboto300.load(),
            Roboto300i.load(),
            Roboto400.load(),
            Roboto500.load(),
            Roboto700.load(),
            Roboto900.load(),
            RobotoCondensed300.load(),
            RobotoCondensed400.load(),
            RobotoCondensed700.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}