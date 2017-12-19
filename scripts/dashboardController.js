var ngDashboard = angular
	.module('ngDashboard',[]);

   //Animations
	ngDashboard.controller('dashboardController', ['$scope', '$log', function($scope, $log){
		$scope.slider = function(){ //SLIDE PAGE OUT
	   		$scope.homeSlider = "slideout";
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
			$scope.monthdrop = "menudropdown";
			
	}
		$scope.removedropdown = function() {

			$scope.monthdrop = "menudropup";
	}

}]) // END Animations

	//Month Selections and Data Pulls
	ngDashboard.controller('monthController', function($scope, dashboardFactory) {
		$scope.monthdisplay = currentMonth;
		//Month data pull
		$scope.monthdata;
		dashboardFactory.getMonthData().then(function(data) {
			$scope.monthdata = data.data;
			
			console.log('This is a Success.  GOOD FOR YOU BITCH');
			console.log(currentMonth);
		}, function(error) {
			console.log(error);
			console.log("This is an Error because you suck and should become a garbage man you garbage human.");
		});﻿
		//Month Selection
		$scope.selected_value;
		$scope.monthSelection;
		$scope.update = function() {
			console.log("working");
			$scope.monthSelection = $scope.selected_value;
			$scope.monthdisplay = $scope.monthSelection;
			console.log($scope.selected_value + " selection");
		}

}) // END SCRIPT

