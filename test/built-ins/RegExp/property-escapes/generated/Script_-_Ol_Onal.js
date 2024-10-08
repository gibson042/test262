// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Ol_Onal`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01E5FF
  ],
  ranges: [
    [0x01E5D0, 0x01E5FA]
  ]
});
testPropertyEscapes(
  /^\p{Script=Ol_Onal}+$/u,
  matchSymbols,
  "\\p{Script=Ol_Onal}"
);
testPropertyEscapes(
  /^\p{Script=Onao}+$/u,
  matchSymbols,
  "\\p{Script=Onao}"
);
testPropertyEscapes(
  /^\p{sc=Ol_Onal}+$/u,
  matchSymbols,
  "\\p{sc=Ol_Onal}"
);
testPropertyEscapes(
  /^\p{sc=Onao}+$/u,
  matchSymbols,
  "\\p{sc=Onao}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01E5CF],
    [0x01E5FB, 0x01E5FE],
    [0x01E600, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Ol_Onal}+$/u,
  nonMatchSymbols,
  "\\P{Script=Ol_Onal}"
);
testPropertyEscapes(
  /^\P{Script=Onao}+$/u,
  nonMatchSymbols,
  "\\P{Script=Onao}"
);
testPropertyEscapes(
  /^\P{sc=Ol_Onal}+$/u,
  nonMatchSymbols,
  "\\P{sc=Ol_Onal}"
);
testPropertyEscapes(
  /^\P{sc=Onao}+$/u,
  nonMatchSymbols,
  "\\P{sc=Onao}"
);
