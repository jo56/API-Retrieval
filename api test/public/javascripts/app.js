var app = angular.module('angularjsNodejsTutorial', []);


app.controller('apiController', function($scope, $http) {


var completeList;

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
      completeList = response.data.response;
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

      var arrayfilter = completeList;

      var field = this.dataSearch;
      var regexstring = '^' + field + '(.*)';
      let re = new RegExp(regexstring);
     


      const matchedSites = arrayfilter.filter(arrayfilter => arrayfilter.country.match(re));

      $scope.totalData = matchedSites;
      //console.log(matchedSites);
      //console.log(field);
    }

});

