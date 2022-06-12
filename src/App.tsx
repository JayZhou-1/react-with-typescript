import React from 'react';
import './App.css';
import dog from './images/dog.jpeg'
import store from './images/store.jpeg'
import front from './images/front.jpeg'
import wechat from './images/weChat.png'

  // const App : React.FC = ()=> {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

function App() {


  return (
    <div>
      {/* <span className="heading"> One Day Off</span> */}
      <h1> One Day Off</h1>
      <img src={dog} alt="Dog" />
      <img src={store} alt="store" />
      <img src={front} alt="front" />
      <img src={wechat} alt="wechat" />
      <div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.4504116472376!2d-79.38719598403024!3d43.84649227911509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b0ef443eabd%3A0x45b73d312e7e850c!2zT25lIERheSBPZmYg5LuK5pel5pG46bG8!5e0!3m2!1sen!2sca!4v1655062547571!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

    </div>
  );
}

export default App;
