import { DesctoFormUl, UserImg, MobileFormUl, LinkStyle, StyleI, DesctopLinkStyle } from "./headerStyle"
import { navData, userImg } from "./MenuData";
const SingleA = ({ name, link }) => {
    return (
        <StyleI href={link}>
            {name}
        </StyleI>
    )
}

function MainNav() {
    return (
        <>
            <DesctoFormUl>
                {navData.map(elementA =>
                    <DesctopLinkStyle>
                        <SingleA
                            name={elementA.name}
                            link={elementA.link}
                        />
                    </DesctopLinkStyle>)}
            </DesctoFormUl>
        </>
    )
}
function MobileNav() {
    return (
        <>
            <MobileFormUl>
                {navData.map(elementA =>
                    <LinkStyle >
                        <SingleA
                            key={elementA.name}
                            name={elementA.name}
                            link={elementA.link}
                        />
                    </LinkStyle>
                )}
            </MobileFormUl>
        </>
    )
}
export { MainNav, MobileNav, }