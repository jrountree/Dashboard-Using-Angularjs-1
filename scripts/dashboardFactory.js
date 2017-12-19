angular
	.module('ngDashboard')
	.factory('dashboardFactory', function($http) {

		function getMonthdata() {
			return $http.get('data/data.json');
		}


		return {
			getMonthData: getMonthdata
		}

	});
// Variables
var weeknumber = 1;
var cupnumber = 0;
var weekstart = "<p class='week" + weeknumber + "'>Week " +  weeknumber + ": " + cupnumber + " cups</p>";
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
var currentMonth = monthNames[d.getMonth()];
var monthHighlight ;






/*
var weekData = '<div class="drop-down"><ul><li>Week 1: <span class="sub-txt">1</span></li><li>Week 2: <span class="sub-txt">2-8</span></li><li>Week 3: <span class="sub-txt">9-15</span></li><li>Week 4: <span class="sub-txt">16-22</span></li><li>Week 5: <span class="sub-txt">23-29</span></li><li>Week 5: <span class="sub-txt">30-31</span></li></ul></div>;'

.weekFactory('weekData', ['$http','$q',function($http,$q) {
	return(weekData);
}])
*/
/*
angular
	.module('weekSelect')
	.factory('dashboardFactory', function($http) {

		console.log("Week Click Effect");

	});
*/

/*
angular
	.module('ngDashboard')
	.factory('dashboardFactory', function($http) {

		function getDashboard() {
			return $http.get('data/data.json');
		}

		return {
			getDashboard: getDashboard
		}

	});
    */