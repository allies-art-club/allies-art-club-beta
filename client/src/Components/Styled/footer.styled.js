import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #FF66C4;
  height: 300px;
  display: flex;
  justify-content: space-between;
`
const AwtfLogo= styled.img`
  border-radius: 50%;
`
const FooterElementWrapper=styled.div`
  width:${props=>props.width}%;
  border-right: 3px solid white;
`

export {FooterContainer,AwtfLogo,FooterElementWrapper}
