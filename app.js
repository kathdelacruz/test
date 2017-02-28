angular
  .module("main-app", ["ui.router"])
  .config(function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $stateProvider
      .state("login", {
        url: "/",
        templateUrl: "views/login/login.html",
        controller: "LoginController as ctrl"
      })
      .state("welcome", {
        url: "/bienvenido",
        templateUrl: "views/welcome/welcome.html",
        controller: "LoginController as ctrl"
      });
  });