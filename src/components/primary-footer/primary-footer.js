import React from "react";
import { Component } from "react";
import styled from "styled-components";

import NoteIcon from '../../img/note-icon.png';
import GhIcon from '../../img/github.svg';
import WaIcon from '../../img/wa.svg';
import InstaIcon from '../../img/insta.svg';

const Footer = styled.footer`
    background-color: var(--clr-neutral-100);
    border-radius: 60px 60px 0px 0px;
    max-width: 1130px;
    width: 100%;
    padding: 1.2rem 0 1.4rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1023px) {
        border-radius: 30px 30px 0px 0px;
    }   
`;

const NoteCount = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.2em;
        color: var(--clr-accent-100);
    }
    @media (max-width: 610px) {
        img {
            max-width: 18px;
        }
    }
`;

const LeftSide = styled.div`
    display: flex;
    column-gap: 56px;
    @media (max-width: 767px) {
        column-gap: 20px;
        justify-content: center;
    }
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
    @media (max-width: 610px) {
        width: 100%;
        column-gap: 35px;
        justify-content: center;
    }
`;

const SocialIconLink = styled.a`
    display: block;
    width: 25px;
    height: 25px;
`;

const FooterText = styled.div`
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.2em;
    color: var(--clr-primary-200);
    max-width: 384px;
    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 610px) {
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 20px;
    }
`;

class PrimaryFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {noteCount} = this.props;
        return (
            <Footer>
                <FooterContainer className="container">
                    <LeftSide>
                        <NoteCount>
                            <img src={NoteIcon} alt="note" />
                            <span>{noteCount}</span>
                        </NoteCount>
                        <FooterText>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.</FooterText>
                    </LeftSide>
                    <Socials>
                        <SocialIconLink href="#">
                            <img src={GhIcon} alt="Github" />
                        </SocialIconLink>
                        <SocialIconLink href="#">
                            <img src={InstaIcon} alt="Instagram" />
                        </SocialIconLink>
                        <SocialIconLink href="#">
                            <img src={WaIcon} alt="Whatsapp" />
                        </SocialIconLink>
                    </Socials>
                </FooterContainer>
            </Footer>
        )
    }
}

export default PrimaryFooter;