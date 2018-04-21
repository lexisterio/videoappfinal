new Vue({
    el: '#share-demo',
    methods: {
        openFb: function (event) {
            var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=http://lexisterio.ca', 'facebook-popup', 'height=350,width=600');
            if (facebookWindow.focus) {
                facebookWindow.focus();
            }
            return false;
        },
        openTwitter: function (event) {
            var twitterWindow = window.open('https://twitter.com/share?url=lexisterio', 'twitter-popup', 'height=350,width=600');
            if (twitterWindow.focus) {
                twitterWindow.focus();
            }
            return false;
        }

    }})