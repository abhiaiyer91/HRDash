window.app.controller('jobSingleCtrl', ['$scope', '$location', 'Parse', '$window', '$route', function ($scope, $location, Parse, $window, $route) {
    $scope.data = {};
    $scope.editView = true;

    $scope.toggleEditView = function(){
        $scope.editView = false;
        $scope.editForm = true;
        $scope.data = $scope.job.attributes;
    }

    function successHandler(response){
        $scope.job = response;
        $scope.$apply();
    }
    function destroyHandler(response){
        response.destroy({});
        alert('Successfully Deleted Job');
        $window.location.href =  '#/jobs';

    }
    function updateHandler(response){
        response.save($scope.data);
        console.log(response.save());
        alert('Successfully Updated Job');
        $window.location.href =  '#/jobs';

    }
    function errorHandler(error){
        alert(error);
    }

    Parse.getJobById($route.current.params.id).then(successHandler, errorHandler);

    $scope.delete = function(){
        Parse.getJobById($route.current.params.id).then(destroyHandler, errorHandler);
    }

    $scope.update = function (data) {
        Parse.getJobById(data).then(updateHandler, errorHandler);
    }

}]);