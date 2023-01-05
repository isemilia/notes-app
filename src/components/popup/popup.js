import React from "react";
import { Component } from "react";
import styled from "styled-components";

import AddForm from "../add-form/add-form";

const PopupRoot = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(77, 77, 89, 0.5);
    backdrop-filter: blur(3px);
    display: grid;
    place-content: center;
    z-index: 100;
`;

const Card = styled.div`
    background: var(--clr-neutral-200);
    border-radius: 15px;
    padding: 20px 24px;
    width: 330px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

const CardTitle = styled.h2`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.2em;
    color: var(--clr-primary-100);
    text-align: center;
`;

class Popup extends Component {
    constructor(props) {
        super(props);
    }
    onTogglePopup = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('popup-root')) {
            this.props.onTogglePopup();
        }
    }
    render() {
        return (
            <PopupRoot className="popup-root" onClick={this.onTogglePopup}>
                <Card>
                    <CardTitle>Add a new note</CardTitle>
                    <AddForm onCreateNote={this.props.onCreateNote} />
                </Card>
            </PopupRoot>
        );
    }
}

export default Popup;