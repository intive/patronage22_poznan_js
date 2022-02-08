import styled from "styled-components";

export default function Footer() {
const links = ['Audio and Subtitles', 'Audio Description', 'Help Center', 'Gift Cards', 'Media Center', 'Investor Relations', 'Jobs', 'Terms of Use', 'Privacy', 'Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us'];

function Item(props) {
    return <ListItem><a>{props.value}</a></ListItem>;
}

function List(props) {
    const links = props.links;
    const listItems = links.map((link, index) =>
    <Item key={index} value={link} />
    );
    return (
        <LinksList>
        {listItems}
        </LinksList>
    );
}

    return (
        <FooterWrapper>
            {/* TODO waiting for icons ticket P2022-610 */}
            {/* <IconWrapper>
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
            </IconWrapper> */}
            <List links={links} />
            <p style={{fontSize: "0.8rem", marginLeft: "2.40rem", marginTop:"2rem"}}>© 2022 InTiVi</p>
        </FooterWrapper>
    );
}

export const FooterWrapper = styled.footer`
    display: grid;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    color: rgb(94, 93, 93);
    background-color: rgb(0, 0, 0);
    @media (max-width: 768px) {
		justify-content: flex-start;
	}
`;

export const IconWrapper = styled.ul`
    list-style-type: none;
`;

export const LinksList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 7rem;
    row-gap: 1.1rem;
    list-style-type: none;
    @media (max-width: 992px) {
		grid-template-columns: 1fr 1fr;
        column-gap: 10rem;
	}
    @media (max-width: 768px) {
        column-gap: 8rem;
        font-size: 0.9rem;
    }
    @media (max-width: 480px) {
        column-gap: 3rem;
    }
`;

export const ListItem = styled.li`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
