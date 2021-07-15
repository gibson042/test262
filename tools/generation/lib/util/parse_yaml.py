# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import yaml, re

yamlPattern = re.compile(
        r'^\s*---\n\s*?(?P<indent>[^\n\S]*)(?P<content>\S.*?)(?:\n[^\n\S]*)?---\s*$',
        flags=re.DOTALL)

def parse_yaml(string):
    match = yamlPattern.match(string)
    if not match:
        return False

    unindented = re.sub('^' + match.group('indent'), '',
        match.group('content'), flags=re.MULTILINE)

    return yaml.safe_load(unindented)
