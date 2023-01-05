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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: new Date('Jan 02 2023 15:13:29 GMT+0600 (East Kazakhstan Time)'), id: 1},
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: new Date('Apr 15 2023 10:53:29 GMT+0600 (East Kazakhstan Time)'), id: 2},
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: new Date('Sep 23 2023 19:10:29 GMT+0600 (East Kazakhstan Time)'), id: 3},
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: new Date(), id: 4}
      ],
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
      data: [...newData]
    }));
  }
  onDelete = (id) => {
    console.log(id, 'deleted');
    this.setState(({data}) => {
      const newData = data.filter(item => item.id != id);
      return {
        data: newData
      }
    });
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
          onDelete={() => {this.onDelete(id)}} />
      );
    });
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


// const Wrapper = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   background-color: var(--clr-primary);
// `;

// const Overlay = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: rgba(0,0,0,.4);
//   display: grid;
//   place-content: center;
// `;

// const Card = styled.div`
//   max-width: 600px;
//   background-color: #fff;
//   border-radius: 20px;
//   display: grid;
//   place-content: center;
// `;

// function Popup({content, onClose}) {
//   const click = (e) => {
//     if(e.target.matches('.popup-overlay') || e.target.matches('.popup-close')) {
//       onClose();
//     }
//   }
//   return (
//     <Overlay onClick={click} className='popup-overlay'>
//       <Card>
//         <h2>{content}</h2>
//         <button className='popup-close'>close</button>
//       </Card>
//     </Overlay>
//   )
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isClosedPopup: true,
//     }
//   }
//   togglePopup = () => {
//     this.setState(({isClosedPopup}) => ({isClosedPopup: !isClosedPopup}))
//   }
//   render() {
//     return (
//       <Wrapper>
//         <h1>App initialized</h1>
//         {this.state.isClosedPopup ? '' : <Popup content="Hello World" onClose={this.togglePopup}></Popup> }
//         <button onClick={this.togglePopup}>Open</button>
//       </Wrapper>
//     );
//   }
// }