
import React from 'react';
import { render } from '@testing-library/react';
import GenerateToken from './generateToken';

describe('Generate token module', () => {
    it('matches snapshot', () => {

        const { container } = render(<GenerateToken />);
        expect(container.cloneNode(true)).toMatchSnapshot();
    });
})