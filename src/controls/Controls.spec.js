import React from "react";
import { render } from 'react-testing-library';

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard'

test('it renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

test('when closed and locked, open is disabled and unlock is enabled', () => {
    const closedMock = jest.fn();
    const lockedMock = jest.fn();

    const { getByText } = render(<Controls closed={true} locked={true} toggledClosed={closedMock} toggledLocked={lockedMock} />);

    const openButton = getByText(/open gate/i);
    const unlockButton = getByText(/unlock gate/i);

    expect(openButton.disabled).toBeTruthy();
    expect(unlockButton.disabled).toBeFalsy();
});