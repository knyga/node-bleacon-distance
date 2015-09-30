'use strict';

var BleaconDistance = require('../bleacon-distance');
var assert = require('assert');

describe('BleaconDistance', function() {
    it('valid', function() {
        assert.equal(typeof BleaconDistance.distance, 'function');
        assert.equal(typeof BleaconDistance.Filter, 'function');
    });
});