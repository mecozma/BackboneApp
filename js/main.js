		
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


//song model
var Song = Backbone.Model.extend({
	initialize: function() {
		console.log('A song has been created.');
	},
	validate: function(attrs) {
		if (!attrs.title)
			return "Title is required";
	}
});

var song = new Song();

song.set("title", "Amado mio");
song.set({
	artist: "Large Storm",
	publishYear: 2014
});


//Animal model

var Animal = Backbone.Model.extend({
	walk: function() {
		console.log('Animal walking');
	}
});

var Dog = Animal.extend({
	walk: function() {
		console.log('Dog walking...');
	}
});

var dog = new Dog();
dog.walk();



//Vehicle miniproject

//model
var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',
	rootUrl: '/api/vehicles',
	validate: function(attrs) {
		if (!attrs.registrationNumber) {
			return "Your vehicle needs a registration number!";
		}
	},
	
	start: function() {
		console.log('Vehicle started.')
	}
	
});

var Car = Vehicle.extend({
	initialize: function() {
	console.log('Car with registration number' + this.get('registrationNumber') + 'started!');
	}
});

var car = new Car({
	registrationNumber: 'XLI887',
	color: 'blue'
});

car.unset('registrationNumber');


if(!car.isValid()) {
	console.log(car.validationError);
};

car.set('registrationNumber', 'XLI887');

car.start();


