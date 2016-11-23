/**
 * Created by iform on 2016-11-23.
 */

app.controller('audit', ['$scope', '$modal', '$log','$http', function($scope, $modal, $log,$http) {
    $http.get("js/app/cart.json").success(function (data) {
        $scope.cart = data.cart;
    });
    //建立一个产品ID的索引，判断是否ID相等
    function findIndex(id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if (item.id === id) {
                index = key;
                return;
            }
        });
        return index
    }
    $scope.tip='张三';
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size,id) {
        // var index=findIndex(id);
        // console.log(index);
        // if(index!=-1){
        //     var item=$scope.cart[index];
        //     console.log(item);
        //     $scope.tip=item.id;
        // }
        var modalInstance = $modal.open({
            templateUrl: 'tpl/modal/audit.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return [$scope.items,$scope.tip];
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
        modalInstance.opened.then(function () {
            // console.log($scope.tip);
            // var index=findIndex(id);
            // console.log(index);
            // if(index!=-1){
            //     var item=$scope.cart[index];
            //     console.log(item);
            //     $scope.tip={
            //         id:item.id
            //     };
            // }
            // console.log($scope.tip);
        });

    };
}])
;