var assert = require('assert');
var test = {};

test.true_and_false_are_not_equal = function(){
	assert.notEqual(false,true);
};

exports.test = test;
