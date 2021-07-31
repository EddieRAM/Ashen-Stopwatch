import './App.css';
import React from 'react';

const App = () => {
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
          <p>Countdown to a really special date. One you could or would never imagine!</p>
        </div>
        <div>
          <section>
            <p>87</p>
            <p><snall>Days</snall></p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p><snall>Hours</snall></p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p><snall>Minutes</snall></p>
          </section>
          <span>:</span><section>
            <p>87</p>
            <p><snall>Seconds</snall></p>
          </section>          
        </div>
      </section>
      </section>
  );
}

export default App;
