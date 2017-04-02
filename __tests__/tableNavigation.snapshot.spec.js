import React from 'react';
import renderer from 'react-test-renderer';
import TableNavigation from '../src/js/components/TableNavigation';

describe('Table Navigation(snapshot)', () => {
    it('should match Table Navigation snapshot', () => {
        const component = renderer.create(<TableNavigation currentPage={1} perPage={25}/>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    })
});