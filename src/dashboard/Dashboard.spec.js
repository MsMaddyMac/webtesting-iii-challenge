// Test away
import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('Dashboard', () => {

    test('Dashboard shows the display component', () => {
        const { queryByDisplayValue } = render(<Dashboard />);
        queryByDisplayValue(/open/i);
    });

    test('Dashboard shows the controls component', () => {
        const { getByTestId } = render(<Dashboard />);
        const controlButtons = getByTestId('control-buttons');
        expect(controlButtons).toHaveClass('controls panel')
    })
})

