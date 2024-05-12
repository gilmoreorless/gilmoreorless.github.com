/**
 * Custom utils
 */
(function () {
    // Load web fonts
    var firaRegular = new FontFaceObserver('Fira Sans', {weight: 400});
    var firaBold = new FontFaceObserver('Fira Sans', {weight: 700});
    Promise.all([firaRegular.load(), firaBold.load()]).then(function () {
        document.documentElement.className += ' fira-loaded';
    });
})();
