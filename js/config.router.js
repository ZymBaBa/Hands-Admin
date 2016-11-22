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
        //默认页
          $urlRouterProvider
              .otherwise('/app/user');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              //用户管理
              .state('app.user', {
                  url: '/user',
                  templateUrl: 'tpl/user.html'
              })
              //企业管理-企业审核
              .state('app.enterprise_audit', {
                  url: '/enterprise_audit',
                  templateUrl: 'tpl/enterprise_audit.html'
              })
              //企业管理-企业列表
              .state('app.enterprise_list', {
                  url: '/enterprise_list',
                  templateUrl: 'tpl/enterprise_list.html'
              })
              //数据统计-企业统计
              .state('app.chart_enterprise', {
                  url: '/chart_enterprise',
                  templateUrl: 'tpl/chart_enterprise.html'
              })
              //数据统计-用户统计
              .state('app.chart_user', {
                  url: '/chart_user',
                  templateUrl: 'tpl/main/chart_user.html'
              })
              //数据统计-招聘统计
              .state('app.chart_hands', {
                  url: '/chart_hands',
                  templateUrl: 'tpl/chart_hands.html'
              })
              //数据统计-热闹统计
              .state('app.chart_hots', {
                  url: '/chart_hots',
                  templateUrl: 'tpl/chart_hots.html'
              })
              //权限设置-角色管理
              .state('app.role_management', {
                  url: '/role_management',
                  templateUrl: 'tpl/role_management.html'
              })
              //权限设置-区域管理
              .state('app.area_management', {
                  url: '/area_management',
                  templateUrl: 'tpl/area_management.html'
              })
              //Form(模态框要用的JS以前一个DIV，然后下面的要用这个的话，就要设置成app.form.XXX)
              .state('app.form', {
                  url: '/form',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad){
                              return uiLoad.load('js/controllers/form.js');
                          }]
                  }
              })
              //岗位设置
              .state('app.form.post_set', {
                  url: '/post_set',
                  templateUrl: 'tpl/post_set.html'
              })
              //其他设置
              .state('app.form.other_set', {
                  url: '/other_set',
                  templateUrl: 'tpl/other_set.html'
              })
      }
    ]
  );