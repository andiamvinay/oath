angular
	.module('app')
	.controller('noauthController',noauthController)
	.controller('yesauthController',yesauthController)

noauthController.$inject = [
							   'oauthService',
							   '$window',
						   ];

function noauthController(oauthService){
	var vm = this ;
	vm.redirectUrl = oauthService.oauthUrl;
	oauthService.redirectWin(vm.redirectUrl);
}

yesauthController.$inject = [
							   'oauthService',
							   '$timeout'
							];

function yesauthController(oauthService,$timeout){
	var vm = this;
	oauthService.saveToken();
}