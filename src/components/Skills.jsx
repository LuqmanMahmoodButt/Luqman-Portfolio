import React from 'react';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="title has-text-centered">Skills</h2>
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <div className="box has-text-centered">
              <p>JavaScript</p>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box has-text-centered">
              <p>React</p>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box has-text-centered">
              <p>Node.js</p>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box has-text-centered">
              <p>CSS</p>
            </div>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
}

export default Skills;