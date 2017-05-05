var app = angular.module("myApp",[]);
app.controller("myCtrl", function($scope,$http){
    console.log("in angular.js");
    $http.get("json/players.json").success(function(response){
        $scope.items = response;
        console.log("get es in angular");
    });
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }

});

