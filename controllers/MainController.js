angular.module('investHouseMain.controllers').controller('MainController',
    function($scope, $location, $http, investmentService, generalSettingsService, newsService, contentService, $sanitize, $anchorScroll) {

        $scope.pl = true;
        $scope.ua = false;
        $scope.en = false;

        $scope.changeLanguage = function(code) {
            if (code == 'pl') {
                $scope.pl = true;
                $scope.ua = false;
                $scope.en = false;
            }
            if (code == 'ua') {
                $scope.pl = false;
                $scope.ua = true;
                $scope.en = false;
            }
            if (code == 'en') {
                $scope.pl = false;
                $scope.ua = false;
                $scope.en = true;
            }
        }

        $scope.settings = {
            "address": "",
            "backgroundImage": "",
            "backgroundImage1": "",
            "backgroundImage2": "",
            "email": "",
            "fax": "",
            "id": "",
            "introButtonText": "",
            "introButtonTextEn": "",
            "introButtonTextUa": "",
            "introHeading": "",
            "introHeadingEn": "",
            "introHeadingUa": "",
            "introLeadIn": "",
            "introLeadInEn": "",
            "introLeadInUa": "",
            "phones": "",
            "skype": ""
        }

        generalSettingsService.loadInformation().then(function(response) {
            $scope.settings = response.data;
        }, function(error) {
            $state.go('error');
        });

        contentService.loadAboutUs().then(function(response) {
            $scope.aboutUs = response.data;
        }, function(error) {
            $state.go('error');
        });

        investmentService.loadInvestments().then(function(response) {
            $scope.investments = response.data;
        }, function(error) {
            $state.go('error');
        });

        newsService.loadLastNews().then(function(response) {
            $scope.lastNews = response.data;
        }, function(error) {
            $state.go('error');
        });

        newsService.loadAllNews().then(function(response) {
            $scope.allNews = response.data;
        }, function(error) {
            $state.go('error');
        });

        $scope.scroll = function() {
            $anchorScroll();
        };


    })