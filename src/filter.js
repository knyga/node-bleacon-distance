'use strict';

var Math2 = require('./math2');

var Filter = function(n) {
    var _self = this;
    this.list = [];

    this.add = function(x) {
        _self.list.push(x);

        if(_self.list.length > n) {
            _self.list.splice(0, _self.list.length - n);
        }
    };

    this.validate = function(x) {
        if(_self.list.length < n/2) {
            return true;
        }

        var s = _self.sigma();
        var a = _self.average();
        return ((a-s) < x && (a+s) >= x) || (Math.random() > Math.abs(x-a)/a);
    };

    this.average = function() {
        return Math2.average(this.list);
    };

    this.sigma = function() {
        return Math2.sigma(this.list);
    };
};

module.exports = Filter;