angular
	.module('app')
	.service('oauthService',oauthService);


function oauthService(){
	var vm = this;
	vm.clientID = "0c851653a1e34300aedbd82da68d0e97";
	vm.snInstance = "https://dev18947.service-now.com/oauth_auth.do";
	vm.response_type = "token";
	vm.redirect_uri = "http://localhost:8000%2F%23%21%2Fauthenticated";
	vm.oauthUrl = vm.snInstance+
					"?response_type="+vm.response_type+
					"&redirect_uri="+vm.redirect_uri+
					"&client_id="+vm.clientID;
}



//https://myinstance.servicenow.com/oauth_auth.do?response_type=token&redirect_uri={the_redirect_url}&client_id={the_client_identifier}