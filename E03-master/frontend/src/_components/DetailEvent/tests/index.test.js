import jsdom from 'jsdom'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { DetailEvent } from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

const defaultProps = {  
    title : "title",
    src: "/images/book.jpg",
    fecha: "8 de Septiembre",
    desc: "El autor estará firmando libros en la libreria Lemus de La Laguna" 
};

const renderComponent = (props) =>  
    <DetailEvent
        {...defaultProps}
        {...props}
    />;

describe('<DetailEvent />', () => {

  it('Comprobar que se renderiza DetailEvent', () => {
    const wrapper = mount(
        <DetailEvent
            title = "title"
            src = "/images/book.jpg"
            fecha = "8 de Septiembre"
            desc = "El autor estará firmando libros en la libreria Lemus de La Laguna"                
        />
    )
    expect(wrapper.find(DetailEvent)).toHaveLength(1)
  });

  it('Comprobar que los props contienen valores', () => {  
    const Component = mount(<DetailEvent {...defaultProps} />);
    expect((Component).prop('title')).toEqual('title');
    expect((Component).prop('src')).toEqual('/images/book.jpg');
    expect((Component).prop('fecha')).toEqual('8 de Septiembre');
    expect((Component).prop('desc')).toEqual('El autor estará firmando libros en la libreria Lemus de La Laguna');
  });

  it('Snapshot', () => {  
    const Component = renderer.create(<DetailEvent {...defaultProps} />).toJSON();
    expect(Component).toMatchSnapshot();
  });

})