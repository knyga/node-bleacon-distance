'use strict';

var Math2 = require('../src/math2');
var assert = require('assert');

describe('math2', function() {
    it('average', function() {
        assert.equal(Math2.average([5]), 5);
        assert.equal(Math2.average([2, 8, 10, 20]), 10);
        assert.equal(Math2.average([13, 23, 12, 44, 55]), 29.4);
    });

    it('sigma', function() {
        assert.equal(Math2.sigma([13, 23, 12, 44, 55]), 19.243180610283737);
    });
});