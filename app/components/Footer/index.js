import styled from "styled-components";
export default function Footer() {
    return (
        <FooterWrapper>
            {/* TODO waiting for icons ticket P2022-610 */}
            {/* <IconWrapper>
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
            </IconWrapper> */}
            <LinksList>
                <LinkStyle>Audio and Subtitles</LinkStyle>
                <LinkStyle>Audio Description</LinkStyle>
                <LinkStyle>Help Center</LinkStyle>
                <LinkStyle>Gift Cards</LinkStyle>
                <LinkStyle>Media Center</LinkStyle>
                <LinkStyle>Investor Relations</LinkStyle>
                <LinkStyle>Jobs</LinkStyle>
                <LinkStyle>Terms of Use</LinkStyle>
                <LinkStyle>Privacy</LinkStyle>
                <LinkStyle>Legal Notices</LinkStyle>
                <LinkStyle>Cookie Preferences</LinkStyle>
                <LinkStyle>Corporate Information</LinkStyle>
                <LinkStyle>Contact Us</LinkStyle>
            </LinksList>
            <p style={{fontSize: "0.8rem", marginLeft: "2.40rem", marginTop:"2rem"}}>© 2022 InTiVi</p>
        </FooterWrapper>
    );
}

export const FooterWrapper = styled.div`
    display: grid;
    justify-content: center;
    bottom: 0;
    width: 100%;
    color: grey;
    background-color: black;
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

export const LinkStyle = styled.li`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;