var app = angular.module('angularjsNodejsTutorial', []);


app.controller('apiController', function($scope, $http) {



  $scope.getData = function(){
  	console.log("Test");

    var corona = {
     method: 'GET',
     url: 'https://covid-193.p.rapidapi.com/statistics',
     headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "4e69bba1d8msh08ff0f7abe94b29p15cb21jsnc162965f436c",
        useQueryString : true
      }
    }

    $http(corona).then(function successCallback(response) {
      console.log("Success");
      console.log(response);
      console.log(response.data);
      console.log(response.data.response);

      dataArray = response.data;
       $scope.totalData = response.data.response;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {

        console.log('error: ' + response)
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    }

    $scope.search = function(){
    }

});

