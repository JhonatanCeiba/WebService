(function() {
  var app = angular.module('gemStore', []);

app.controller('StoreController',['$http', function($http){
    var store = this;
    store.jsonRemoto = [];
    store.jsonLocal = [];
    var x2js = new X2JS();

     $http.get('store-products.json')
      .success(function(data){
        store.jsonLocal = data;
        //alert(data);
      });

      $http.get('http://localhost:8080/WebService/rs/service/users')
      .success(function(data){
    	  store.jsonRemoto = x2js.xml_str2json(data);
      });
  }]);

})();