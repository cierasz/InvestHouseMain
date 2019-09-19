angular.module('investHouseMain.services')
    .factory('generalSettingsService', ['$http', '$rootScope', function($http, $rootScope) {

        var generalSetting = {};


        generalSetting.loadInformation = function() {
            return $http({
                url: $rootScope.apiLink + 'api/generalSettings/get',
                method: "GET"
            });
        }

        return generalSetting;

    }]);