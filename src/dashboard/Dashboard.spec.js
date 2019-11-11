import React from "react";
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});