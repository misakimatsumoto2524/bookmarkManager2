angular.module('categories', [
    'bookmarkManager.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('bookmarkManagery.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'categories/categories.tmpl.html'
                    },
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'categories/bookmarks/bookmarks.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
        var categoriesListCtrl = this;

        CategoriesModel.getCategories()
            .then(function (result) {
                categoriesListCtrl.categories = result;
            });
    })
;
