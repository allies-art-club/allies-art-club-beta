const findByAttribute=(component,attr)=>{
  const comp = component.find(`[data-test='${attr}']`)
  return comp
}

export {findByAttribute}