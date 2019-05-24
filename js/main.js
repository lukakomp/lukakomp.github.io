let app = angular.module('app', ['ngRoute', 'ngResource']);

app.directive('rootElement', function () {
  return {
    restrict: "ECA",
    templateUrl: './pages/page-main/index.html',
    link: function (scope, element, attr) {
      
    }
  }
});


app.controller('mainMenu', function ($scope, $location) {
  $scope.headerMenuList = [{
    name: 'Main',
    icon: 'far fa-home',
    link: ''
  }, {
    name: 'My works',
    icon: 'far fa-briefcase',
    link: 'my-works'
  }, {
    name: 'Interesting topics',
    icon: 'fas fa-brain',
    link: 'interesting-topics'
  }, {
    name: 'About me',
    icon: 'fal fa-meh-rolling-eyes',
    link: 'about-me'
  }, {
    name: 'Сontact me',
    icon: 'fal fa-id-card-alt',
    link: 'contact-me'
  }];
	
  //console.log("TCL: $location", $location)
  $scope.selected = $scope.headerMenuList.map(function(e) { return e.link; }).indexOf($location.$$path.replace('/', ''));
  $scope.functionClick = function (index) {
    $scope.selected = index;
  }
});
app.controller('gtPath', function ($scope,$location) {
  
  $scope.clickButton = function () {
    //console.log(this);
    console.log("TCL: $location", $location)
  }
});



app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './pages/main/index.html',
    })
    .when('/my-works', {
      templateUrl: './pages/my-works/index.html',
    })
    .when('/interesting-topics', {
      templateUrl: './pages/interesting-topics/index.html',
    })
    .when('/about-me', {
      templateUrl: './pages/about-me/index.html',
    })
    .when('/contact-me', {
      templateUrl: './pages/contact-me/index.html',
    })
});


