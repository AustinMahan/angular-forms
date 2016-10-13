(function () {
  var app = angular.module('anotherApp', []);

  app.controller('ctrl', function () {
    this.submitted = function () {
      this.allThings = { name: this.name, password: this.password, email: this.email, zip: this.zip };
    }
  });
})();
