import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Header from './header.js';
import {findByAttribute,loadComponent} from '../../../Utils/index.js'
//SET UP DATATEST ATTRIBUTE

describe("Header component",()=>{
  let component;
  beforeEach(()=>{
    component=loadComponent()
  })
  it('Should render without error', () => {
    console.log(component.debug());
    const header = findByAttribute(component,'header');
    expect(header.length).toBe(1);
  });
  it('should successfully renders nav',()=>{
    const nav = findByAttribute(component,'nav');
    expect(nav.length).toBe(1);
  })
  it('should successfully renders nav',()=>{
    const nav = findByAttribute(component,'nav');
    expect(nav.length).toBe(1);
  })
})
