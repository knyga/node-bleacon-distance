'use strict';

var Math2 = {
    average: function(arr) {
        var sum = 0;

        for(var i=0;i<arr.length;i++) {
            sum += arr[i];
        }

        return sum/arr.length;
    },
    sigma: function(arr) {
        var a = this.average(arr);
        var sum = 0;

        for(var i=0;i<arr.length;i++) {
            sum += Math.pow(arr[i] - a, 2);
        }

        return Math.sqrt(sum/(arr.length-1), 0.5);
    }
};


module.exports = Math2;