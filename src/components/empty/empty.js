import React from "react";
import { Component } from "react";
import styled from "styled-components";

import Image from "../../img/empty-list.svg"

const Card = styled.div`
    background: var(--clr-neutral-100);
    border-radius: 15px;
    padding: 20px 30px;
    display: grid;
    place-content: center;
    max-width: 486px;
    margin: 0 auto;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.2em;
    text-align: center;
    color: var(--clr-primary-200);
    row-gap: 25px;
    @media (min-width: 500px) {
        min-width: 486px;
    }
`;

class Empty extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <img src={Image} alt="list is empty" />
                <div>Your list looks empty. <br />
                    Start adding notes!</div>
            </Card>
        )
    }
}

export default Empty;