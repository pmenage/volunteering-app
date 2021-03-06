angular
    .module('app', ['ngMessages'])
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.submit = function() {
            console.log("Submit");
            $scope.userForm.submitted = true;
            if ($scope.userForm.$valid) {
                console.log("First name: ", $scope.main.firstName);
                console.log("Last name: ", $scope.main.lastName);
                console.log("Username: ", $scope.main.username);
                console.log("Email: ", $scope.main.email);
                console.log("Gender: ", $scope.main.gender);
                console.log("Skills: ", $scope.main.skills);
                console.log("Time of day available: ", $scope.main.time);
                console.log("Additional information: ", $scope.main.addInfo);
            } else {
                console.log("The form is invalid");
            }
        };
    }]);