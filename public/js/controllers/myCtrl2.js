
app.controller('MyCtrl2', function ($scope,$http) {
  $scope.$watch('search',function() {
      fetch();
      });
       $scope.$watch('filter',function() {
      fetch();
      });

      $scope.search = "";
      $scope.filter = "full";

      function fetch() {
      $http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.search +"&filter=" + $scope.filter).then(function(res) {
    		console.log(res.data);
        $scope.relatedBooks = res.data.items;
        $scope.related = res.data;
        $scope.bookInfo = res.data.items[0].volumeInfo;
        $scope.saleInfo = res.data.items[0].saleInfo;

      });

    }
      $scope.update = function(book) {
        $scope.search = book.volumeInfo.title;
      };
  	})
