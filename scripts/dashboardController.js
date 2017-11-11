var ngDashboard = angular
	.module('ngDashboard',[]);

var $monthname = "";

	ngDashboard.controller('dashboardController', ['$scope', '$log', function($scope, $log){
		$scope.slider = function(){ //SLIDE PAGE OUT
	   		$scope.class = "slideout";
	   		$scope.returnclass = "btnup";
	   		$scope.wkanimate = "wkanimatein";
	   		$scope.baranimate = "baranimatein";
	   		$scope.yranimate = "yranimatein";
	   		$scope.turnoff = "onswitch";
	}
		$scope.return = function(){ //SLIDE PAGE BACK IN
	   		$scope.class = "slidein";
	   		$scope.returnclass = "btndown";
	   		$scope.wkanimate = "wkanimateout";
	   		$scope.baranimate = "baranimateout";
	   		$scope.yranimate = "yranimateout";
	   		$scope.turnoff = "offswitch";
	}
		$scope.dropdown = function(){ //DROP DOWN
			$scope.dropmenu = "menudropdown";
	}
		$scope.weekSelectClick = function(){
			$log.log("Week List");
	}
		$scope.monthSelectClick = function(){
			$log.log($monthname);
	}
	//Week selection in graph
		$scope.week1SelectClick = function(){
			$log.log("Week 1 Select");
	}
		$scope.week2SelectClick = function(){
			$log.log("Week 2 Select");
	}
		$scope.week3SelectClick = function(){
			$log.log("Week 3 Select");
	}
		$scope.week4SelectClick = function(){
		$log.log("Week 4 Select");
	}
		$scope.week5SelectClick = function(){
		$log.log("Week 5 Select");
	}
		$scope.week6SelectClick = function(){
		$log.log("Week 6 Select");
	}

	//Month selection in graph
		$scope.month1SelectClick = function(){
		var monthname = document	
		$log.log("January");
	}
		$scope.month2SelectClick = function(){
		$log.log("February");
	}
		$scope.month3SelectClick = function(){
		$log.log("March");
	}
		$scope.month4SelectClick = function(){
		$log.log("April");
	}
		$scope.month5SelectClick = function(){
		$log.log("May");
	}
		$scope.month6SelectClick = function(){
		$log.log("June");
	}	
		$scope.month7SelectClick = function(){
		$log.log("July");
	}
		$scope.month8SelectClick = function(){
		$log.log("August");
	}
		$scope.month9SelectClick = function(){
		$log.log("September");
	}
		$scope.month10SelectClick = function(){
		$log.log("October");
	}
		$scope.month11SelectClick = function(){
		$log.log("November");
	}
		$scope.month12SelectClick = function(){
		$log.log("December");
	}
}]) // END dashboardController



/* live version
	ngDashboard.controller('monthController', function($scope, dashboardFactory) {

		$scope.monthdata;

		dashboardFactory.getMonthData().then(function(data) {
			$scope.monthdata = data.data;
			console.log('This is a Success.  GOOD FOR YOU BITCH');

		}, function(error) {
			console.log(error);
			console.log("This is an Error because you suck and should become a garbage man you garbage human.");
		});﻿


})
*/

/*angular
	.module('ngDashboard')
	.controller('dashboardController', function($scope, dashboardFactory) {
		
		$scope.weekSelect;

		dashFactory.getDashboard().then(function(data) {
			$scope.weekSelect = data.data;
				}, function(error) {
					console.log(error)
				});﻿
	});

*/
/*
	ngDashboard.controller('monthDataController', function($scope, dashboardFactory) {
		
		$scope.monthData;

		dashboardFactory.getMonthData().then(function(data) {
			$scope.MonthData = data.data;
		}, function(error) {
			console.log(error)
		});﻿

	});
*/
