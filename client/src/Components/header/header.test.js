import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Header from './header.js';
import {findByAttribute} from '../../../Utils/index.js';

//SET UP DATATEST ATTRIBUTE
const loadComponent = (props={}) =>{
  const wrapper = shallow(<Header {...props}/>)
  return wrapper
}

//Check all significant header components render
describe("Header component",()=>{
  let component;
  beforeEach(()=>{
    component=loadComponent()
  })

  it('Should render Header component without error', () => {
    console.log(component.debug());
    const header = findByAttribute(component,'header');
    expect(header.length).toBe(1);
  });
  //stretch 
  var componentList = ['nav','navList','aacLogo','aboutLink','thoughtsLink','clubsAndProjectsLink','beAnAllieLink'];

    it(`Should successfully render all essential components without error`,()=>{
      let elementTested;
      for(var i=0; i<componentList.length;i++){
        elementTested = findByAttribute(component,componentList[i]);
        console.log(elementTested.ShallowWrapper)
        console.log(`${componentList} rendered: ${elementTested.length? "True": "False"}`)

        expect(elementTested.length).toBe(1);
      }
    })
  
})

