import { FormA, FormUl } from "./headerStyle";
import { navData } from "./MenuData";
const SingleA = ({ name, link }) => {
    return (
        <FormA href={link}>
            {name}
        </FormA>
    )
}

const NavBar = () => {
    return (
        <>
            <FormUl>
                {navData.map(elementA =>
                    <SingleA
                        name={elementA.name}
                        link={elementA.link}
                    />)}
            </FormUl>
        </>
    )
}
export default NavBar