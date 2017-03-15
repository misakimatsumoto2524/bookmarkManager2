angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'bookmarkManager.models.categories',
    'bookmarkManager.models.bookmarks'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('bookmarkManager.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksListCtrl as bookmarksListCtrl'
                    }
                }
            })
        ;
    })
    .controller('BookmarksListCtrl', function ($stateParams, CategoriesModel, BookmarksModel) {
        var bookmarksListCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        BookmarksModel.getBookmarks()
            .then(function (bookmarks) {
                bookmarksListCtrl.bookmarks = bookmarks;
            });

        bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
        bookmarksListCtrl.deleteBookmark = BookmarksModel.deleteBookmark;
    });

