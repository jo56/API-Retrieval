var app = angular.module('angularjsNodejsTutorial', []);


app.controller('apiController', function($scope, $http) {

$scope.buttonText = 'Fetch Data';

var completeList;

  $scope.getData = function(event){
  	console.log("Test");
    angular.element(document.getElementById('submitDataBtn'))[0].disabled = true;
    var load = false;
    $scope.buttonText = 'Waiting...'

    
    
  //event.srcElement.setEnabled(false);
 // event.srcElement.setClickable(false);

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

      dataArray = response.data.response;
      newdata = dataArray.sort(function(a, b) { return a.country.localeCompare(b.country)});
      console.log(newdata);
      filteredData = newdata.filter(newdata => newdata.country != 'MS-Zaandam-' && newdata.country != 'Diamond-Princess-');
      completeList = filteredData;
       $scope.totalData = filteredData;
        angular.element(document.getElementById('submitDataBtn'))[0].disabled = false;
        load = true;
        $scope.buttonText = 'Fetch Data';
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {

        console.log('error: ' + response)
         angular.element(document.getElementById('submitDataBtn'))[0].disabled = false;
         load = true;
         $scope.buttonText = 'Fetch Data';
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

   /* while(load === false)
    {
      $scope.buttonText = 'Waiting.'
      $scope.buttonText = 'Waiting..'
      $scope.buttonText = 'Waiting...'
    }*/
     
      //this.submitDataBtn.setEnabled(true);
     // this.submitDataBtn.setClickable(true);

    }

    $scope.search = function(){

      var arrayfilter = completeList;

      var field = this.dataSearch;
      var regexstring = '^' + field + '(.*)';
      let re = new RegExp(regexstring, "i");
     


      const matchedSites = arrayfilter.filter(arrayfilter => arrayfilter.country.match(re));

      $scope.totalData = matchedSites;
      //console.log(matchedSites);
      //console.log(field);
    }

});

