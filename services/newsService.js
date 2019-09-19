angular.module('investHouseMain.services')
    .factory('newsService', ['$http', '$rootScope', function($http, $rootScope) {

        var news = {};

        news.loadLastNews = function() {
            return $http({
                url: $rootScope.apiLink + 'api/news/get/top/1',
                method: "GET"
            });
        }

        news.loadAllNews = function() {
            return $http({
                url: $rootScope.apiLink + 'api/news/get/1',
                method: "GET"
            });
        }

        return news;

    }]);