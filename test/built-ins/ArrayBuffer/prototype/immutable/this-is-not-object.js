// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-arraybuffer.prototype.immutable
description: Throws a TypeError exception when `this` is not an object
info: |
  get ArrayBuffer.prototype.immutable
  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
features: [Symbol, ArrayBuffer, immutable-arraybuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, "immutable"
).get;

assert.sameValue(typeof getter, "function");

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
  assert.throws(TypeError, function() {
    getter.call(value);
  }, label);
}
assert.sameValue(i, badReceivers.length, "explicit receiver count");
