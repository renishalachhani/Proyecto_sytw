import React from 'react'
import jsdom from 'jsdom'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

import Img from './../../Img'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<Img />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(<Img src="http://example.com/test.jpg" alt="test" />)
      .toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have a class attribute', () => {
    const { container } = render(
      <Img src="http://example.com/test.jpg" alt="test" className="hola" />
    )
    expect(container.querySelector('img').hasAttribute('class')).toBe(true)
  })

  it('should adopt a valid attribute', () => {
    const { container } = render(
      <Img src="http://example.com/test.jpg" alt="test" />
    )
    expect(container.querySelector('img').alt).toEqual('test')
  })

  it('should not adopt an invalid attribute', () => {
    const { container } = render(
      <Img src="http://example.com/test.jpg" attribute="test" alt="test" />
    )
    expect(container.querySelector('img').getAttribute('attribute')).toBeNull()
  })
})
