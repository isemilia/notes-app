import React from "react";
import { Component } from "react";
import styled from "styled-components";

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
    }
    render() {
        return (
            <Form>
                <Input placeholder="Note title" />
                <Textarea as={'textarea'} placeholder="Note content" />
                <FormBtnGroup>
                    <Cancel>Cancel</Cancel>
                    <Submit>Create</Submit>
                </FormBtnGroup>
            </Form>
        );
    }
}

export default AddForm;