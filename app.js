// app.js

// APP =======
var routerApp = angular.module('routerApp', ['ui.router']);

// CONFIG routes ==========
routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //defaults to this location
    $urlRouterProvider.otherwise('/home');

    //home State
    $stateProvider.state('home', {
        url:'/home',
        templateUrl:'partials/partial-home.html'
    });
    //nested state with custom controller
    $stateProvider.state('home.list', {
        url:'/list',
        templateUrl:'partials/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese','Husky','Goldendoodle'];
        }
    });
    //nested list with some random string data
    $stateProvider.state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a nice ice cold drink right now.'
    });

    //abouts
    $stateProvider.state('about', {
        url:'/about',
        views: {
            //main template placed here (relatively named)
            '': { templateUrl:'partials/partial-about'},

            //the child views will be defined here (absolutely named)
            'columnOne@about': {
                template:'Look I am a column!'
            },
            'columnTwo@about': {
                templateUrl:'templates/table-data.html',
                controller:'scotchController'
            }
        }
    });
    //removes hash!
    //$locationProvider.html5Mode(true);
}); //closes $routerApp


// CONTROLLERS ===== (separate out in production)
routerApp.controller('scotchController', function($scope){
    $scope.message = 'testies';

    $scope.scotches = [
        {
            name:'Macallan 12',
            price: 50
        },
        {
            name:'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name:'Glenfiddich 1937',
            price: 20000
        }
    ];
});