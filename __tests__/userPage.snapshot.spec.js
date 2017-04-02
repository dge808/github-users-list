import React from 'react';
import renderer from 'react-test-renderer';
import UserPage from '../src/js/components/UserPage';

const userInfo = {
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

describe('User Page(snapshot)', () => {
    it('should match User Page snapshot', () => {
        const component = renderer.create(<UserPage userInfo={userInfo}/>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    })
});