angular.module('app').controller('mainCtrl', function($http, $q, $scope, keyFile){
  $scope.test = "This is the test phrase!";
  $http.get('https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0502000))?apiKey='+keyFile.key+'&format=json')
  .then(function (response){
    console.log(response.data);
    $scope.titleOne = response.data.products[0].albumTitle;
    $scope.imageOne = response.data.products[0].largeImage;
    $scope.oldPriceOne = response.data.products[0].regularPrice;
    $scope.priceOne = response.data.products[0].salePrice;

    $scope.titleTwo = response.data.products[1].albumTitle;
    $scope.imageTwo = response.data.products[1].largeImage;
    $scope.oldPriceTwo = response.data.products[1].regularPrice;
    $scope.priceTwo = response.data.products[1].salePrice;

    $scope.titleThree = response.data.products[2].albumTitle;
    $scope.imageThree = response.data.products[2].largeImage;
    $scope.oldPriceThree = response.data.products[2].regularPrice;
    $scope.priceThree = response.data.products[2].salePrice;
  });
});
