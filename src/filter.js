'use strict';

var Filter = function(n) {
    var _self = this;
    this.list = [];

    this.add = function(x) {
        list.push(x);

        if(list.length > n) {
            list.splice(0, list.length - n);
        }
    };

    this.validate = function(x) {
        if(list.length < n/2) {
            return true;
        }

        var s = sigma();
        var a = avg();
        return ((a-s) < x && (a+s) >= x) || (Math.random() > Math.abs(x-a)/a);
    }

    var avg = function() {
        var sum = 0;
        for(var i=0;i<list.length;i++) {
            sum += list[i];
        }
        return sum/list.length;
    }

    var sigma = function() {
        var a = avg();
        var sum = 0;
        for(var i=0;i<list.length;i++) {
            sum += Math.pow(list[i] - a, 2);
        }
        return Math.pow(sum, 0.5);
    }

    this.avg = avg;
    this.sigma = sigma;
}