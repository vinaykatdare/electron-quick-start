angular.module('app', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home',{
		url: '/home',
		templateUrl: './html_templates/home.html',
		// controller: 'homeCtrl'
	})
	.state('settings',{
		url: '/settings',
		templateUrl: './html_templates/settings.html',
		// controller: 'homeCtrl'
	});

	$urlRouterProvider.otherwise('/home');
}]);
