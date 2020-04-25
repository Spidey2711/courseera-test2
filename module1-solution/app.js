(function () {
'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.naming = '';
  $scope.message = 'Please enter data first';
  $scope.lunching = function () {
    if($scope.naming == ''){
      $scope.message = 'Please enter data first';
      return;
    }

      $scope.words = $scope.naming.split(',');
      var count = $scope.words.length;
      if(count<=3){
        $scope.message = 'Enjoy!';
      }
      else if(count=>4){
        $scope.message = 'Too Much!';
      }
  };

};

})();
