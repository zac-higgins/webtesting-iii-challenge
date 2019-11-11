import React from "react";
import { render } from 'react-testing-library';

import Display from './Display';

test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

