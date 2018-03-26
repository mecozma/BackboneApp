
// // // // In the first few sections, we do all the coding here.
// // // // Later, you'll see how to organize your code into separate
// // // // files and modules.

// // // var Vehicle = Backbone.Model.extend({

// // // 	idAttribute: "registrationNumber",

// // // 	urlRoot: "/api/vehicles",

// // // 	validate: function(attrs){
// // // 		if (!attrs.registrationNumber)
// // // 			return "Vehicle is not valid.";
// // // 	},

// // // 	start: function(){
// // // 		console.log("Vehicle started.");
// // // 	}
// // // });

// // // var Car = Vehicle.extend({
// // // 	start: function(){
// // // 		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
// // // 	}
// // // });

// // // var car = new Car({
// // // 	registrationNumber: "XLI887",
// // // 	color: "Blue"
// // // });

// // // car.unset("registrationNumber");

// // // if (!car.isValid())
// // // 	console.log(car.validationError);

// // // car.set("registrationNumber", "XLI887");

// // // if (!car.isValid())
// // // 	console.log(car.validationError);

// // // car.start();


// // // //song model
// // // var Song = Backbone.Model.extend({
// // // 	initialize: function() {
// // // 		console.log('A song has been created.');
// // // 	},
// // // 	validate: function(attrs) {
// // // 		if (!attrs.title)
// // // 			return "Title is required";
// // // 	}
// // // });

// // // var song = new Song();

// // // song.set("title", "Amado mio");
// // // song.set({
// // // 	artist: "Large Storm",
// // // 	publishYear: 2014
// // // });


// // // //Animal model

// // // var Animal = Backbone.Model.extend({
// // // 	walk: function() {
// // // 		console.log('Animal walking');
// // // 	}
// // // });

// // // var Dog = Animal.extend({
// // // 	walk: function() {
// // // 		console.log('Dog walking...');
// // // 	}
// // // });

// // // var dog = new Dog();
// // // dog.walk();



// // //Vehicle miniproject

// // //model
// // var Vehicle = Backbone.Model.extend({
// // 	idAttribute: 'registrationNumber',
// // 	rootUrl: '/api/vehicles',
// // 	validate: function (attrs) {
// // 		if (!attrs.registrationNumber) {
// // 			return "Your vehicle needs a registration number!";
// // 		}
// // 	},

// // 	start: function () {
// // 		console.log('Vehicle started.')
// // 	}

// // });

// // var Car = Vehicle.extend({
// // 	initialize: function () {
// // 		console.log('Car with registration number' + this.get('registrationNumber') + 'started!');
// // 	}
// // });

// // var car = new Car({
// // 	registrationNumber: 'XLI887',
// // 	color: 'blue'
// // });

// // car.unset('registrationNumber');


// // if (!car.isValid()) {
// // 	console.log(car.validationError);
// // };

// // car.set('registrationNumber', 'XLI887');

// // car.start();



// // // //collections

// // // var Song = Backbone.Model.extend();

// // // var Songs = Backbone.Collection.extend({
// // // 	model: Song
// // // });

// // // var songs = new Songs([
// // // 	new Song({title: 'Song1'}),
// // // 	new Song({title: 'Song2'}),
// // // 	new Song({title: 'Song3'})
// // // ]);
// // // songs.add(new Song({title: 'Song4'}));

// // // songs.add(new Song({title: 'Song 5', genre: 'Jazz', downloads: 110}), {at: 0});
// // // songs.push(new Song({title: 'Song 6', genre: 'Jazz', downloads: 90}));
// // // var jazzSongs = songs.where({genre: 'Jazz'});
// // // var firstJazzSong = songs.findWhere({ genre: 'Jazz'});
// // // var filteredSongs = songs.where({genre: 'Jazz', downloads: 90});
// // // var topDownloads = songs.filter(function(attr) {
// // // 	return attr.get('downloads') > 100;
// // // });

// // // songs.each(function(song) {
// // // 	console.log("Every",song);
// // // })
// // // console.log('Jazz songs', jazzSongs);
// // // console.log('First Jazz song', firstJazzSong);
// // // console.log('filtered by genre and downloads', filteredSongs);
// // // console.log('Filtered bt top downloads', topDownloads);


// // //Collection miniproject
// // var Vehicles = Backbone.Collection.extend({
// // 	Model: Vehicle
// // });
// // var vehicles = new Vehicles([
// // 	new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' }),
// // 	new Vehicle({ registrationNumber: 'ZNP123', colour: 'Blue' }),
// // 	new Vehicle({ registrationNumber: 'XUV456', colour: 'Gray' }),
// // ]);

