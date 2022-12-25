import React from "react";
import { Component } from "react";
import styled from "styled-components";

import './btn.scss';

class Btn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {isLarge, label} = this.props;
        let classes = ['btn'];
        if (!isLarge) {
            classes.push('btn--small')
        }
        return (
            <button className={classes.join(' ')}> <span>{label}</span> </button>
        );
    }
}

export default Btn;