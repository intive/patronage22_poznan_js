import { DesctoFormUl, MobileFormUl, LinkStyle, StyleI, DesctopLinkStyle } from "./headerStyle"
import { navData } from "./MenuData";
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
                    <DesctopLinkStyle key={elementA.name}>
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
                    <LinkStyle
                        key={elementA.name}>
                        <SingleA
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