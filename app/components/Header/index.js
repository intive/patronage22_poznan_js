import NavBar from "./Nav";
import { pageName } from "./MenuData";
import { MainHeader, FormNamePage, PrimeryNav, SecondaryNav, NavBtn } from "./headerStyle";

export default function Header() {
    return (
        <MainHeader>
            <PrimeryNav>
                <FormNamePage>{pageName}</FormNamePage>
                <NavBtn>kliknij</NavBtn>
                <NavBar />
            </PrimeryNav>
            <SecondaryNav>

            </SecondaryNav>
        </MainHeader >
    );
}
