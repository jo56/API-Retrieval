var app = angular.module('angularjsNodejsTutorial', []);


app.controller('apiController', function($scope, $http) {



  $scope.submitIds = function(){
  	console.log("Test");
  
    $http({
    method: 'GET',
    url: '/someUrl'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    }

});

