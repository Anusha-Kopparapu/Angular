angular.module('routeConfig',['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when("/anusha", {
            templateUrl: "/hfpage.html"
             // controller: "profileCont"
         })
    .when("/bangaru", {
            templateUrl: "/hfpage.html"
             // controller: "profileCont"
         }); 
});