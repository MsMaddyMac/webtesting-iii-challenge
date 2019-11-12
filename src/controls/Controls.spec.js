// // Test imports!
import React from "react";
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';


// Tests
describe("Controls the component", () => {
    const toggleMock = jest.fn();

    test('Gate default is opened and unlocked', () => {
        const { getByTestId } = render(
            <Controls locked={false} closed={false} toggle={toggleMock} />
        );

        const unlockButton = getByTestId('unlock-button');
        expect(unlockButton.textContent).toBe('Lock Gate')
        expect(unlockButton.disabled).toBe(true);

        const openButton = getByTestId('open-button');
        expect(openButton.textContent).toBe('Close Gate');
        expect(openButton.disabled).toBe(false)
        fireEvent.click(openButton)
        expect(openButton.textContent).toBe('Close Gate')
    });

    test('Gate is closed and locked', () => {
        const { getByTestId } = render(
            <Controls locked={true} closed={true} toggle={toggleMock} />
        );

        const unlockButton = getByTestId('unlock-button');
        expect(unlockButton.disabled).toBe(false);

        const openButton = getByTestId('open-button');
        expect(openButton.disabled).toBe(true)
    })
})
