#####VIDEOAPPFINAL
Refactored things

Url movie in hompe:
	The old url had the video file at the end( http://localhost:3000/movies/10/Trolls.mp4) that was causing conlficts because I use the Youtube url for the trailer, the new url is http://localhost:3000/movies/10 we get the movie info in the controller

New Features
- A Vuejs component "movie-info" to get the movie information & rendering the html.
This component takeS the INFO from the movies from the database using a new endponint( http://localhost:3000/movie/10), this endponint returns a json with them using axios --> pass that info to the component.
- A Vuejs component "share-demo" to open the social media fb and twitter using this codew https://codepen.io/Huskie/pen/wKphk, In this component I created 2 methods to that have been called by click event.
- A Casting Actors section(60%), I created the route and the endpoint, I need to pass the data to the view with vuejs
