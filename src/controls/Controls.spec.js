import React from "react";
import { render } from 'react-testing-library';

import Controls from './Controls';

test('it renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});