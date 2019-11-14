import React from 'react';
import { render, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';



describe("Dashboard", () => {
    const { getByTestId } = render(<Dashboard />);

    it("renders the display", () => {
        const { queryByDisplayValue } = render(<Dashboard />);
        queryByDisplayValue(/unlocked/i);

    })

    it("shows the controls", () => {
        const { getByTestId } = render(<Dashboard />);
        const controlBtns = getByTestId("controls");
        expect(controlBtns).toHaveClass("controls panel")
    })
})