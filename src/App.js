import './App.css';
import logo from './images/logo.jpg';
import alikoPic from './images/maliko.png'
import resume from './Grace Aliko-resume.pdf'
import React from "react";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DataCareTransportScreen from './project_details/DataCareTransportScreen';

const projects = [
    {
      title: "Zap Technologies",
      description: "Building a custom responsive multisite for a student-led startup with React, Bootstrap, and JavaScript.",
      technologies: ["React.js", "Bootstrap", "GitHub API"],
      githubLink: "https://www.zaptek.org/",
      liveLink: "https://www.zaptek.org/",
    },
    {
      title: "Learn With Axes",
      description: "An EdTech platform where users can make direct payments for courses they wish to enroll in.",
      technologies: ["React", "Chart.js", "Paystack API"],
      githubLink: "",
      liveLink: "https://axes-tech.com/",
    },
    {
      title: "SafeRoyal",
      description: "A security system platform offering AI-based monitoring and reporting tools.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "",
      liveLink: "https://saferoyal.com/",
    },
    {
        title: "LEXARIQ",
        description: "A Deep Learning Framework for Dyslexia Detection",
        technologies: ["React Native"],
        githubLink: "",
        liveLink: "",
    },
    {
        title: "KNUST EXPRESSO",
        description: " A Web App Streamlining the Request of Academic Letters",
        technologies: ["React"],
        githubLink: "",
        liveLink: "",
    },
  ];

