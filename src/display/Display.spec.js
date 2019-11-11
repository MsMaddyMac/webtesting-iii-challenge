// Test away!
import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

test('Gate defaults to unlocked/open', () => {
    expect(Display.defaultProps.closed).toBe(false)
    expect(Display.defaultProps.locked).toBe(false)

})

