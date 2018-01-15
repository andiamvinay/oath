angular
	.module('app')
	.controller('protectedController',protectedController)

protectedController.$inject = ['oauthService'];

function protectedController(oauthService){
	var vm = this;
	vm.data = "This is from protectedController";
	vm.logout =  function(){
		oauthService.logout();
	}
}