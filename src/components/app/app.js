import React from 'react';
import styled from 'styled-components';
import { Component, Fragment } from 'react';

import PrimaryHeader from '../primary-header/primary-header';
import NoteItem from '../note-item/note-item';
import PrimaryFooter from '../primary-footer/primary-footer';
import Popup from '../popup/popup';

import './app.scss';

function generateID() {
  return Math.random().toString(16).slice(2);
}

function moveCaretToEnd(editableElement) {
  const selection = window.getSelection();
  selection.selectAllChildren(editableElement);
  selection.collapseToEnd();
}

const NotesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  place-content: center;
  gap: 24px;
  margin-top: 30px;
  max-height: 80vw;
  overflow: auto;
  padding: 30px;
  max-width: 95.3rem;
`;

const AppWrap = styled.div`
  min-height: 100vh;
`;

const saveInLocalSorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
} 

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getFromLocalStorage('data'),
      popupIsClosed: true
    }
  }
  onTogglePopup = () => {
    this.setState(() => ({
      popupIsClosed: !this.state.popupIsClosed,
    }));
  }
  onCreateNote = (form) => { 
    const {data} = form.state;
    
    const newData = [...this.state.data, data];
    this.setState(() => ({
      data: newData
    }));
  }
  onDelete = (id) => {
    // console.log(id, 'deleted');
    this.setState(({data}) => {
      const newData = data.filter(item => item.id != id);
      return {
        data: newData
      }
    });
  }
  onContentChange = (id, target) => {
    console.log(id, target.getAttribute('data-name'), 'changed');
    
    const attr = target.getAttribute('data-name');
    const newData = this.state.data.map(item => {
      if (item.id === id) {
        return {...item, [attr]: target.textContent}
      }
      return item;
    });
    moveCaretToEnd(target); // keep cursor at the end. prevents it from jumping to the beginning
    this.setState(() => ({
      data: newData
    }));
  }
  render() {
    const {data} = this.state;
    const elements = data.map(item => {
      const {title, text, date, id} = item;
      return (
        <NoteItem 
          title={title} 
          text={text}
          date={date}
          key={id}
          onDelete={() => {this.onDelete(id)}}
          onContentChange={(e) => {this.onContentChange(id, e.target)}} />
      );
    });
    saveInLocalSorage('data', data);
    // console.log(getFromLocalStorage('data'));
    const noteCount = data.length;
    return (
      <AppWrap>
        <PrimaryHeader 
          onTogglePopup={this.onTogglePopup} />
        <main>
          <NotesWrap className='container'>
            {elements}
          </NotesWrap>
        </main>
        {this.state.popupIsClosed ? '' : <Popup onTogglePopup={this.onTogglePopup} onCreateNote={this.onCreateNote} />}
        <PrimaryFooter 
          noteCount={noteCount} />
      </AppWrap>
    );
  }
}

export default App;
export {generateID};
