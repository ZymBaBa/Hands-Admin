'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/app/user');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.user', {
                  url: '/user',
                  templateUrl: 'tpl/main/user.html'
              })
              .state('app.user_chart', {
                  url: '/user_chart',
                  templateUrl: 'tpl/main/user_chart.html'
              })
              .state('app.enterprise_audit', {
                  url: '/enterprise_audit',
                  templateUrl: 'tpl/main/enterprise_audit.html'
              })
              .state('app.enterprise_list', {
                  url: '/enterprise_list',
                  templateUrl: 'tpl/main/enterprise_list.html'
              })
              .state('app.chart_enterprise', {
                  url: '/chart_enterprise',
                  templateUrl: 'tpl/main/chart_enterprise.html'
              })
              .state('app.chart_user', {
                  url: '/chart_user',
                  templateUrl: 'tpl/main/chart_user.html'
              })
              .state('app.role_management', {
                  url: '/role_management',
                  templateUrl: 'tpl/main/role_management.html'
              })
              .state('app.area_management', {
                  url: '/area_management',
                  templateUrl: 'tpl/main/area_management.html'
              })
              .state('app.post_set', {
                  url: '/post_set',
                  templateUrl: 'tpl/main/post_set.html'
              })
              .state('app.other_set', {
                  url: '/other_set',
                  templateUrl: 'tpl/main/other_set.html'
              })
      }
    ]
  );