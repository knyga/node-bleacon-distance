'use strict';

var distance = require('../src/distance');
var assert = require('assert');

describe('distance', function() {
    it('calculates distance', function() {
        assert.equal(distance(0.5, 0.4), 0.10737418240000011);
        assert.equal(distance(0.4, 1), 1052.1823134991691);
    });
});