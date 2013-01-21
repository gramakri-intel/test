var adder = require('./adder'),
    assert = require('assert');

assert(adder.add(4, 5) == 9);
assert(adder.add(4, 6) == 10);
assert(adder.sub(4, 5) == -1);

