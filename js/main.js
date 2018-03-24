
// // In the first few sections, we do all the coding here.
// // Later, you'll see how to organize your code into separate
// // files and modules.

// var Vehicle = Backbone.Model.extend({

// 	idAttribute: "registrationNumber",

// 	urlRoot: "/api/vehicles",

// 	validate: function(attrs){
// 		if (!attrs.registrationNumber)
// 			return "Vehicle is not valid.";
// 	},

// 	start: function(){
// 		console.log("Vehicle started.");
// 	}
// });

// var Car = Vehicle.extend({
// 	start: function(){
// 		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
// 	}
// });

// var car = new Car({
// 	registrationNumber: "XLI887",
// 	color: "Blue"
// });

// car.unset("registrationNumber");

// if (!car.isValid())
// 	console.log(car.validationError);

// car.set("registrationNumber", "XLI887");

// if (!car.isValid())
// 	console.log(car.validationError);

// car.start();


// //song model
// var Song = Backbone.Model.extend({
// 	initialize: function() {
// 		console.log('A song has been created.');
// 	},
// 	validate: function(attrs) {
// 		if (!attrs.title)
// 			return "Title is required";
// 	}
// });

// var song = new Song();

// song.set("title", "Amado mio");
// song.set({
// 	artist: "Large Storm",
// 	publishYear: 2014
// });


// //Animal model

// var Animal = Backbone.Model.extend({
// 	walk: function() {
// 		console.log('Animal walking');
// 	}
// });

// var Dog = Animal.extend({
// 	walk: function() {
// 		console.log('Dog walking...');
// 	}
// });

// var dog = new Dog();
// dog.walk();



//Vehicle miniproject

//model
var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',
	rootUrl: '/api/vehicles',
	validate: function (attrs) {
		if (!attrs.registrationNumber) {
			return "Your vehicle needs a registration number!";
		}
	},

	start: function () {
		console.log('Vehicle started.')
	}

});

var Car = Vehicle.extend({
	initialize: function () {
		console.log('Car with registration number' + this.get('registrationNumber') + 'started!');
	}
});

var car = new Car({
	registrationNumber: 'XLI887',
	color: 'blue'
});

car.unset('registrationNumber');


if (!car.isValid()) {
	console.log(car.validationError);
};

car.set('registrationNumber', 'XLI887');

car.start();



// //collections

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
// 	model: Song
// });

// var songs = new Songs([
// 	new Song({title: 'Song1'}),
// 	new Song({title: 'Song2'}),
// 	new Song({title: 'Song3'})
// ]);
// songs.add(new Song({title: 'Song4'}));

// songs.add(new Song({title: 'Song 5', genre: 'Jazz', downloads: 110}), {at: 0});
// songs.push(new Song({title: 'Song 6', genre: 'Jazz', downloads: 90}));
// var jazzSongs = songs.where({genre: 'Jazz'});
// var firstJazzSong = songs.findWhere({ genre: 'Jazz'});
// var filteredSongs = songs.where({genre: 'Jazz', downloads: 90});
// var topDownloads = songs.filter(function(attr) {
// 	return attr.get('downloads') > 100;
// });

// songs.each(function(song) {
// 	console.log("Every",song);
// })
// console.log('Jazz songs', jazzSongs);
// console.log('First Jazz song', firstJazzSong);
// console.log('filtered by genre and downloads', filteredSongs);
// console.log('Filtered bt top downloads', topDownloads);


//Collection miniproject
var Vehicles = Backbone.Collection.extend({
	Model: Vehicle
});
var vehicles = new Vehicles([
	new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' }),
	new Vehicle({ registrationNumber: 'ZNP123', colour: 'Blue' }),
	new Vehicle({ registrationNumber: 'XUV456', colour: 'Gray' }),
]);

var blueCars = vehicles.where({ colour: 'Blue' });
var specificCar = vehicles.where({ registrationNumber: 'XLI887' });
vehicles.remove(specificCar);
var carsJson = vehicles.toJSON();
vehicles.each(function (app) {
	console.log(app);
});
console.log('Cars to json', carsJson);
console.log('specific car', specificCar);
console.log('Blue cars', blueCars);


//Views
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'onClick',
		'click .bookmark': 'onClickBookmark'
	},
	onClick: function() {
		console.log('Song playing!');
	},
	onClickBookmark: function(e) {
		e.stopPropagation();
		console.log('The song has been bookmarked!');
	},
	render: function () {
		this.$el.html(this.model.get('title') + ' ' + '<button>Listen</button> <button class=\'bookmark\'>Bookmark</button>');
		return this;
	}
});

// var SongsView = Backbone.View.extend({
// 	render: function() {
// 		var self = this;
// 		this.model.each(function(song){
// 			var songView = new SongView({model: song});
// 			self.$el.append(songView.render().$el);
// 		});

// 		return this;
// 	}
// });

var song = new Song({ title: 'Papercut' });

// var songs = new Songs([
// 	new Song({title: 'What I\'ve done', author: 'Linkin Park'}),
// 	new Song({title: 'The Trooper', author: 'Iron Maiden'}),
// 	new Song({title: 'Thunderstruck', author: 'AC/DC'})
// ]);

var songView = new SongView({ el: '#songs', model: song });
songView.render();
// // $('#container').html(songView.render().$el);

// var songsView = new SongsView({el: '#songs', model: songs});
// songsView.render();

