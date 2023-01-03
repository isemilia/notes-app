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
  place-content: center;
  gap: 24px;
  margin-top: 60px;
`;

const AppWrap = styled.div`
  height: 100vh;
  position: relative;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: ''},
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: ''},
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: ''},
        {title: 'Note title', text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent sociosqu ad litora torquent per conubia nostra, per inceptos himena.', date: ''}
      ]
    }
  }
  render() {
    const elements = this.state.data.map(item => {
      const {title, text} = item;
      return (
        <NoteItem 
          title={title} 
          text={text}
          date={new Date()}
          key={generateID()} />
      )
    })
    return (
      <AppWrap>
        <PrimaryHeader />
        <main>
          <NotesWrap className='container'>
            {elements}
          </NotesWrap>
        </main>
        <Popup></Popup>
        <PrimaryFooter/>
      </AppWrap>
    );
  }
}

export default App;


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