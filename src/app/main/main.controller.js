(function() {
  'use strict';

  angular
    .module('myAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.test ='hello World';
    vm.header ='todo List';
    vm.btnText = "ADD:";
    vm.items = [
    {
      name:"first",
      completed: false,
      id:0
    },
    {
      name:"cecond",
      completed: false,
      id:1
    }
    ];
    vm.newTodo =null;

    vm.addItem = function(e){
      var model = null;
     
      if(e.keyCode ===13 || e.type === 'click'){
        model = {
          name:vm.newTodo,
          completed: false,
          id:generateId 
      };
      vm.items.push(model);
      vm.newTodo =null;
      }
    },
    vm.deleteItem = function(e, id){
       var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
        })[0]);

      vm.items.splice(currentIndex, 1);
    
    },

  function generateId () {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

  }
})();
