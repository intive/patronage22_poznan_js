import styled from "styled-components";

const media = {
    desctop: `@media(min-width:1024px)`
}

const NavBar = styled.header`
background-color: rgba(30,30,41,0.5);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
`
const LogoName = styled.a`
font-size:35px;
color:red;
`
const MainNavBar = styled.div`
display: flex;
flex-direction:row;
align-items:center;
`
const SecondNavBar = styled(MainNavBar)`
`

const ExploreMore = styled.span`
padding:0 30px;
width: 60vw;
color:black;
text-transform:uppercase;
${media.desctop}{
    display: none;
}
`
const DesctoFormUl = styled.ul`
display: none;
${media.desctop}{
    display: flex;
    flex-direction:row;
    padding:0;
    margin:0 15px;
}
`
const UserImg = styled.span`
background-color:black ;
color:white;
padding:8px;
margin:0 5px;
`
const MobileFormUl = styled.ul`
position:absolute;
padding:0;
margin:0 15px;
max-width:30vw;
width: 100%;
display: flex;
flex-direction:column;
justify-content:center;
background-color: black;
`
const LinkStyle = styled.li`
text-transform:uppercase;
list-style:none;
text-align:center;
margin: 10px;
`
const DesctopLinkStyle = styled(LinkStyle)`
margin:0 10px;

`
const StyleI = styled.a`
width: 100%;
color:white;
`
export { NavBar, MainNavBar, LogoName, SecondNavBar, ExploreMore, MobileFormUl, LinkStyle, StyleI, UserImg, DesctoFormUl, DesctopLinkStyle }