import React from 'react';
import styled from 'styled-components';
import { Component, Fragment } from 'react';

import PrimaryHeader from '../primary-header/primary-header';
import NoteItem from '../note-item/note-item';
import PrimaryFooter from '../primary-footer/primary-footer';
import Popup from '../popup/popup';
import Empty from '../empty/empty';

import './app.scss';

function generateID() {
  return Math.random().toString(16).slice(2);
}

function moveCaretToEnd(editableElement) {
  const selection = window.getSelection();
  selection.selectAllChildren(editableElement);
  selection.collapseToEnd();
}

function cursorPosition() {
  let sel = document.getSelection();
  sel.modify("extend", "backward", "paragraphboundary");
  let pos = sel.toString().length;
  if(sel.anchorNode != undefined) sel.collapseToEnd();

  return pos;
}

const NotesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  place-content: center;
  gap: 24px;
  margin-top: 30px;
  /* max-height: 90vw; */
  overflow: auto;
  padding: 30px;
  max-width: 95.3rem;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 519px) {
    grid-template-columns: 1fr;
  }
`;

const AppWrap = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
  @media (max-width: 767px) {
    padding-bottom: 130px;
  }
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
      data: getFromLocalStorage('data') ? getFromLocalStorage('data') : [],
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
    // console.log(id, target.getAttribute('data-name'), 'changed');
    
    const attr = target.getAttribute('data-name');
    // keep cursor at the end. prevents it from jumping to the beginning. buggy in firefox
    moveCaretToEnd(target); 
    const newData = this.state.data.map(item => {
      if (item.id === id) {
        return {...item, [attr]: target.textContent}
      }
      return item;
    });
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
    const mainStyle = noteCount === 0 ? {display: 'grid', placeContent: 'center', minHeight: '72vh', paddingTop: '30px'} : null
    return (
      <AppWrap>
        <PrimaryHeader 
          onTogglePopup={this.onTogglePopup} />
        <main style={mainStyle}>
          {noteCount === 0 ? <Empty/> : null}
          <NotesWrap className='container' style={noteCount === 0 ? {display: 'none'} : null}>
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
