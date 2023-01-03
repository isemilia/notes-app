import React from "react";
import { Component } from "react";
import styled from "styled-components";

import './btn.scss';

class Btn extends Component {
    constructor(props) {
        super(props);
    }
    onTogglePopup = (e) => {
        e.preventDefault();
        this.props.onTogglePopup();
    }
    render() {
        const {isLarge, label} = this.props;
        let classes = ['btn'];
        if (!isLarge) {
            classes.push('btn--small')
        }
        return (
            <button className={classes.join(' ')} onClick={this.onTogglePopup}> <span>{label}</span> </button>
        );
    }
}

export default Btn;