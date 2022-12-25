import React from "react";
import { Component } from "react";
import styled from "styled-components";
import Btn from "../btn/btn";

const Header = styled.header`
    max-width: 1130px;
    background-color: var(--clr-neutral-100);
    border-radius: 0px 0px 60px 60px;
    padding: 2.1rem 0;
    margin: 0 auto;
    @media (max-width: 1023px) {
        padding: 1.1rem 0;
        border-radius: 0px 0px 20px 20px;
    }
`;

const PageTitle = styled.h1`
    font-weight: 600;
    font-size: clamp(2.6rem, 3vw, 3.2rem);
    color: var(--clr-primary-100);
`;

class PrimaryHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header>
                <div className="container d-flex jc-space-between ai-center">
                    <PageTitle>Notes</PageTitle>
                    <Btn isLarge={true} label="Create note"/>
                </div>
            </Header>
        );
    }
}

export default PrimaryHeader;