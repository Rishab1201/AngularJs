var app = angular.module('historicalPlaceApp');

app.controller('historicalPlaceController', function($scope, historicalPlaceModel) {
    $scope.historicalPlaces = historicalPlaceModel.getHistoricalPlaces();
});
