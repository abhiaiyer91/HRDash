window.app.controller('weatherCtrl', ['$scope', 'weatherService', '$rootScope', function($scope, weatherService, $rootScope){
    $scope.weatherArray = [];

    function successHandler(data){
        var lol = data.current_observation
        $scope.weatherArray.push(data.current_observation);

        console.log($scope.weatherArray);
//        $scope.location = data['location']['city'];
//        $scope.temp_f = data['current_observation']['temp_f'];
    }

    function errorHandler(error){
        console.log(error);
    }


    $scope.weatherGet = function(city, state){
        weatherService.get(city, state).then(successHandler, errorHandler);
    };


    console.log($rootScope.jobs);

}]);