// // var blueCars = vehicles.where({ colour: 'Blue' });
// // var specificCar = vehicles.where({ registrationNumber: 'XLI887' });
// // vehicles.remove(specificCar);
// // var carsJson = vehicles.toJSON();
// // vehicles.each(function (app) {
// // 	console.log(app);
// // });
// // console.log('Cars to json', carsJson);
// // console.log('specific car', specificCar);
// // console.log('Blue cars', blueCars);


// // //Views
// // var Song = Backbone.Model.extend();

// // var Songs = Backbone.Collection.extend({
// // 	model: Song
// // });

// // var SongView = Backbone.View.extend({
// // 	tagName: 'li',
// // 	events: {
// // 		'click': 'onClick',
// // 		'click .bookmark': 'onClickBookmark'
// // 	},
// // 	onClick: function() {
// // 		console.log('Song playing!');
// // 	},
// // 	onClickBookmark: function(e) {
// // 		e.stopPropagation();
// // 		console.log('The song has been bookmarked!');
// // 	},
// // 	render: function () {
// // 		this.$el.html(this.model.get('title') + ' ' + '<button>Listen</button> <button class=\'bookmark\'>Bookmark</button>');
// // 		return this;
// // 	}
// // });

// // // var SongsView = Backbone.View.extend({
// // // 	render: function() {
// // // 		var self = this;
// // // 		this.model.each(function(song){
// // // 			var songView = new SongView({model: song});
// // // 			self.$el.append(songView.render().$el);
// // // 		});

// // // 		return this;
// // // 	}
// // // });

// // var song = new Song({ title: 'Papercut' });

// // // var songs = new Songs([
// // // 	new Song({title: 'What I\'ve done', author: 'Linkin Park'}),
// // // 	new Song({title: 'The Trooper', author: 'Iron Maiden'}),
// // // 	new Song({title: 'Thunderstruck', author: 'AC/DC'})
// // // ]);

// // var songView = new SongView({ el: '#songs', model: song });
// // songView.render();
// // // // $('#container').html(songView.render().$el);

// // // var songsView = new SongsView({el: '#songs', model: songs});
// // // songsView.render();



// // //Handling dom events

// // var Song = Backbone.Model.extend({
// // 	defaults: {
// // 		listeners: 0
// // 	}
// // });

// // var SongView = Backbone.View.extend({
// // 	initialize: function() {
// // 		this.model.on('change', this.render, this);
// // 		// Looks for a model change and after adds a class to the element
// // 		// this.model.on('change', this.onModelChange, this);
// // 	},
// // 	// onModelChange: function() {
// // 	// 	this.$el.addClass('someclass');
// // 	// },
// // 	render: function() {
// // 		this.$el.html(this.model.get('title') + ' - Listeners: ' + this.model.get('listeners'));
// // 		return this;
// // 	}
// // });

// // var song = new Song({
// // 	title: 'Blue in Green'
// // });

// // var songView = new SongView({
// // 	el: '#songs', model: song
// // });
// // songView.render();


// // //Handling Collection Events

// // //Model
// // var Song = Backbone.Model.extend();
// // //Collection to witch i Passed the model declared above
// // var Songs = Backbone.Collection.extend({
// // 	model: Song
// // });

// // //Views

// // var SongView = Backbone.View.extend({
// // 	tagName: 'li',
// // 	render: function () {
// // 		this.$el.html("title: " + this.model.get('title') + " author: " + this.model.get('author'));
// // 		this.$el.attr('id', this.model.id);

// // 		return this;
// // 	}
// // });

// // var SongsView = Backbone.View.extend({
// // 	tagName: 'ul',
// // 	initialize: function () {
// // 		this.model.on('add', this.onSongAdded, this);
// // 		this.model.on('remove', this.onSongRemoved, this);
// // 	},
// // 	onSongAdded: function (song) {
// // 		var songView = new SongView({ model: song });
// // 		this.$el.append(songView.render().$el);
// // 	},
// // 	onSongRemoved: function (song) {
// // 		// this.$el.find('li#' + song.id).remove();
// // 		this.$('li#' + song.id).remove();
// // 	},
// // 	render: function () {
// // 		var self = this;
// // 		this.model.each(function (song) {
// // 			var songView = new SongView({ model: song });
// // 			self.$el.append(songView.render().$el);
// // 		});

// // 	}
// // });

// // //Collections


