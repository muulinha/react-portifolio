import React from 'react';
import ToDoList from '../../assets/todolist.png';
import Weather from '../../assets/weather-dashboard.png';
import Destination from '../../assets/destination.jpg';

import '../../index.css';
import './Project.css'


function Project() {
  return (
      <section className="portfolio">
      <div className="center">
          <h1 className="page-header">My Portfolio</h1>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
          <div class="col">
              <div class="card">
                  <img
                      src={ToDoList}
                      alt="ToDoList"
                      class="card-img-top"
                  />
                  <div class="card-body">
                      <p className="center">To Do Tracker</p>
                      <a href="https://github.com/muulinha/to-do-list-react" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary">GitHub</button>
                      </a>
                      <a href="https://muulinha.github.io/to-do-list-react/" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary">Website</button>
                      </a>
                  </div>
              </div>
          </div>

          <div class="col">
              <div class="card">
                  <img
                      src={Weather}
                      alt="Weather"
                      class="card-img-top"
                  />
                  <div class="card-body">
                      <p className="center">Weather Dashboard</p>
                      <a href="https://github.com/muulinha/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary">GitHub</button>
                      </a>
                      <a href="https://muulinha.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary">Website</button>
                      </a>
                  </div>
              </div>
          </div>

          <div class="col">
              <div class="card">
                  <img
                      src={Destination}
                      alt="Destination"
                      class="card-img-top"
                  />
                  <div class="card-body">
                      <p className="center">Destination Inspiration</p>
                      <a href="https://github.com/muulinha/Destination_Inspiration" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary">GitHub</button>
                      </a>
                      <a href="https://muulinha.github.io/Destination_Inspiration/" target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary">Website</button>
                      </a>
                  </div>
              </div>
          </div>

      </div>
  </section>
  )
}
  
  export default Project;