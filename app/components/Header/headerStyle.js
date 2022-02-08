import styled from "styled-components";

const media = {
    tablets: '@media(min-width:720px)',
    desctop: `@media(min-width:1024px)`,
}

const NavBar = styled.header`
background-color: rgba(30,30,41,0.5);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
${media.tablets}{
    padding: 0 30px;
}
`
const LogoName = styled.a`
font-size:35px;
color:red;
${media.tablets}{
 font-size:40px;   
}
`
const MainNavBar = styled.div`
display: flex;
flex-direction:row;
align-items:center;
`
const SecondNavBar = styled(MainNavBar)`
flex-direction:row-reverse;
`

const ExploreMore = styled.span`
padding:0 25px;
color:white;
text-transform:uppercase;
${media.tablets}{
padding:0 50px;
}
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
    margin:0 40px;
}
`
const UserImg = styled.span`
background-color:black ;
color:white;
padding:8px;
margin:0 5px;
${media.tablets}{
 padding:8px;   
}
`
const MobileFormUl = styled.ul`
position:absolute;
left:5%;
top:50px;
padding:0;
max-width:70vw;
width: 100%;
display: flex;
flex-direction:column;
justify-content:center;
background-color:rgba(0,0,0,0.8);
border:1px solid white;
${media.tablets}{
    left:4.5%;
    max-width:45vw;
}
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