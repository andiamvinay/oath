angular
	.module('app')
	.controller('mainController',mainController)

mainController.$inject = ['$localStorage'];

function mainController($localStorage){
	var vm = this;
	vm.var1 = "This is from mainController";
	$localStorage.number = 42 || $localStorage.number;
	vm.save = function(){
		$localStorage.number = $localStorage.number + 1;
	};
	vm.load = function(){
		vm.data = $localStorage.number;
	}
}