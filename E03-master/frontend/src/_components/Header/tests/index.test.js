import jsdom from 'jsdom'
import React from 'react'
import { mount, configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../index.jsx'
import renderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

import LocalStorageMock from "../../../../__mocks__/localStorageMock"

global.localStorage = new LocalStorageMock;

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

var history = createMemoryHistory();

describe('<Header />', () => {
  test('Comprobar que se renderiza Header', () => {
    const wrapper = mount(
      <Router history={history}>
        <Header />
      </Router>
    )
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('Snapshot', () => {  
    const Component = renderer.create(
      <Router history={history}>
        <Header />
      </Router>
    ).toJSON();
    expect(Component).toMatchSnapshot();
  });
})
