import styled from "styled-components";

const media = {
    desctop: `@media(max-width:768px)`
}

const MainHeader = styled.div`
background-color: rgba(30,30,41,0.5);
display: flex;
flex-direction: row;
align-items:center;
`
const FormA = styled.a`
font-size: 15px;
margin: 0 15px 0 15px;
color: white;
text-transform: uppercase;

`
const FormNamePage = styled(FormA)`
font-size: 30px;
margin-left: 30px;
color: red;
text-transform: none;
 ${media.desctop}{
     color:blue
 }
`
const FormUl = styled.ul`
 ${media.desctop}{
     display: none;
 }
`
const PrimeryNav = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width:70%;
`
const SecondaryNav = styled(PrimeryNav)`
flex-direction: row-reverse;
width:30%;
`
const NavBtn = styled.button`
text-transform: uppercase;
display:none;
${media.desctop}{
display:block
}
`
export { MainHeader, FormA, FormUl, FormNamePage, PrimeryNav, SecondaryNav, NavBtn }