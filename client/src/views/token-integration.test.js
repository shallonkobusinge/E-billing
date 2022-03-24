import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import GenerateToken from './generateToken';

jest.mock('axios')

// describe('Report', () => {
//     test("Generate report calls doneChange when generate report button is clicked", () => {
//         const bill = { id: 1, meter: "119012", amount: "100" };
//         const doneChange = jest.fn();
//         render(<GenerateToken bill={bill} doneChange={doneChange} />);

//         const submitBtn = screen.getByTestId("submit-btn")
//         fireEvent.submit(submitBtn);


//     });

// })

describe('Test Case for Generate token Page', () => {
    test('Validate Generate report heading render', () => {
        render(
            <GenerateToken />
        );
        const linkElements = screen.queryAllByText('Electricity Token Generation');
        expect(linkElements).toHaveLength(1);
    });
});

describe('Test Case for Create Customer Page', () => {
    test('Validate Generate Button render', () => {
        // const wrapper = 
        render(
            <GenerateToken />
        );
        const linkElements = screen.queryAllByText('Generate');
        expect(linkElements).toHaveLength(1);
    });

});


const token = {
    amount: "1000",
    meter: "182092",
    username: "Shallon"
}

describe("Generate report with valid token views", () => {
    // it("accepts token  props", () => {
    //     const { rerender } = render(<GenerateToken token={token} />);
    //     expect(screen.getByTestId("username")).toHaveTextContent("Shallon");

    //     rerender(<GenerateToken token={token} />);
    //     expect(screen.getByTestId("username")).toHaveTextContent("Shallon");

    // });
    it("contains username ", () => {
        render(<GenerateToken />);
        const value = screen.getByLabelText("Enter your username");
        expect(value).toBeInTheDocument();
    });
    it("contains meter ", () => {
        render(<GenerateToken />);
        const value = screen.getByLabelText("meter");
        expect(value).toBeInTheDocument()
    });
});


// describe("Generating token", () => {
//     it('successful generating token', async () => {
        // jest
        //     .spyOn(window, 'fetch')
        //     .mockResolvedValue({ json: () => ({ token: '123' }) });

        // render(<GenerateToken />);

        // const meterField = screen.getByLabelText('meter');
        // const amountField = screen.getByLabelText('Enter amount');
        // const usernameField = screen.getByLabelText('Enter your username')
        // const button = screen.getByTestId('submit-btn');

        // // fill out and submit form
        // fireEvent.change(meterField, { target: { value: '11987' } });
        // fireEvent.change(amountField, { target: { value: '100' } });
        // fireEvent.change(usernameField, { target: { value: 'Shallon' } });
        // fireEvent.click(button);


        // await waitFor(() => {
        //     expect(button).toBeInTheDocument();
        //     expect(meterField).toBeInTheDocument();
        //     expect(amountField).toBeInTheDocument();
        //     expect(usernameField).toBeInTheDocument();
        // })
    // });
// })