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
`;

const LeftSide = styled.div`
    display: flex;
    column-gap: 56px;
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
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
`;

class PrimaryFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Footer>
                <div className="container d-flex jc-space-between ai-center">
                    <LeftSide>
                        <NoteCount>
                            <img src={NoteIcon} alt="note" />
                            <span>5</span>
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
                </div>
            </Footer>
        )
    }
}

export default PrimaryFooter;