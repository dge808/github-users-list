import React from 'react';
import renderer from 'react-test-renderer';
import UsersTableRow from '../src/js/components/UsersTableRow';

const rowInformation = {
    name: 'Alina',
    followers: 2,
    following: 2,
    created_at: "2015-07-31T05:24:19Z",
    company: null,
    email: "dge808@gmail.com",
    location: "Ukraine",
    blog: "",
    bio: null
};

describe('User Table Row(snapshot)', () => {
    it('should match Users Table Row snapshot', () => {
        const component = renderer.create(<UsersTableRow rowInformation={rowInformation}/>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    })
});