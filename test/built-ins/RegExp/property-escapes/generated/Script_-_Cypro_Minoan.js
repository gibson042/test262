// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Cypro_Minoan`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x012F90, 0x012FF2]
  ]
});
testPropertyEscapes(
  /^\p{Script=Cypro_Minoan}+$/u,
  matchSymbols,
  "\\p{Script=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\p{Script=Cpmn}+$/u,
  matchSymbols,
  "\\p{Script=Cpmn}"
);
testPropertyEscapes(
  /^\p{sc=Cypro_Minoan}+$/u,
  matchSymbols,
  "\\p{sc=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\p{sc=Cpmn}+$/u,
  matchSymbols,
  "\\p{sc=Cpmn}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x012F8F],
    [0x012FF3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Cypro_Minoan}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\P{Script=Cpmn}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cpmn}"
);
testPropertyEscapes(
  /^\P{sc=Cypro_Minoan}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cypro_Minoan}"
);
testPropertyEscapes(
  /^\P{sc=Cpmn}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cpmn}"
);
