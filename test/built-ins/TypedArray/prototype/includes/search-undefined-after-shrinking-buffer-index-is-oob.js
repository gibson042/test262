// Copyright 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.includes
description: >
  Search undefined after shrinking the buffer with out-of-bounds index.
info: |
  %TypedArray%.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  3. Let len be TypedArrayLength(taRecord).
  ...
  5. Let n be ? ToIntegerOrInfinity(fromIndex).
  ...
  11. Repeat, while k < len,
    ...
  12. Return false.
features: [TypedArray, resizable-arraybuffer]
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(TA => {
  var rab = new ArrayBuffer(TA.BYTES_PER_ELEMENT, {maxByteLength: TA.BYTES_PER_ELEMENT});
  var ta = new TA(rab);
  assert.sameValue(ta.length, 1);

  var index = {
    valueOf() {
      // Resize buffer to zero.
      rab.resize(0);

      // Index is out-of-bounds when comparing to the original length.
      return 1;
    }
  };

  var result = ta.includes(undefined, index);

  assert.sameValue(result, false);
  assert.sameValue(ta.length, 0);
});
