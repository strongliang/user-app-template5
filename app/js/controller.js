'use strict';


var quoteApp = angular.module('quoteApp',[]);

quoteApp.controller('CustomerListCtrl', function($scope, $http) {
  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id',
      service_app_name:'QuoteDataReadWrite',
      request_string: "GET:;"})
  };


  $http(req).success(function(data) {
    console.log('done');
    console.log(data.response);
    $scope.quotes = angular.fromJson(data.response);
  });

  $scope.showInfo = function(quote, index) {
      $scope.quote=quote;
      $("#editForm").hide();
      $("#informationForm").hide();
      $("#quoteInformation").show();
      $scope.expand_shipment_addr=false;
      $scope.expand_mail_addr=false;
      $scope.selected = index;
  }
  $scope.orderProp = 'customer_id';

  $scope.clearInfo = function(quote) {
      $scope.quote=$scope.initial;
      $scope.expand_shipment_addr=false;
      $scope.expand_mail_addr=false;
  }

});
