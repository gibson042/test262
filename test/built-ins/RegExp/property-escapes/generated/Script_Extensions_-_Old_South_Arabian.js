// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_South_Arabian`
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
    [0x010A60, 0x010A7F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_South_Arabian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_South_Arabian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sarb}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sarb}"
);
testPropertyEscapes(
  /^\p{scx=Old_South_Arabian}+$/u,
  matchSymbols,
  "\\p{scx=Old_South_Arabian}"
);
testPropertyEscapes(
  /^\p{scx=Sarb}+$/u,
  matchSymbols,
  "\\p{scx=Sarb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010A5F],
    [0x010A80, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_South_Arabian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_South_Arabian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sarb}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sarb}"
);
testPropertyEscapes(
  /^\P{scx=Old_South_Arabian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_South_Arabian}"
);
testPropertyEscapes(
  /^\P{scx=Sarb}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sarb}"
);
