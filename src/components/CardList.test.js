import React from 'react'
import {shallow} from 'enzyme';
import CardList from './CardList';
import renderer from 'react-test-renderer';

// it('expect to render Card component', () => {
//     expect(shallow(<Card />)).toMatchSnapshot();
// })

it('CardList renders correctly', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'SnowyJohns',
      email: 'snow@gmail.com'
    }
  ]
  const tree = renderer
    .create(shallow(<CardList robots={mockRobots}/>))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
