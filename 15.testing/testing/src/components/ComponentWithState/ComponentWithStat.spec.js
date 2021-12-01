import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWithState from './ComponentWithState';
import Delay from 'redux-saga';

jest.mock('../../services/ProductService');
const productService = require('../../services/ProductService').default;

describe('Component with state', () => {
    beforeAll(() => {
        productService.setList([3, 4, 5, 6]);
    });

    it('should display correct products', async () => {
        const component = renderer
            .create(<ComponentWithState />);
        
        await Delay();
        const productList = 
            component.root.findByProps({className:'products'});

        expect(productList.count()).toEqual(4);
        expect(productList[0]).toEqual('<div className="products">3</div>');
    });
});