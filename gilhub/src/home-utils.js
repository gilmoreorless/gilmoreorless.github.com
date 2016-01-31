/**
 * Custom utils
 */
(function () {
    // Load web fonts
    var firaRegular = new FontFaceObserver('Fira Sans', {weight: 400});
    var firaBold = new FontFaceObserver('Fira Sans', {weight: 700});
    Promise.all([firaRegular.check(), firaBold.check()]).then(function () {
        document.documentElement.className += ' fira-loaded';
    });
})();

// Anamalytics
if (~location.hostname.indexOf('github.com') || ~location.hostname.indexOf('github.io')) {
    var ga = function () {
        ga.q.push(arguments);
    };
    ga.q = [
        ['create', 'UA-8341018-6', 'auto'],
        ['send', 'pageview']
    ];
    ga.l = +new Date();
    // Make sure to load GA script after page load
    window.addEventListener('load', function () {
        var s = document.createElement('script');
        s.src = 'https://ssl.google-analytics.com/analytics.js';
        document.body.appendChild(s);
    }, false);
}