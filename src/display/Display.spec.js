import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display'


test('defaults to unlocked and open', () => {
    expect(Display.defaultProps.closed).toBe(false)
    expect(Display.defaultProps.locked).toBe(false)
})

describe("Display", () => {

    it("has red-led when locked", () => {
        const { getByText } = render(<Display locked={true} />);
        const lockBtn = getByText("Locked");
        expect(lockBtn).toHaveClass("red-led")
    })

    it("has green-led when unlocked", () => {
        const { getByText } = render(<Display locked={false} />);
        const lockBtn = getByText("Unlocked");
        expect(lockBtn).toHaveClass("green-led")
    })

    it("has red-led when closed", () => {
        const { getByText } = render(<Display closed={true} />);
        const openBtn = getByText("Closed");
        expect(openBtn).toHaveClass("red-led")
    })

    it("has green-led when opened", () => {
        const { getByText } = render(<Display closed={false} />);
        const openBtn = getByText("Open");
        expect(openBtn).toHaveClass("green-led")
    })




})

