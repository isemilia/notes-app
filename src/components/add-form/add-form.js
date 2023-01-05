import React from "react";
import { Component } from "react";
import styled from "styled-components";

import { generateID } from "../app/app";

const Input = styled.input`
    appearance: none;
    border: 0;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding: 1rem 1.4rem;
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.2em;
    color: var(--clr-neutral-300);
`;

const Textarea = styled(Input)`
    resize: vertical;
    min-height: 130px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

const Btn = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    padding: 0;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.2em;
`;

const Submit = styled(Btn)`
    background: var(--clr-accent-100);
    border-radius: 20px;
    padding: .375em 1.125em;
    color: var(--clr-neutral-100);
`;

const Cancel = styled(Btn)`
    color: var(--clr-accent-100);
    text-decoration: none;
`;

const FormBtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 20px;
`;

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: '',
                text: '',
                date: new Date(),
                id: generateID()
            }
        }
    }
    onValueChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    }
    resetForm = () => {
        this.setState(() => ({
            data: {
                title: '',
                text: '',
                date: new Date(),
                id: generateID()
            }
        }));
    }
    onTogglePopup = () => {
        this.props.onTogglePopup();
        this.resetForm();
    }
    onCreateNote = (e, form) => {
        e.preventDefault();

        const {data} = this.state;

        if (Object.values(data).every(item => item.toString().trim() != '')) {
            this.props.onCreateNote(form);
            // console.log(data);
            // this.resetForm();
            this.onTogglePopup();
        } else {
            console.log('no data');
        }
    }
    render() {
        return (
            <Form onSubmit={(e) => {this.onCreateNote(e, this)}}>
                <Input onChange={this.onValueChange} value={this.state.data.title} type="text" name="title" placeholder="Note title" />
                <Textarea onChange={this.onValueChange} value={this.state.data.text} name="text" as={'textarea'} placeholder="Note content" />
                <FormBtnGroup>
                    <Cancel id="cancel" onClick={this.onTogglePopup}>Cancel</Cancel>
                    <Submit type="submit" id="submit" onClick={(e) => { e.stopPropagation(); }}>Create</Submit>
                </FormBtnGroup>
            </Form>
        );
    }
}

export default AddForm;