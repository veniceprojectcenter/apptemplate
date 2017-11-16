var app = angular.module('app', [
  'ngRoute',
  'pascalprecht.translate',
  'ngMaterial',
  'ngMap',
  'firebase'
]);

app
.filter('to_trusted', function($sce){
  return function(text){ return $sce.trustAsHtml(text); };
})
;
