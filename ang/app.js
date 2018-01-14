	angular
	.module('app',[
		'ngRoute',
		'ngStorage'
		])
	.config(appConfig)
	.run(run);

//appConfig.$inject = ['$routeProvider'];

routes = {

	'/' : {
			templateUrl : 'ang/view1.html',
			controller : 'mainController',
			controllerAs : 'mc',
			authRequired : false
		},

	'/protected' : {
			templateUrl : 'ang/view2.html',
			controller : 'protectedController',
			controllerAs : 'pc',
			authRequired : true
		},

	'/noauth' : {
			templateUrl : 'ang/view3.html',
			controller : 'noauthController',
			controllerAs : 'noc',
			authRequired : false

		},

	'/authenticated' : {
			templateUrl : 'ang/view4.html',
			controller : 'yesauthController',
			controllerAs : 'yoc',
			authRequired : false
		},

}


function appConfig($routeProvider){
	Object.keys(routes).forEach(function(key){
		$routeProvider.when(key,routes[key]);
	});
}

function run($rootScope,$window,$location,$localStorage){
	$rootScope.$on("$locationChangeStart",function(event, next, prev){
		//alert("TEST");
		$localStorage.sntkn = $localStorage.sntkn || "";
		var toGoRoute = next.split('#!')[1];
		if(toGoRoute in routes && routes[toGoRoute].authRequired && $localStorage.sntkn == ""){
			//alert('authRequired');
			event.preventDefault();
			//$window.location.href = "https://google.com";
			$location.path('/noauth')
		}
	});
}