// // var songs = new Songs([
// // 	new Song({ id: 1, title: 'What I\'ve done', author: 'Linkin Park' }),
// // 	new Song({ id: 2, title: 'The Trooper', author: 'Iron Maiden' }),
// // 	new Song({ id: 3, title: 'Thunderstruck', author: 'AC/DC' })
// // ]);

// // var songsView = new SongsView({ el: '#songs', model: songs });
// // songsView.render();


// // //Templating

// // var Song = Backbone.Model.extend();

// // var SongView = Backbone.View.extend({
// // render: function() {
// // 	// this.$el.html(this.model.get('title') + ' ' + '<button>Listen</button');

// // 	var template = _.template($('#songTemplate').html());
// // 	var html = template(this.model.toJSON());
// // 	this.$el.html(html);

// // 	return this;
// // }
// // });

// // var song = new Song({title: 'What I\'ve done', plays: 1000000});

// // var songView = new SongView({el: '#songs', model: song});
// // songView.render();

// //Backbone Views miniproject

// var Vehicle = Backbone.Model.extend({
// 	defaults: {
// 		id: ''
// }
// });

// var Vehicles = Backbone.Collection.extend({ model: Vehicle });

// var VehicleView = Backbone.View.extend({
// 	tagName: 'li',
// 	className: 'vehicle',
// 	events: {
// 		'click .delete':'onClick'
// 	},
// 	onClick: function() {
// 		this.remove();
// 		console.log('I hear a click!');
// 	},
// 	 render: function () {
// 	// 	this.$el.html(this.model.get('registrationNumber') + '<button class="delete">Delete</button>');
// 		var template = _.template($('#vehicleTemplate').html());
// 		var html = template(this.model.toJSON());
// 		this.$el.html(html);
// 		this.$el.attr('id', this.model.id);
// 		return this;
// 	},
// 	attributes: {
// 		'data': 'data-color'
// 	}
// });

// var VehiclesView = Backbone.View.extend({
// 	tagName: 'ul',
// 	initialize: function() {
// 		this.model.on('add', this.onVehicleAdded, this);
// 		this.model.on('remove', this.onVehicleRemoved, this);
// 	},
// 	onVehicleAdded: function(vehicle) {
// 		var vehicleView = new VehicleView({model: vehicle});

// 		this.$el.append(vehicleView.render().$el);
// 		console.log("A vehicle has been added to the collection");
// 	},
// 	onVehicleRemoved: function(vehicle) {
// 		// this.$el.find('li#' + vehicle.id).remove();
// 		this.$('li#' + vehicle.id).remove();
// 		console.log('A vehicle has been removed from the collection');
// 	},
// 	render: function () {
// 		var self = this;
// 		this.model.each(function (vehicle) {
// 			var vehicleView = new VehicleView({ model: vehicle });
// 			self.$el.append(vehicleView.render().$el);

// 		});
// 	}
// });


// var vehicles = new Vehicles([
// 	new Vehicle({ id: 1, registrationNumber: 123 }),
// 	new Vehicle({ id: 2, registrationNumber: 2 }),
// 	new Vehicle({ id: 3, registrationNumber: 3 }),
// 	new Vehicle({ id: 4, registrationNumber: 4 })
// ]);

// var vehiclesView = new VehiclesView({ el: '#cars', model: vehicles });
// vehiclesView.render();


//Routers

var ArtistsView = Backbone.View.extend({
	render: function () {
		this.$el.html('ARTIST VIEW');

		return this;
	}
});

var AlbumsView = Backbone.View.extend({
	render: function () {
		this.$el.html('ALBUMS VIEW');

		return this;
	}
});

var GenreView = Backbone.View.extend({
	render: function () {
		this.$el.html('GENRES VIEW');

		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes: {
		'albums': 'viewAlbums',
		'albums/albumId': 'viewAlbumId',
		'artists': 'viewArtists',
		'genre': 'viewGenre',
		'*other': 'defaultRoute'

	},
	viewAlbums: function () {
		var view = new AlbumsView({ el: '#container' });
		view.render();
	},
	viewAlbumId: function (albumId) {

	},
	viewArtists: function () {
		var view = new ArtistsView({ el: '#container' });
		view.render();
	},
	viewGenre: function () {
		var view = new GenreView({ el: '#container' });
		view.render();
	},
	defaultRoute: function () {

	}

});

var router = new AppRouter();
Backbone.history.start();

var NavBar = Backbone.View.extend({
	events: {
		'click': 'onClick'
	},
	onClick: function (e) {
		var $li = $(e.target);
		router.navigate($li.attr('data-url'), { trigger: true });
	}
});

var navBar = new NavBar({ el: '#nav' });