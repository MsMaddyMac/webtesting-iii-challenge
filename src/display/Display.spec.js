// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe('Display', () => {
    test('red-led displays when locked', () => {
        const { getByText } = render(<Display locked={true} />);
        const lockButton = getByText('Locked');
        expect(lockButton).toHaveClass('red-led')
    });

    test('green-led displays when unlocked', () => {
        const { getByText } = render(<Display locked={false} />);
        const lockButton = getByText('Unlocked');
        expect(lockButton).toHaveClass('green-led')
    });

    test('red-led displays when closed', () => {
        const { getByText } = render(<Display closed={true} />);
        const openButton = getByText('Closed');
        expect(openButton).toHaveClass('red-led')
    });

    test('green-led displays when open', () => {
        const { getByText } = render(<Display closed={false} />);
        const openButton = getByText('Open');
        expect(openButton).toHaveClass('green-led')
    });



})


