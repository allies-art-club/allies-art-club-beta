import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer.js';
import {findByAttribute} from '../../../Utils/index.js';

// const loadComponent=(props={})=>{
//     const wrapper = shallow(<Footer {...props}/>)
//     return wrapper
// }

// describe("Footer Component",()=>{
//     let component;
//     beforeEach(()=>{
//         component=loadComponent()
//     })

//     it("Should render footer component without errors",()=>{
//         console.log(component.debug())

//         const footer = findByAttribute(component,'footer');
//         expect(footer.length).toBe(1);
//     })
//     const componentsList = ["awtfIcon","awtfCaption","charityNumberCaption","aacIcon","aacCaption"]

//     let subComponent;
//     it("All subcomponents should render correctly",()=>{
//         for(var i=0; i<componentsList.length;i++){
//             console.log(componentsList[i]);
//             subComponent=findByAttribute(component,componentsList[i]);

//             expect(subComponent.length).toBe(1);
//         }
//     })
// })