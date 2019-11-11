import React from "react";
import { render } from 'react-testing-library';
import Display from './Display';


test('unlocked and open', () => {

    expect(Display.defaultProps.closed).toBe(false)
    expect(Display.defaultProps.locked).toBe(false)
})

