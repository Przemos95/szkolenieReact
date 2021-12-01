// suites / tests
// describe / it

import React from 'react';
import renderer from 'react-test-renderer';
import CalculateComponent from './CalculateComponent.dev';

describe('Caluclate Component', () => {
    it('should equal snapshot', () => {
        const component = renderer.create(<CalculateComponent name={'Tekst'} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});


describe('Testing Calc Component', () => {
    beforeAll(() => {
        // console.log("before all");
    });

    beforeEach(() => {
        // console.log("before each");
    });

    afterEach(() => {
        // console.log("after each")
    })

    afterAll(() => {
        // console.log("after all")
    })

    it('should render proper year', () => {
        expect(2 + 2).toEqual(4);
    });

    // it.skip('should render proper month', () => {
    //     expect(2 + 2).toEqual(5);
    // });

    it('should render proper month', () => {
        expect(2 + 2).toEqual(4);
    });

    it('async test', () => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    })


});