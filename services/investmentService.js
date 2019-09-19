angular.module('investHouseMain.services')
    .factory('investmentService', ['$http', '$rootScope', function($http, $rootScope) {

        var investments = {};

        investments.loadInvestments = function() {
            return $http({
                url: $rootScope.apiLink + 'api/investments/get',
                method: "GET"
            });
        }

        return investments;

    }]);