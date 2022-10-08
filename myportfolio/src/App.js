import React from 'react';
import './App.css'
// import Navbar from '.components/Navbar'
import Content from './pages/Content'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
    let webPage
    switch (window.location.pathname) {
      case "/":
        webPage = <About />
        break
        case "/projects":
          webPage = <Projects />
    }
  return (
    <div className='App'>
      
      {webPage}
      
      {/* <div className='content'>
             <Content name="Michael" message="This is cool"/>
             <Content name="April" message="I am learning"/>
             <Content name="Semira"/>
             <Content name="Amaia"/>
      </div> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
