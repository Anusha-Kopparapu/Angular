var app=angular.module('userApp',['ngRoute']);
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when("/anusha", {
            templateUrl: "hfpage.html"
             // controller: "profileCont"
         })
    .when("/bangaru", {
            templateUrl: "hfpage.html"
             // controller: "profileCont"
         }); 
}]);