import React from "react";
import { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    background: var(--clr-neutral-100);
    box-shadow: -6px 6px 12px rgba(228, 228, 229, 0.2), 6px -6px 12px rgba(228, 228, 229, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9), 6px 6px 15px rgba(228, 228, 229, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(228, 228, 229, 0.5);
    border-radius: 15px;
    padding: 18px 20px;
`;

const Title = styled.h2`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.2em;
    color: var(--clr-primary-100);
    border-radius: 2px;
    &:focus {
        outline: 1px solid var(--clr-accent-100);
    }
`;

const Text = styled.div`
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.2em;
    color: var(--clr-primary-200);
    margin-top: 10px;
    min-height: 100px;
    max-height: 102px;
    border-radius: 2px;
    &:focus {
        outline: 1px solid var(--clr-accent-100); 
    }
`;

const Footer = styled.div`
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Date = styled.div`
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.2em;
    color: var(--clr-neutral-300);
`;

const Delete = styled.button`
    appearance: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    svg {
        pointer-events: none;
    }
`;

const deleteIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <path d="M17.5 5.00001H13.3333V3.60834C13.3138 3.07486 13.0835 2.57089 12.693 2.20692C12.3025 1.84295 11.7835 1.64867 11.25 1.66668H8.75C8.21647 1.64867 7.69756 1.84295 7.30703 2.20692C6.9165 2.57089 6.68622 3.07486 6.66667 3.60834V5.00001H2.50001C2.27899 5.00001 2.06703 5.08781 1.91075 5.24409C1.75447 5.40037 1.66667 5.61233 1.66667 5.83334C1.66667 6.05436 1.75447 6.26632 1.91075 6.4226C2.06703 6.57888 2.27899 6.66668 2.50001 6.66668H3.33334V15.8333C3.33334 16.4964 3.59673 17.1323 4.06557 17.6011C4.53441 18.07 5.1703 18.3333 5.83334 18.3333H14.1667C14.8297 18.3333 15.4656 18.07 15.9344 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8333V6.66668H17.5C17.721 6.66668 17.933 6.57888 18.0893 6.4226C18.2455 6.26632 18.3333 6.05436 18.3333 5.83334C18.3333 5.61233 18.2455 5.40037 18.0893 5.24409C17.933 5.08781 17.721 5.00001 17.5 5.00001ZM8.33334 3.60834C8.33334 3.47501 8.50834 3.33334 8.75 3.33334H11.25C11.4917 3.33334 11.6667 3.47501 11.6667 3.60834V5.00001H8.33334V3.60834ZM15 15.8333C15 16.0544 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H5.83334C5.61232 16.6667 5.40036 16.5789 5.24408 16.4226C5.0878 16.2663 5.00001 16.0544 5.00001 15.8333V6.66668H15V15.8333Z" fill="#69687C"/>
        </g>
    </svg>
);

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }
    prependZero(n) {
        return n < 10 ? '0' + n : n;
    }
    onChange = (e) => {
        this.props.onContentChange(e);
    }
    render() {
        const {title, text, date, onDelete} = this.props;

        const noteDate = {
            hour: date.getHours(),
            minutes: date.getMinutes(),
            day: date.getDate(),
            year: date.getFullYear(),
            month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date),
        }

        return (
            <Wrap className="note-item">
                <div className="note-item-body">
                    <Title 
                        contentEditable={true} 
                        onInput={this.onChange} 
                        tabIndex="0"
                        suppressContentEditableWarning={true}
                        data-name="title">{title}</Title>
                    <Text 
                        contentEditable={true} 
                        onInput={this.onChange} 
                        tabIndex="0"
                        suppressContentEditableWarning={true}
                        data-name="text">{text}</Text>
                </div>
                <Footer>
                    <Date>
                        <span className="time" style={{marginRight: '10px'}}>{this.prependZero(noteDate.hour)}:{this.prependZero(noteDate.minutes)}</span>
                        <span className="day">{noteDate.month} {noteDate.day}, {noteDate.year}</span>
                    </Date>
                    <Delete onClick={onDelete}>
                        {deleteIcon}
                    </Delete>
                </Footer>
            </Wrap>
        );
    }
}

export default NoteItem;