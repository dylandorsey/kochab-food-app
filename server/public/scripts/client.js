var app = angular.module('FoodApp', []);


app.controller('FoodController', ['$http', function ($http) {
  console.log('FoodController loaded');
  var self = this; // holds the value of this
  self.testModel = 'this is bound two ways, yo!';

  self.Food = [
    {
      "name": "anything you want",
      "deliciousness_rating": "pretty good",
      "is_hot": "you bet",
    }
  ];

  self.newFood = {};

  self.createFood = function(new_name, new_deliciousness_rating, new_is_hot){
    self.newFood.name = new_name;
    self.newFood.deliciousness_rating = new_deliciousness_rating;
    self.newFood.is_hot = new_is_hot;
    console.log(self.newFood);
    self.Food.push(angular.copy(self.newFood));
  };

  $http({
    method: 'GET',
    url: '/food'
  })
    .then(function (response) {
      console.log(response.data);
    });
}]);





