/**
 * Analytics
 */
var _gaq = _gaq || [];
if (~location.hostname.indexOf('github.com') || ~location.hostname.indexOf('github.io')) {
    _gaq.push(['_setAccount', 'UA-8341018-3']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
}
