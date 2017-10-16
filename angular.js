var app = angular.module("myApp", []);
// Directive creation
app.directive("w3TestDirective", function() {
    return {
        template : "Created a new directive"
    };
    });
//hard coded onclick event in angular 
    app.controller('myCtrl', function($scope) {
    $scope.count = 0;
 });
    //onclick  event by calling a function
    app.controller("MyController", function($scope) {
                $scope.myData = {};
                $scope.myData.items = [{ v: "1"}, { v: "2"}, { v : "3"} ];

                $scope.myData.doClick = function(item, event) {
                    alert("clicked: " + item.v + " @ " + event.clientX + ": " + event.clientY);
                }
         $scope.data = { time : new Date() };

        $scope.updateTime = function() {
            $scope.data.time = new Date();
        }

        document.getElementById("updateTimeButton")
                .addEventListener('click', function() {
            console.log("update time clicked");
            $scope.data.time = new Date();   //creates a watch internally on the $scope.data.time
            $scope.$digest();  //data binding will be updated 
        });

            } );

    
 

