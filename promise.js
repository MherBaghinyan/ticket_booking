
var Promise = function () {
  this.successCallbacks = [];
  this.errorCallbacks = [];
};

Promise.prototype = {
  successCallbacks: null,
  errorCallbacks: null,
  then: function (success, error) {
    successCallbacks.push(success);
    if (error) {
      errorCallbacks.push(error);
    }
  }
};

var Defer = function () {
  this.promise = new Promise();
};

Defer.prototype = {
  promise: null,
  resolve: function (data) {
    this.promise.successCallbacks.forEach(function(callback) {
      window.setTimeout(function () {
        callback(data);
      }, 0);
    });
  },

  reject: function (error) {
    this.promise.errorCallbacks.forEach(function(callback) {
      window.setTimeout(function () {
        callback(error);
      }, 0);
    });
  }
};

function callService() {
  var defer = new Defer();

  serverCall(function (request) {
    if (request.status === 200) {
      deferred.resolve(request.responseText);
    } else {
      deferred.reject(new Error(request.status));
    }
  });
  return defer.promise;
}

callService().then(function (text) {
  alert(text);
}, function (error) {
  alert(error.message);
});
