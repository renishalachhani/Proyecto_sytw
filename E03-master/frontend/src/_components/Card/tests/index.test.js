import jsdom from 'jsdom'
import React from 'react'
import { mount, configure } from 'enzyme'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'

import Card from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<Card />', () => {
  it('Comprobar que se renderiza Card', () => {
    const wrapper = mount(
        <Card
          src="/images/book.jpg"
          title="Firma de Libros de Miguel Noguera"
          fecha="8 de Septiembre"
          desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
          id="1"
        />
    )
    expect(wrapper.find(Card)).toHaveLength(1)
  })

  it('Snapshot', () => {  
    const Component = renderer.create(<Card 
      src="/images/book.jpg"
      title="Firma de Libros de Miguel Noguera"
      fecha="8 de Septiembre"
      desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
      id="1"
    />).toJSON();
    expect(Component).toMatchSnapshot();
  });
})
