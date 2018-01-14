angular
	.module('app')
	.controller('protectedController',protectedController)

function protectedController(){
	var vm = this;
	vm.data = "This is from protectedController";
}