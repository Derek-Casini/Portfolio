import React from 'react';
import { VscDebugStart, VscGithub } from "react-icons/vsc";

function ProjectsTable(){
    return(
        <table className="projects-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Language(s)</th>
                    <th>Description</th>
                    <th>Demo</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Recursive Stair Stepper Problem Solver
                    </td>
                    <td>
                        C++
                    </td>
                    <td>
                        Uses recursion to solve the stair stepper problem.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=CBAGSYVloRY" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Recursive-Stair-Stepper-Problem-Solver" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Hunt The Wumpus
                    </td>
                    <td>
                        C++
                    </td>
                    <td>
                        A game where the user moves around rooms to defeat the wumpus using their bow and arrow. The user can also escape by obtaining the gold and leaving via the escape rope. Written in C++.
                    </td>
                    <td>
                    <a href="https://www.youtube.com/watch?v=c5bvdJeFmZE" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Hunt-The-Wumpus" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Integer Calculator
                    </td>
                    <td>
                        Assembly
                    </td>
                    <td>
                        Asks the user for 10 signed decimal integers, then returns each number along with the sum and average.
                    </td>
                    <td>
                    <a href="https://www.youtube.com/watch?v=Jf5DD1MYL_0" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Integer-Calculator" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Random Integers
                    </td>
                    <td>
                        Assembly
                    </td>
                    <td>
                        Generates random integers, then sorts and counts them.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=3yFlUTK6pvw" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Random-Integers" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Exercise Tracker
                    </td>
                    <td>
                        Javascript, HTML, CSS, JSON
                    </td>
                    <td>
                        A full stack MERN app which tracks exercises completed. Note that the backend spins down after periods of inactivity which may cause Exercise Tracker to take a while to load.
                    </td>
                    <td>
                        <a href="https://derek-casini.github.io/Exercise_Tracker/#/" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Full-Stack-MERN-Exercise-Tracker" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Min Heap
                    </td>
                    <td>
                        Python
                    </td>
                    <td>
                        A heap where data is stored in a tree ordered from smallest to largest.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=3RbXo1nWfxE" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Min-Heap" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Hash Map
                    </td>
                    <td>
                        Python
                    </td>
                    <td>
                        Hash map implementation using open addressing.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=NMXpLVjcm7g" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Hash-Map" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProjectsTable;