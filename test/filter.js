'use strict';

var Filter = require('../src/filter');
var assert = require('assert');

describe('filter', function() {
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
});