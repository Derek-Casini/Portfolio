import React from 'react';
import ProjectsTable from '../components/ProjectsTable';
import Navigation from '../components/Navigation';

function Projects(){
    return(
        <div className="App-projects">
            <Navigation/>
            <div className="App-projects-table">
                <ProjectsTable/>
            </div>
        </div>
    );
}

export default Projects;