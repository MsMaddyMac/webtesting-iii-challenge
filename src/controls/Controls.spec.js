// // Test imports!
import React from "react";
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';


// Tests
test('If unlock button clicked, can not open gate', () => {
    const wrapper = render(<Controls />);
    const unlockButton = wrapper.getByTestId('unlock-button');
    const closeButton = wrapper.getByTestId('close-button');
    // expect(unlockButton.textContent).toBe(`Lock Gate`);
    expect(closeButton.textContent).toBe(`Close Gate`);
    // fireEvent.click(unlockButton);
    // expect(closeButton.textContent).toBe('Close Gate');
    fireEvent.click(closeButton);
    expect(unlockButton.textContent)
    .toBe(`Lock Gate`);
    expect(closeButton.textContent).toBe(`Close Gate`)
})