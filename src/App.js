import React from 'react';
import './App.scss';
import './resetStyle.scss'

function App() {
  return (
    <div>
      <div class="main">
        <div class="welcome centered">
          <h1>Welcome to my portfolio <br /> Front End Developer</h1>
        </div>
        <div class="about centered">
          <div className="about__text">
            <span class="about__text--big-letter">Hello</span>
            <h2>My <br />name is <br /> Taras</h2>
          </div>
          <p>More info about me</p>
        </div>
        <div class="projects">
          <h3><span>Projects</span> will show you my skills <br/><span>that</span> I improve everyday. <br/><span>I</span> hope you will enjoy my projects or <br/><span>already</span> enjoy them. <br/><span>Make</span> fun!</h3>
        </div>
        <div class="skills">
          <h3><span>What</span> are my <br/><span>skills</span> and abilities? Or <br/><span>do</span> I have future skills plan? <br/><span>I</span> will show you. Click here to <br/><span>have</span> more information!</h3>
        </div>
        <div class="contact centered">
          <h2 class="contact--vertical">Contact me</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
