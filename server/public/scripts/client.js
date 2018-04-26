var app = angular.module('FoodApp', []);


app.controller('FoodController', function(){
  console.log('FoodController loaded');
  var self = this; // holds the value of this
  self.testModel = 'this is bound two ways, yo!';
  }
);



