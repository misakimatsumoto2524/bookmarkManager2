var bookmarkManager = angular.module('bookmarkManager', []);

bookmarkManager.controller('TimeController', ['$scope', '$interval', function($scope, $interval) {
  $scope.date = new Date();
  $interval(function() {
    $scope.date = new Date();
  }, 1000);
}]);


angular.module('app', [
    'ui.router',
    'categories',
    'categories.bookmarks'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('bookmarks', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/');
});