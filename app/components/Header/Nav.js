import { DesktopFormUl, MobileFormUl, LinkStyle, DesktopLinkStyle } from './headerStyle';
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
      <DesktopFormUl>
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