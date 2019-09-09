const sum = require('./sum');

var assert = require('assert');

  describe('Testing sum ', function() {
    it('adds 1 + 2 to equal 3', function() {
      assert.equal(sum(1, 2), 3);
    });

    it('adds 3 + 5 to equal 8', function() {
      assert.equal(sum(3, 5), 8);
    });

  });