function HomeScreen(){
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="ml-0 navbar-brand" href="#"><img src={logo} height={'60em'}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100 justify-content-end"
                     id="navbarSupportedContent">
                    <div className="flex-grow-1 mr-5">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" href="/#projects">Projects <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#technologies">Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/#me'}>Me</a>
                            </li>
                            <li className="nav-item"><a className={'nav-link resume-btn'} target={'_blank'} href={resume}>Resume</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div orientation="left" className="side-left">
                <ul className="side-left-ul">
                    <li><a href="https://github.com/AlikoGrace" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-github"><title>GitHub</title>
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a></li>
                    <li><a href="https://www.instagram.com/the_gracealiko" aria-label="Instagram" target="_blank"
                           rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-instagram"><title>Instagram</title>
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a></li>
                    <li><a href="https://twitter.com/AlikoGrace" aria-label="Twitter" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-twitter"><title>Twitter</title>
                            <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/grace-aliko" aria-label="Linkedin" target="_blank"
                           rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-linkedin"><title>LinkedIn</title>
                            <path
                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>

                    </a></li>
                </ul>
            </div>
            <div orientation="right" className="side-right">
                <div className="side-right-div"><a className={'text-light'}
                    href="mailto:gracealiko08@gmail.com">gracealiko08@gmail.com</a></div>
            </div>
            <section className={'mt-5 '}>
                <div className="container ">
                    <div className="row intro-box">
                        <div className="col-md-9">
                            <section className={'container mb-5'}>
                                <p  className="Hi" style={{color:'white'}}>Hi there!</p>
                                <h3  className="spider" style={{color:'white'}}>I'm Spider Aliko</h3>
                                <h2 className={'greeting_headline-2'}>I craft the Web's best!</h2>
                                <div className="row">
                                    <p className="col-md-9 description-p"> I am a versatile software developer with a strong work ethic, natural curiosity, and a passion for
continuous learning. Proficient in JavaScript and experienced in both frontend and backend
development using related frameworks. Recognized for consistently delivering high-quality work and
driven by a passion for problem-solving and efficiency improvements, with a keen interest in
automation and AI-driven solutions.
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-3 horse-aside">

                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>
            <section className="container projects" id={'projects'}>
                <h2 className="greeting_headline">Projects</h2>
                <div className="row">
      {projects.map((project, index) => (
        <div key={index} className="project col-md-6 col-lg-4">
          <div className="content">
            <div className="project-header">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <footer>
              <ul className="project-tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        </div>
      ))}
    </div>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>
            <section className="container technologies" id={'technologies'}>
                <h2 className="greeting_headline">Technologies</h2>
                <div className="container">
                    <p className="description-p ">
                        I've worked with a range of technologies, from web-apps to mobile-apps.
                    </p>

                    <div className="row ">
                        <div className="col-md-4 tecnologies-tek">
                            <svg stroke="#fff" fill="#fff" strokeWidth="0" version="1.1"
                                 viewBox="0 0 34 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
                                <path
                                    d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
                            </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Front-End</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">Experience with <br/>React.js,
                                Next.js, Bootstrap, and tailwind</p></div>
                        </div>
                        <div className="col-md-4 tecnologies-tek" >
                            <svg stroke="#fff" fill="#fff" strokeWidth="0" version="1.1"
                                 viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.249 6.953c-2.833 0.351-4.585 1.184-4.794 2.293-0.038 0.18-0.038 1.184-0.019 2.236 0.038 1.573 0.066 1.971 0.208 2.226 0.152 0.294 0.152 0.341 0 0.739-0.142 0.369-0.152 0.654-0.104 2.188 0.038 0.966 0.114 1.904 0.18 2.075 0.085 0.237 0.085 0.369 0 0.559-0.142 0.303-0.152 2.975-0.019 3.78 0.057 0.379 0.18 0.673 0.36 0.9 0.843 1.052 3.079 1.677 6.366 1.781 4.083 0.133 7.2-0.635 7.939-1.952 0.199-0.341 0.208-0.493 0.208-2.226 0-1.468-0.028-1.933-0.151-2.226-0.123-0.313-0.123-0.417-0.028-0.597 0.085-0.161 0.114-0.71 0.095-2.018-0.019-1.876-0.047-2.151-0.256-2.454-0.104-0.152-0.095-0.227 0.019-0.464 0.123-0.227 0.152-0.644 0.142-2.302-0.009-1.175-0.057-2.15-0.123-2.33-0.256-0.786-1.393-1.506-2.937-1.876-1.895-0.445-4.964-0.587-7.086-0.332zM13.685 7.844c-0.028 0.047 0.502 0.057 1.213 0.028 1.052-0.038 3.827 0.123 3.733 0.218-0.019 0.019-0.445 0.076-0.957 0.133-0.521 0.057-1.023 0.152-1.137 0.208-0.189 0.104-0.189 0.114-0.028 0.237 0.161 0.114 0.151 0.123-0.095 0.18-0.777 0.161-1.279 0.36-1.459 0.587-0.455 0.578-0.057 1.156 0.919 1.364 0.739 0.152 3.657 0.057 4.462-0.142 0.891-0.227 1.345-0.483 1.345-0.767 0-0.388-0.569-0.673-1.942-0.957-0.73-0.142-0.265-0.171 0.644-0.028 0.9 0.142 1.63 0.417 1.866 0.72 0.171 0.227 0.189 0.379 0.189 2.027 0 2.037 0.019 1.989-0.909 2.416-1.345 0.635-3.534 0.872-7.333 0.805-0.72-0.019-0.777-0.028-0.578-0.142s0.133-0.133-0.663-0.18c-1.108-0.066-2.075-0.341-2.529-0.701-0.55-0.436-0.9-1.222-0.947-2.15-0.047-0.881 0.123-1.895 0.303-1.829 0.066 0.028 0.208-0.133 0.341-0.369 0.379-0.72 1.203-1.213 2.558-1.554 0.805-0.199 1.080-0.227 1.004-0.104zM10.123 14.949c0 0.388 0.189 0.549 0.928 0.767 2.672 0.805 8.697 0.701 10.421-0.18 0.351-0.18 0.398-0.237 0.398-0.53 0-0.36 0.095-0.417 0.322-0.18 0.18 0.18 0.171 0.019 0.151 1.98l-0.009 1.611-0.275 0.256c-0.587 0.54-2.624 0.966-5.116 1.080-3.088 0.142-6.622-0.464-7.162-1.232-0.104-0.152-0.133-0.559-0.133-1.847 0-1.402 0.019-1.677 0.161-1.828 0.218-0.246 0.313-0.208 0.313 0.104zM10.407 20.368c0.815 0.597 4.86 0.995 7.598 0.758 1.506-0.133 2.804-0.379 3.429-0.654 0.417-0.189 0.436-0.218 0.436-0.578 0-0.265 0.038-0.388 0.133-0.388 0.322 0 0.369 0.256 0.35 1.999-0.009 0.947-0.047 1.772-0.066 1.838-0.076 0.189-0.881 0.587-1.554 0.758-1.146 0.303-2.217 0.436-3.932 0.493-3.164 0.104-6.139-0.379-6.944-1.127-0.199-0.199-0.208-0.265-0.208-1.914 0-1.639 0.009-1.715 0.218-1.933l0.208-0.227 0.047 0.407c0.038 0.284 0.114 0.445 0.284 0.568z"></path>
                            </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Back-End</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">Experience with <br/>Databases including Relational and Non-relational (Firebase)</p></div>
                        </div>
                        <div className="col-md-4 tecnologies-tek">
                            <svg stroke="#fff" strokeWidth="0" version="1.1"
                                 viewBox="0 0 240 234" height="2.5rem" width="2.5rem"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="st0" d="M10 10h220v214H10z"/>
                                <path className="st1" d="M0 0v234h240V0H0zm10 10h220v214H10V10z"/>
                                <path className="st1"
                                      d="M174.3 98.3c-1.5-.7-3.4-1-5.8-1-12.6 0-21 9.7-21 25.8 0 18.4 8.6 25.8 19.8 25.8 2.4 0 5-.3 6.9-1.1V98.3h.1zm-44.8 25.6c0-23.3 15-41.5 39.6-41.5 2.1 0 3.2 0 5.2.2v-26c0-.6.5-1 1-1h16.1c.8 0 1 .3 1 .8v91.4c0 2.7 0 6.1.5 9.8 0 .7 0 .8-.6 1.1-8.4 4-17.2 5.8-25.6 5.8-21.7 0-37.2-13.4-37.2-40.6zm-34.1-16.2l28 54.3c.5.8.2 1.6-.6 1.6h-17.4c-1.1 0-1.6-.3-2.1-1.3-6.4-13.2-12.9-26.9-19.6-41.1h-.2c-6 13.4-12.6 28-19 41.2-.5.8-1 1.1-1.8 1.1H46.1c-1 0-1.1-.8-.6-1.4l27.4-52.7L46.4 57c-.6-.8 0-1.5.7-1.5h17.2c1 0 1.5.2 1.8 1.1C72.4 69.9 78.8 83 84.8 96.4h.2c5.8-13.2 12.2-26.5 18.3-39.6.5-.8.8-1.3 1.8-1.3h16.1c.8 0 1.1.6.6 1.5l-26.4 50.7z"/>
                            </svg>

                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">UI/UX</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">Experience with Figma
                                and Adobe XD</p></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 tecnologies-tek">
                            <svg width="2em" height="2em" viewBox="0 0 256 317" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <defs>
                                    <linearGradient x1="3.9517088%" y1="26.9930287%" x2="75.8970734%" y2="52.9192657%"
                                                    id="linearGradient-1">
                                        <stop stop-color="#000000" offset="0%"></stop>
                                        <stop stop-color="#000000" stop-opacity="0" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <g>
                                    <polygon fill="#fef"
                                             points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon>
                                    <polygon fill="#ddd"
                                             points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon>
                                    <polygon fill="#fff"
                                             points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon>
                                    <polygon fill="#00B5F8"
                                             points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon>
                                    <polygon fillOpacity="0.8" fill="url(#linearGradient-1)"
                                             points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon>
                                </g>
                            </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Mobile Apps</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">Experience with
                                Flutter</p></div>
                        </div>
                        <div className="col-md-4 tecnologies-tek">
                            <svg stroke="#fff" fill="#fff" strokeWidth="0" version="1.1"
                                 viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.334 14.023c0 0 0-2.972 2.972-2.972h8.917c0 0 0 2.972-2.972 2.972h-8.917zM15.334 17.821c0 0 0-2.972 2.972-2.972h4.459c0 0 0 2.972-2.972 2.972h-4.459zM15.334 21.619c0 0 0-2.972 2.972-2.972h1.486c0 0 0 2.972-2.972 2.972h-1.486zM14.336 19.3v2.371h-9.559l6.158-8.399h-5.286v-2.371h9.972l-6.129 8.4z"></path>
                            </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Scripting</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">Experience with
                                bash, batch and python</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>
            <section className="container bio" id={'me'}>
                <h2 className="greeting_headline">About me</h2>
                <div className="container">
                    <div className="row">
                        <div className={'col-md-7 text-white'}>
<p>I am tech enthusiast always eager to grow and evolve. Passionate about continuous learning and upskilling, I am a versatile and goal-oriented individual driven to achieve excellence in everything I do. I have experience in full-stack development (MERN stack) and knowledge in cleaning data and building machine learning models.</p>

<p>Currently, I’m diving deep into the intersection of Human-Computer Interaction (HCI) with game-based learning and therapy, focusing on creating impactful solutions for individuals with disabilities, especially in marginalized communities.</p>

<p>When I’m not coding or researching, you’ll probably find me reading about financial literacy, productivity, or binge-watching a Marvel movie (don’t judge!). I’m a team player with excellent problem-solving skills, and I bring energy, creativity, and a lot of fun to every project I’m part of. Oh, and I’m also super passionate about making a positive community impact!</p>
                        </div>
                        <div className="col-md-5">
                            <div className="aliko-card">
                                <img src={alikoPic} alt="Your Image"/>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>
            <section className="footer-section">
                <ul className="d-flex justify-content-start">
                    <div className="row text-small">
                        <div className="col-md-6"><h4
                            className="call-header">Call</h4><a href="tel:+233558344624" className="call-link">+233
                            (55) 8344-624</a></div>
                        <div className="col-md-6"><h4
                            className="email-header">Email</h4><a
                            href="mailto:gracealiko08@gmail.com" className="email-link">gracealiko08@gmail.com</a></div>
                    </div>
                </ul>
                <div className="container">
                    <div className={'socials-md'}>
                        <ul className="social-links">
                            <li><a href="https://github.com/AlikoGrace" aria-label="GitHub" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="feather feather-github"><title>GitHub</title>
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a></li>
                            <li><a href="https://www.instagram.com/the_gracealiko" aria-label="Instagram" target="_blank"
                                   rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="feather feather-instagram"><title>Instagram</title>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a></li>
                            <li><a href="https://twitter.com/AlikoGrace" aria-label="Twitter" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="feather feather-twitter"><title>Twitter</title>
                                    <path
                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a></li>
                            <li><a href="https://www.linkedin.com/in/grace-aliko" aria-label="Linkedin" target="_blank"
                                   rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="feather feather-linkedin"><title>LinkedIn</title>
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>

                            </a></li>
                        </ul>
                    </div>
                </div>

            </section>
        </section>
    );
}



function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<HomeScreen/>}/>
                <Route path='/data-care-transport-project' exact element={<DataCareTransportScreen/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
