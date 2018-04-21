Vue.component('review-stars', {
    template: `<div class="star-rating">
        <label class="star-rating-star" v-for="rating in ratings"
        :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
        v-on:click="updateValue(rating)" v-on:mouseover="updateValue(rating)" v-on:mouseout="updateValue(rating)">
        <input class="star-rating star-rating-checkbox" type="radio" :value="rating"
        v-model="value" :disabled="disabled">★</label></div>`,

    props: ['value', 'disabled'],

    data: function () {
        return {
            ratings: [1, 2, 3, 4, 5]
        };
    },

    methods: {
        updateValue: function (value) {
            if (!this.disabled) {
                this.$emit('input', value);
            }
        }
    }
});


Vue.component('movie-info', {
    props: ['movie'],
    template: `<div class='movie-wrapper'>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                :src=movie.movies_trailer
                frameborder="0"></iframe>
                <div class='movie-info'><div><span class='movie-info-t'>Title</span>{{ movie.movies_title }}</div>
                <div><span class='movie-info-t'>Release</span>{{ movie.movies_release }}</div>
                <div><span class='movie-info-t'>Story Line</span>{{ movie.movies_storyline }}</div>
                </div>
                <div class='movie-wrapper-button' v-on:click="goCasting()">
                CASTING
                </div>
                </div>`,
    methods: {
        goCasting: function () {
            let movieId = document.querySelector('.movId').textContent;
            window.location='/casting/movie/'+movieId;
        }
    }
});




var myVideoApp = {
    // do more non-VM related stuff here
    addReviews(data) {
        // process the review data and push it into the Vue instance
        data.forEach(review => myVideoApp.vm.reviews.push(review));
    },

    vm: new Vue({
        delimiters: ["${", "}"],

        el: "#video",

        data: {
            reviews: [],
            numStars: 0,
            review: "",
            movie: [],
            testMessage: "testing to see if this works"
        },
        created: function () {
            let movieId = document.querySelector('.movId').textContent; // grab the movie id

            // Alias the component instance as `vm`, so that we  
            // can access it inside the promise function
            var vm = this
            // Fetch our array of posts from an API
            axios.get('/movie/' + movieId)
                    .then(function (response) {
                        vm.movie = response.data[0];
                        console.log(response.data[0]);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        },
        methods: {
            // do a post with all the new review stuff
            addReview() {
                // do a fetch here
                let movieId = document.querySelector('.movId').textContent; // grab the movie id

                axios.post('/api', {
                    id: movieId,
                    stars: this.numStars,
                    comment: this.review
                })
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                // push things to the reviews array
                this.reviews.push({
                    comments_copy: this.review,
                    comments_rating: this.numStars,
                    comments_date: `${ new Date() }`
                });

                this.review = "";
                this.numStars = 0;
            }

        }
    })
};

myVideoApp.addReviews(appData.movies);
