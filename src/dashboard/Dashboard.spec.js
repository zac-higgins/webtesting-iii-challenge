import React from "react";
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

test('shows the controls and display', async () => {
    const { findAllByText } = render(<Dashboard />)

    const unlocked = await findAllByText(/unlocked/i);
    const open = await findAllByText(/open/i);
    const lock = await findAllByText(/lock/i);
    const close = await findAllByText(/close/i);

    expect(unlocked);
    expect(open);
    expect(lock);
    expect(close);
})