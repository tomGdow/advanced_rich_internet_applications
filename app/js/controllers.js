'use strict';
/* Controllers */

angular.module('myApp.controllers', ['ngSanitize'])

    .controller('MyCtrl1', function($scope) {
        //Partial One code Goes Here
        //alert('hello from partial One')
    })
    .controller('MyCtrl2', function($scope, $http) {
        $http.get('./gymCoaches.json').success(function(data) {
            $scope.coachList = data;
        });
        $scope.orderProp = 'name';

        $scope.HTMLalpha="Alphabetical";
        $scope.HTMLlowestPrice="Lowest Price";
        $scope.HTMLhighestPrice="Highest Price";
        $scope.HTMLCategory="Category";
        $scope.HTMLemail="Email";
        $scope.HTMLcreated_at="Created At";
        $scope.HTMLupdatedAt="Updated At";
        $scope.HTMLid="Id";

        //$scope.orderPropAlt = 'email';
        $scope.myFirstName = function(string) {
            return  string.split(' ')[0]
        }
    }).controller('MyCtrl3', function($scope) {
        //Partial Three code Goes Here
        //alert('hello from partial Three')

        function FindLocation() {
            //code by John Fitzpatrick
            // HDIp COM SC
            geocoder = new google.maps.Geocoder();
            InitializeMap();

            var address = document.getElementById("addressinput").value;
            var gymlocations = new Array();
            gymlocations[0] = "Cork Street Dublin";
            gymlocations[1] = "Quarry Road, Cabra, Dublin";
            gymlocations[2] = "Bishopstown Road, Cork";
            gymlocations[3] = "Henry Street, Galway";
            gymlocations[4] = "Ennis Road,Limerick";
            gymlocations[5] = "Rindoon Park, Athlone";
            gymlocations[6] = "Scarlett Street, Drogheda";

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });

                    if (address == gymlocations[0]) {

                        document.getElementById('l1').innerHTML = gymlocations[0]+ 'Tel: 01-2323456';

                    }
                    if (address == gymlocations[1]) {
                        document.getElementById('l1').innerHTML = gymlocations[1] + ' Tel: 01 45443321';

                    }
                    if (address == gymlocations[2]) {
                        document.getElementById('l1').innerHTML = gymlocations[2] + ' Tel: 01 7675432';

                    }

                    if (address == gymlocations[3]) {
                        document.getElementById('l1').innerHTML = gymlocations[3] + ' Tel: 01 7775432';

                    }

                    if (address == gymlocations[4]) {
                        document.getElementById('l1').innerHTML = gymlocations[4] + ' Tel: 01 3475432';

                    }

                    if (address == gymlocations[5]) {
                        document.getElementById('l1').innerHTML = gymlocations[5] + ' Tel: 045 9995432';

                    }

                    if (address == gymlocations[6]) {
                        document.getElementById('l1').innerHTML = gymlocations[6] + ' Tel: 01 5435432';

                    }
                }
                else {
                    alert("Not successful for the following reason: " + status);
                }
            });
        }

        FindLocation();

        $scope.jourz = function() {
            FindLocation();
        };

        /*document.getElementById('Button1').addEventListener('click',function () {

         FindLocation();
         return false;
         }, false);*/

    }).controller('MyCtrl4', function($scope, $http) {

        //$scope.workout_data = null;
        $http.get('./workout_data_1.json').success(function (result) {
                $scope.workout_data = result;
                function WorkoutStatistics() {

                    var chart1 = new CanvasJS.Chart("chartContainer_1", {
                        theme: "theme1",
                        title: {
                            text: "Exercise type [%]",
                            fontWeight: "bolder",
                            fontColor: "#0D8AAA",
                            fontFamily: "tahoma",
                            fontSize: 20,
                            padding: 10
                        },
                        data: [//array of dataSeries
                            { //dataSeries object

                                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                                type: "doughnut",
                                indexLabelPlacement: "outside",
                                showInLegend: true,
                                dataPoints: $scope.workout_data['container_1']
                            }
                        ]
                    });
                    chart1.render();
                    chart1 = {};

                    var chart2 = new CanvasJS.Chart("chartContainer_2", {
                        theme: "theme1",
                        title: {
                            text: " Total Workout [min]",
                            fontWeight: "bolder",
                            fontColor: "#0D8AAA",
                            fontFamily: "tahoma",
                            fontSize: 20,
                            padding: 10
                        },
                        data: [//array of dataSeries
                            { //dataSeries object

                                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                                type: "bar",
                                dataPoints:$scope.workout_data['container_2']

                            }
                        ]
                    });
                    chart2.render();
                    chart2 = {};

                    var chart3 = new CanvasJS.Chart("chartContainer_3", {

                        theme: "theme1",

                        title: {
                            text: "Total calories burned [kcal]",
                            fontWeight: "bolder",
                            fontColor: "#0D8AAA",
                            fontFamily: "tahoma",
                            fontSize: 20,
                            padding: 10
                        },

                        data: [  //array of dataSeries
                            { //dataSeries - first quarter
                                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                                type: "column",
                                name: "You",
                                showInLegend: true,
                                dataPoints: $scope.workout_data['container_3']['dataset_1']
                            },

                            { //dataSeries - second quarter

                                type: "column",
                                name: "Average user",
                                showInLegend: true,
                                dataPoints: $scope.workout_data['container_3']['dataset_2']
                            }
                        ],
                        /** Set axisY properties here*/
                        axisY: {
                            suffix: "kcal"
                        }
                    });
                    chart3.render();
                    chart3 = {};
                }

                WorkoutStatistics();
            }
        );

    }).controller('MyCtrl5', function () {
        //Partial five code Goes Here
        //alert('hello from partial Five')
    }).controller('MyCtrl6', function () {
        //controller six

    }).controller('MyCtrl7', function () {
        //controller seven  ADMIN
    }).filter('nfcurrency', [ '$filter', '$locale', function ($filter, $locale) {
        var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
        return function (amount, symbol) {
            var value = currency(amount, symbol);
            return value.replace(new RegExp('\\' + formats.DECIMAL_SEP + '\\d{2}'), '')
        }
    }]);
