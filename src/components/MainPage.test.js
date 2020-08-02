import React from 'react'
import {shallow} from 'enzyme';
import MainPage from '../components/MainPage';
import renderer from 'react-test-renderer';

let wrapper;
beforeEach(()=> {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('expect to render MainPage component', () => {
expect(wrapper).toMatchSnapshot();
});

it('filter robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
      id: 3,
      name: 'John',
      email: 'john@gmailcom'
      }
    ],
    searchField: 'John',
    isPending: false
  }
  let wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmailcom'
    }])
})

it('filter robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
      id: 3,
      name: 'John',
      email: 'john@gmailcom'
      }
    ],
    searchField: 'a',
    isPending: false
  }
  const filterRobots = []
  let wrapper3 = shallow(<MainPage {...mockProps3} />)
  expect(wrapper3.instance().filterRobots()).toEqual(filterRobots)
})
