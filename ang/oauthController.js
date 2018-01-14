angular
	.module('app')
	.controller('noauthController',noauthController)
	.controller('yesauthController',yesauthController)

noauthController.$inject = ['oauthService',
							'$window',
							];

function noauthController(oauthService){
	var vm = this ;
	vm.redirectUrl = oauthService.oauthUrl;
	window.location.href = vm.redirectUrl;
}

yesauthController.$inject = ['$location','$localStorage'];

function yesauthController($location,$localStorage){
	var vm = this;
	vm.thisPath = $location.absUrl();
	vm.sntkn = vm.thisPath.split('#')[2].split('=')[1];
	$localStorage.sntkn = vm.sntkn;
	$location.path('/protected');
}