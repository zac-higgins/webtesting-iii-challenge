import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import Controls from './Controls';

describe("Controls the component", () => {
    const toggleMock = jest.fn();

    it("is open and unlocked", () => {
        const { getByTestId } = render(
            <Controls locked={false} closed={false} toggle={toggleMock} />
        );

        const lockBtn = getByTestId("lockButton");
        expect(lockBtn.textContent).toBe('Lock Gate')
        expect(lockBtn.disabled).toBe(true)

        const openBtn = getByTestId("openButton");
        expect(openBtn.textContent).toBe('Close Gate');
        expect(openBtn.disabled).toBe(false)
        fireEvent.click(openBtn)
        expect(openBtn.textContent).toBe('Close Gate')
    });

    it("is closed and unlocked", () => {
        const { getByTestId } = render(
            <Controls locked={false} closed={true} toggle={toggleMock} />
        );

        const lockBtn = getByTestId("lockButton");
        expect(lockBtn.textContent).toBe('Lock Gate')
        expect(lockBtn.disabled).toBe(false)


        const openBtn = getByTestId("openButton");
        expect(openBtn.textContent).toBe("Open Gate");
        expect(openBtn.disabled).toBe(false)
    })

    it("is closed and locked", () => {
        const { getByTestId } = render(
            <Controls locked={true} closed={true} toggle={toggleMock} />
        );

        const lockBtn = getByTestId("lockButton");
        expect(lockBtn.disabled).toBe(false)


        const openBtn = getByTestId("openButton");
        expect(openBtn.disabled).toBe(true)
    })
})