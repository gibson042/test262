// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `return` is a valid statement within generator function bodies.
features: [generators]
es6id: 14.4
---*/

var result;
class A {
  *g1() { return; }
  *g2() { return 1; }
}

result = A.prototype.g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

result = A.prototype.g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);
