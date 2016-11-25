/**
 * Created by iform on 2016-11-23.
 */
app.controller('audit', ['$scope', '$modal', '$log','$http', function($scope, $modal, $log,$http) {
    $http.get("js/app/cart.json").success(function (data) {
        $scope.cart = data.cart;
    });
    //建立一个ID的索引，用来判断是否ID相等
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
    //查看
    $scope.see = function (size,id) {
        var index=findIndex(id);
        if(index!=-1){
            $scope.item=$scope.cart[index];
        }
        var modalInstance = $modal.open({
            templateUrl: 'tpl/modal/audit.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.item;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
        modalInstance.opened.then(function () {
                console.log($scope.item)
        });
    };
    //编辑
    $scope.ext = function (size,id) {
        var index=findIndex(id);
        if(index!=-1){
            $scope.item=$scope.cart[index];
            $scope.item={
                name:$scope.item.name,
                quantity:$scope.item.quantity,
                price:$scope.item.price,
                proData:new Date($scope.item.proData),
                overData:new Date($scope.item.overData)
            };
        }
        var modalInstance = $modal.open({
            templateUrl: 'tpl/modal/audit2.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.item;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
        modalInstance.opened.then(function () {
                console.log($scope.item);
        });
    };
    //新增
    $scope.items=['items'];
    $scope.add = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'tpl/modal/audit1.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
        modalInstance.opened.then(function () {

        });
    };
}])
;