angular.module('investHouseMain.services')
    .factory('contentService', ['$http', '$rootScope', function($http, $rootScope) {

        var content = {};


        content.loadAboutUs = function() {
            return $http({
                url: $rootScope.apiLink + 'api/content/get/1',
                method: "GET"
            });
        }

        return content;

    }]);