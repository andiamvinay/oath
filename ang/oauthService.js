angular
	.module('app')
	.service('oauthService',oauthService);

oauthService.$inject = ['$localStorage','$location'];

function oauthService($localStorage,$location){
	var vm = this;

	//Registered ClientID from the ServiceNow instance.
	vm.clientID = "0c851653a1e34300aedbd82da68d0e97";
	//ServiceNow instance URL
	vm.snInstance = "https://dev18947.service-now.com/oauth_auth.do";
	//Response Type. This is always "token" for implicit grant.
	vm.response_type = "token";
	//Redirect URL registered in ServiceNow
	vm.redirect_uri = "http://localhost:8000%2F%23%21%2Fauthenticated";

	//Building the OauthURL
	vm.oauthUrl = vm.snInstance+
					"?response_type="+vm.response_type+
					"&redirect_uri="+vm.redirect_uri+
					"&client_id="+vm.clientID;

	//Change the location to other URL
	vm.redirectWin = function(url){
		window.location.href = url
	}

	//Saves the accessToken from URL to the LocalStorage.
	vm.saveToken = function(){
		var thisPath = $location.absUrl();
		var sntkn = thisPath.split('#')[2].split('=')[1];
		$localStorage.sntkn = sntkn;
		$location.url('/protected');
	}
	
	//Logout: Clear the set token variable in the local storage.
	vm.logout = function(){
		$localStorage.$reset({sntkn : ""});
		$location.url('/');
	}
}



//https://myinstance.servicenow.com/oauth_auth.do?response_type=token&redirect_uri={the_redirect_url}&client_id={the_client_identifier}