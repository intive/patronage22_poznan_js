import { MainNav, MobileNav } from "./Nav";
import { pageName, mobileMenu, userImg } from "./MenuData";
import { NavBar, MainNavBar, LogoName, SecondNavBar, ExploreMore, UserImg } from "./headerStyle";
import { useState } from "react";

export default function Header() {
    const [showMoblieMenu, setMoblieMenu] = useState(false)
    return (
        <>
            <NavBar>
                <MainNavBar>
                    <LogoName>{pageName}</LogoName>
                    <ExploreMore onClick={() => setMoblieMenu(!showMoblieMenu)} >{mobileMenu}</ExploreMore>
                    <MainNav />
                </MainNavBar>
                <SecondNavBar>
                    {/* TODO search input */}
                    <UserImg>{userImg}</UserImg>
                    {/* TODO waiting for icons */}
                </SecondNavBar>
            </NavBar >
            {showMoblieMenu ? <MobileNav /> : null}
        </>
    );
}
