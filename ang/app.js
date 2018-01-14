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
			mainController : 'pc',
			authRequired : true
		}
}


function appConfig($routeProvider){
	Object.keys(routes).forEach(function(key){
		$routeProvider.when(key,routes[key]);
	});
}

function run($rootScope,$window){
	$rootScope.$on("$locationChangeStart",function(event, next, prev){
		//alert("TEST");
		var toGoRoute = next.split('#!')[1];
		if(toGoRoute in routes && routes[toGoRoute].authRequired){
			//alert('authRequired');
			event.preventDefault();
			$window.location.href = "https://google.com";
		}
	});
}