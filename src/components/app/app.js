import './app.scss';
import styled from 'styled-components';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Initial commit</h1>
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