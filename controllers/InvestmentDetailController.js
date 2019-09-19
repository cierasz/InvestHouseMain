angular.module('investHouseAdmin.controllers').controller('InvestmentDetailController',
    function ($scope, $location, $http, investmentService, $routeParams) {

        $scope.loadingInfo = true;

        investmentService.loadInvestment($routeParams.id).then(function (response) {
            $scope.investment = response.data;
            $scope.loadingInfo = false;
        }, function (error) {
            $state.go('error');
        });

        $scope.saveInvestment = function (inv) {
            investmentService.saveInvestment(inv).then(function (response) {
                $scope.loadingInfo = false;
            }, function (error) {
                $state.go('error');
            });
        }



    })