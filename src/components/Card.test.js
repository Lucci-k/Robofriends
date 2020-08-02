import React from 'react'
import {shallow} from 'enzyme';
import Card from './Card';
import renderer from 'react-test-renderer';

// it('expect to render Card component', () => {
//     expect(shallow(<Card />)).toMatchSnapshot();
// })

it('renders correctly', () => {
  const tree = renderer
    .create(shallow(<Card />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
