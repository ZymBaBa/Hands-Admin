/**
 * Created by iform on 2016-11-23.
 */
app.controller('enterprise', ['$scope', '$modal', '$log','$http', function($scope, $modal, $log,$http) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'tpl/modal/modal.audit.html',
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
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}])
;