'use strict';

var calculate = function(txPower, rssi) {
    if (rssi == 0) {
        return -1; // if we cannot determine distance, return -1.
    }

    var ratio = rssi/txPower;

    if (ratio < 1) {
        return Math.pow(ratio, 10);
    }

    return (0.89976) * Math.pow(ratio, 7.7095) + 0.111;
};

module.exports = calculate;