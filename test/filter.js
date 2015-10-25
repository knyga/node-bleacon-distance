'use strict';

var Filter = require('../src/filter');
var assert = require('assert');

describe('filter', function() {

    var round = function(n, p) {
        var tp = Math.pow(10, p);
        return Math.round(n*tp)/tp;
    }

    it('filters values', function() {
        var filter = new Filter(10);
        var a;

        filter.add(10);
        filter.add(5);
        filter.add(7);
        filter.add(9);
        filter.add(11);
        filter.add(8);
        filter.add(10);
        filter.add(6);
        filter.add(7);
        filter.add(11);

        a = filter.average();
        assert.equal(filter.validate(8.5), true);
        assert.equal(filter.validate(85.5), false);
    });

    it('calculates average with sigma refence', function() {
        var filter = new Filter(10);
        filter.add(10);
        filter.add(5);
        filter.add(7);
        filter.add(9);
        filter.add(11);
        filter.add(8);
        filter.add(10);
        filter.add(6);
        filter.add(7);
        filter.add(11);
        filter.add(20);
        filter.add(2);

        assert.equal(round(filter.faverage(),2), 8.63);
        assert.equal(round(filter.faverage(1),2), 8.63);
        assert.equal(round(filter.faverage(2),2), 7.89);
        assert.equal(round(filter.faverage(3),2), 9.1);
    })
});