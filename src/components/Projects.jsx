import React from 'react';
import '../App.css'; // Make sure to import your custom CSS

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title has-text-centered fade-in">Projects</h2>
        <div className="columns is-multiline">
          <div className="column is-half">
            <div className="box fade-in">
              <div className="project">
                <img src="https://i.imgur.com/OPzIV7I.png" alt="To-Do-List App" className="animated-image" />
                <div className="project-info">
                  <a href="https://list-too-do.netlify.app" className="button" target="_blank" rel="noopener noreferrer">
                    To-Do-List App
                  </a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box fade-in">
              <div className="project">
                <img src="https://i.imgur.com/3a56YtO.png" alt="Shirtify App" className="animated-image" />
                <div className="project-info">
                  <a href="https://status-catalogue.netlify.app" className="button" target="_blank" rel="noopener noreferrer">
                    Catalogue App
                  </a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box fade-in">
              <div className="project">
                <img src="https://i.imgur.com/lnIfg47.png" alt="Catch The Spy Game" className="animated-image" />
                <div className="project-info">
                  <a href="https://luqmanmahmoodbutt.github.io/catch-the-spy/" className="button" target="_blank" rel="noopener noreferrer">
                    Catch The Spy Game
                  </a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box fade-in">
              <div className="project">
                <img src="https://i.imgur.com/aWvltsg.png" alt="Football Team Builder" className="animated-image" />
                <div className="project-info">
                  <a href="https://football-legend-manager-frontend.netlify.app/" className="button" target="_blank" rel="noopener noreferrer">
                    Football Team Builder
                  </a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;