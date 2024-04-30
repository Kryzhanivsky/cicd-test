import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
    test('renders counter with initial value 0', () => {
        render(<App/>);
        const finalValueElement = screen.getByText('Final value: 0');
        expect(finalValueElement).toBeInTheDocument();
    });

    test('clicking +2 button increments the counter by 2', () => {
        render(<App/>);
        const plus2Button = screen.getByText('+2');
        fireEvent.click(plus2Button);
        const finalValueElement = screen.getByText('Final value: 2');
        expect(finalValueElement).toBeInTheDocument();
    });

    test('clicking -2 button decrements the counter by 2', () => {
        render(<App/>);
        const minus2Button = screen.getByText('-2');
        fireEvent.click(minus2Button);
        const finalValueElement = screen.getByText('Final value: -2');
        expect(finalValueElement).toBeInTheDocument();
    });

    test('clicking *2 button multiplies the counter by 2', () => {
        render(<App/>);
        const multiply2Button = screen.getByText('*2');
        fireEvent.click(multiply2Button);
        const finalValueElement = screen.getByText('Final value: 0');
        expect(finalValueElement).toBeInTheDocument();
    });
});
