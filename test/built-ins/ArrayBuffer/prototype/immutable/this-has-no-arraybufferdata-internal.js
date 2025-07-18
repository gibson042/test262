// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-arraybuffer.prototype.immutable
description: >
  Throws a TypeError exception when `this` does not have a [[ArrayBufferData]]
  internal slot
info: |
  get ArrayBuffer.prototype.immutable
  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
features: [DataView, Int8Array, ArrayBuffer, immutable-arraybuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, "immutable"
).get;

assert.sameValue(typeof getter, "function");

var badReceivers = [
  ["plain object", {}],
  ["array", []],
  ["function", function(){}],
  ["ArrayBuffer.prototype", ArrayBuffer.prototype],
  ["TypedArray", new Int8Array(8)],
  ["DataView", new DataView(new ArrayBuffer(8), 0)]
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

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.immutable;
}, "invoked as property access");

assert.throws(TypeError, function() {
  getter();
}, "invoked as function");
