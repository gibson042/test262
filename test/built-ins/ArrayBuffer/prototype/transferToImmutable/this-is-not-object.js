// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-arraybuffer.prototype.transfertoimmutable
description: Throws a TypeError exception when `this` is not an object
info: |
  ArrayBuffer.prototype.transferToImmutable ( [ newLength ] )
  1. Let O be the this value.
  2. Return ? ArrayBufferCopyAndDetach(O, newLength, ~immutable~).

  ArrayBufferCopyAndDetach ( arrayBuffer, newLength, preserveResizability )
  1. Perform ? RequireInternalSlot(arrayBuffer, [[ArrayBufferData]]).
features: [Symbol, ArrayBuffer, immutable-arraybuffer]
includes: [compareArray.js]
---*/

const fn = ArrayBuffer.prototype.transferToImmutable;
assert.sameValue(typeof fn, "function");

var calls = [];
var newLength = {
  valueOf() {
    calls.push("newLength.valueOf");
    return 1;
  }
};

var badReceivers = [
  ["undefined", undefined],
  ["null", null],
  ["number", 42],
  ["string", "1"],
  ["true", true],
  ["false", false],
  ["symbol", Symbol("s")]
];

var i = 0;
for (; i < badReceivers.length; i++) {
  var label = badReceivers[0];
  var value = badReceivers[1];
  calls = [];
  assert.throws(TypeError, function() {
    fn.call(value, newLength);
  }, label);
  assert.compareArray(calls, [],
    "[" + label + " receiver] Must verify internal slots before reading arguments.");
}
assert.sameValue(i, badReceivers.length, "explicit receiver count");
