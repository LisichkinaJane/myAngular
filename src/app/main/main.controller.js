(function() {
  'use strict';

  angular
    .module('260216')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.test ='hello World';
    vm.header ='todo List';
    vm.newTodo =null;

  }
})();
