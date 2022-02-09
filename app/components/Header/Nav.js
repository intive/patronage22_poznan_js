import { DesctoFormUl, MobileFormUl, LinkStyle, DesctopLinkStyle } from './headerStyle'
import { navData } from './menuData';

const NavigationLink = ({ name, link }) => {
    return (
        <a style={{ width: '100%', color: 'white' }} href={link}>
            {name}
        </a>
    )
}

export const MainNav = () => {
    return (
        <>
            <DesctoFormUl>
                {navData.map(navigationItem =>
                    <DesctopLinkStyle key={navigationItem.name}>
                        <NavigationLink
                            name={navigationItem.name}
                            link={navigationItem.link}
                        />
                    </DesctopLinkStyle>)}
            </DesctoFormUl>
        </>
    )
}
export const MobileNav = () => {
    return (
        <>
            <MobileFormUl>
                {navData.map(navigationItem =>
                    <LinkStyle
                        key={navigationItem.name}>
                        <NavigationLink
                            name={navigationItem.name}
                            link={navigationItem.link}
                        />
                    </LinkStyle>
                )}
            </MobileFormUl>
        </>
    )
}