	angular
	.module('app',[
						'ngRoute',
						'ngStorage'
				  ]
		   )
	.config(appConfig)
	.run(run);

//appConfig.$inject = ['$routeProvider'];

//Application Routes

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


//Configuring the routes defined to the route provider.
function appConfig($routeProvider){
	Object.keys(routes).forEach(function(key){
		$routeProvider.when(key,routes[key]);
	});
}

// Runs on every location Change start and check whether the user is authenticated.
function run($rootScope,$window,$location,$localStorage){
	$rootScope.$on("$locationChangeStart",function(event, next, prev){
		$localStorage.sntkn = $localStorage.sntkn || "";
		var toGoRoute = next.split('#!')[1];
		if(toGoRoute in routes && routes[toGoRoute].authRequired && $localStorage.sntkn == ""){
			event.preventDefault();
			$location.path('/noauth')
		}
	});
}