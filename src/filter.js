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

    this.validate = function(x, sn) {
        if(typeof sn === "undefined") {
            sn = 1;
        }

        var s = _self.sigma();
        var a = _self.average();
        return (a-s * sn) < x && (a+s * sn) >= x;
    };

    this.average = function() {
        return Math2.average(this.list);
    };

    this.sigma = function() {
        return Math2.sigma(this.list);
    };

    this.faverage = function(sn) {
        var flist = [];

        for(var i=0; i<this.list.length; i++) {
            if(this.validate(this.list[i], sn)) {
                flist.push(this.list[i]);
            }
        }

        return Math2.average(flist);
    }
};

module.exports = Filter;